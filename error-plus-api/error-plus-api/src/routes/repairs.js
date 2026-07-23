const express = require('express');
const pool = require('../db/pool');
const { requireAuth, optionalAuth } = require('../middleware/auth');

const router = express.Router();

function genCode(applianceName) {
  const prefix = applianceName.substring(0, 2).toUpperCase();
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `${prefix}-GEN-ERR${rand}`;
}

/**
 * POST /api/repairs
 * body: { technicianId, name, phone, address }
 * Equivale a saveRepair() del frontend (botón WhatsApp / Solicitar llamada).
 * Requiere sesión (usuario registrado o invitado); si el usuario es
 * invitado, el repair se guarda sin user_id.
 */
router.post('/', optionalAuth, async (req, res) => {
  const { technicianId, name, phone, address } = req.body;

  if (!technicianId || !name || !phone || !address) {
    return res.status(400).json({ error: 'Faltan datos del formulario (nombre, celular, dirección o técnico).' });
  }
  if (!/^[0-9]{10}$/.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({ error: 'Ingresa un número de celular válido de 10 dígitos.' });
  }
  if (address.trim().length < 5) {
    return res.status(400).json({ error: 'Ingresa una dirección válida.' });
  }

  try {
    const [techRows] = await pool.query(
      `SELECT t.id, t.price, a.id AS appliance_id, a.name AS appliance_name,
              t.city_id, c.name AS city_name
       FROM technicians t
       JOIN appliances a ON a.id = t.appliance_id
       JOIN cities c ON c.id = t.city_id
       WHERE t.id = ?`,
      [technicianId]
    );
    const tech = techRows[0];
    if (!tech) return res.status(404).json({ error: 'Técnico no encontrado.' });

    const id = 'REP-' + Date.now();
    const code = genCode(tech.appliance_name);
    const userId = req.user && req.user.id ? req.user.id : null;

    await pool.query(
      `INSERT INTO repairs (id, user_id, technician_id, appliance_id, code, status, price, request_date, address, city_id, rated)
       VALUES (?, ?, ?, ?, ?, 'pending', ?, CURDATE(), ?, ?, 0)`,
      [id, userId, tech.id, tech.appliance_id, code, tech.price, address, tech.city_id]
    );

    res.status(201).json({ id, code, status: 'pending' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear la solicitud de reparación.' });
  }
});

/**
 * GET /api/repairs?status=all|pending|active|completed|cancelled
 * Requiere sesión. Equivale a renderRepairList()/renderHistoryStats().
 */
router.get('/', requireAuth, async (req, res) => {
  if (!req.user.id) return res.json([]); // invitados no tienen historial persistido

  const { status } = req.query;
  const params = [req.user.id];
  let statusFilter = '';
  if (status && status !== 'all') {
    statusFilter = 'AND rp.status = ?';
    params.push(status);
  }

  try {
    const [rows] = await pool.query(
      `SELECT rp.id, rp.code, rp.status, rp.price, rp.request_date AS date,
              rp.address, rp.rated,
              a.name AS appliance, a.icon,
              c.name AS city,
              t.name AS techName, t.avatar AS techAvatar, t.specialty AS techSpecialty,
              r.stars AS rating
       FROM repairs rp
       JOIN appliances a ON a.id = rp.appliance_id
       JOIN cities c ON c.id = rp.city_id
       JOIN technicians t ON t.id = rp.technician_id
       LEFT JOIN ratings r ON r.repair_id = rp.id
       WHERE rp.user_id = ? ${statusFilter}
       ORDER BY rp.request_date DESC, rp.created_at DESC`,
      params
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar el historial de reparaciones.' });
  }
});

// GET /api/repairs/stats -> contadores para la barra de la pantalla de historial
router.get('/stats', requireAuth, async (req, res) => {
  if (!req.user.id) return res.json({ total: 0, active: 0, completed: 0, pending: 0 });
  try {
    const [[row]] = await pool.query(
      `SELECT COUNT(*) AS total,
              SUM(status = 'active') AS active,
              SUM(status = 'completed') AS completed,
              SUM(status = 'pending') AS pending
       FROM repairs WHERE user_id = ?`,
      [req.user.id]
    );
    res.json({
      total: row.total || 0,
      active: row.active || 0,
      completed: row.completed || 0,
      pending: row.pending || 0
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar las estadísticas.' });
  }
});

/**
 * POST /api/repairs/:id/rating  { stars, comment? }
 * Equivale a submitRating(). Solo permitido si el repair está 'completed'
 * y pertenece al usuario autenticado.
 */
router.post('/:id/rating', requireAuth, async (req, res) => {
  const { stars, comment } = req.body;
  if (!stars || stars < 1 || stars > 5) {
    return res.status(400).json({ error: 'Selecciona una calificación entre 1 y 5.' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM repairs WHERE id = ?', [req.params.id]);
    const repair = rows[0];
    if (!repair) return res.status(404).json({ error: 'Reparación no encontrada.' });
    if (repair.user_id !== req.user.id) {
      return res.status(403).json({ error: 'No puedes calificar una reparación que no es tuya.' });
    }
    if (repair.status !== 'completed') {
      return res.status(400).json({ error: 'Solo puedes calificar reparaciones completadas.' });
    }
    if (repair.rated) {
      return res.status(409).json({ error: 'Esta reparación ya fue calificada.' });
    }

    await pool.query(
      'INSERT INTO ratings (repair_id, stars, comment) VALUES (?, ?, ?)',
      [req.params.id, stars, comment || null]
    );
    await pool.query('UPDATE repairs SET rated = 1 WHERE id = ?', [req.params.id]);

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar la calificación.' });
  }
});

module.exports = router;
