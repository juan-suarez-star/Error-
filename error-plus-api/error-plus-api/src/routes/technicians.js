const express = require('express');
const pool = require('../db/pool');

const router = express.Router();

/**
 * GET /api/technicians?appliance=Lavadora&city=Yopal
 * Reemplaza la búsqueda en el objeto TECHNICIANS del frontend.
 * appliance y city son obligatorios (igual que en la UI: primero
 * eliges aparato, luego filtras por ciudad).
 */
router.get('/technicians', async (req, res) => {
  const { appliance, city } = req.query;

  if (!appliance || !city) {
    return res.status(400).json({ error: 'Debes indicar "appliance" y "city" como query params.' });
  }

  try {
    const [rows] = await pool.query(
      `SELECT t.id, t.name, t.specialty, t.badge, t.badge_label AS badgeLabel,
              t.badge_icon AS badgeIcon, t.rating, t.services_count AS services,
              t.price, t.available, t.avail_label AS availLabel, t.avatar, t.phone,
              a.name AS appliance, c.name AS city
       FROM technicians t
       JOIN appliances a ON a.id = t.appliance_id
       JOIN cities c ON c.id = t.city_id
       WHERE a.name = ? AND c.name = ?
       ORDER BY t.available DESC, t.rating DESC`,
      [appliance, city]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar los técnicos.' });
  }
});

// GET /api/technicians/:id -> detalle de un técnico puntual
router.get('/technicians/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.id, t.name, t.specialty, t.badge, t.badge_label AS badgeLabel,
              t.badge_icon AS badgeIcon, t.rating, t.services_count AS services,
              t.price, t.available, t.avail_label AS availLabel, t.avatar, t.phone,
              a.name AS appliance, c.name AS city
       FROM technicians t
       JOIN appliances a ON a.id = t.appliance_id
       JOIN cities c ON c.id = t.city_id
       WHERE t.id = ?`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Técnico no encontrado.' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar el técnico.' });
  }
});

module.exports = router;
