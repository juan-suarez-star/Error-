const express = require('express');
const pool = require('../db/pool');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// PUT /api/users/me  { name?, phone?, address? } -> editar perfil
router.put('/me', requireAuth, async (req, res) => {
  if (!req.user.id) {
    return res.status(403).json({ error: 'Los invitados no pueden editar un perfil.' });
  }
  const { name, phone, address } = req.body;

  try {
    await pool.query(
      `UPDATE users SET
         name = COALESCE(?, name),
         phone = COALESCE(?, phone),
         address = COALESCE(?, address)
       WHERE id = ?`,
      [name || null, phone || null, address || null, req.user.id]
    );
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.user.id]);
    const u = rows[0];
    res.json({
      id: u.id, name: u.name, email: u.email, phone: u.phone,
      address: u.address, avatar: u.avatar, memberSince: u.member_since
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar el perfil.' });
  }
});

// GET /api/users/me/stats -> estadísticas para la pantalla de perfil
router.get('/me/stats', requireAuth, async (req, res) => {
  if (!req.user.id) {
    return res.json({ total: 0, completed: 0, avgRating: null });
  }
  try {
    const [[totals]] = await pool.query(
      `SELECT COUNT(*) AS total,
              SUM(status = 'completed') AS completed
       FROM repairs WHERE user_id = ?`,
      [req.user.id]
    );
    const [[ratingRow]] = await pool.query(
      `SELECT AVG(r.stars) AS avgRating
       FROM ratings r
       JOIN repairs rp ON rp.id = r.repair_id
       WHERE rp.user_id = ?`,
      [req.user.id]
    );
    res.json({
      total: totals.total || 0,
      completed: totals.completed || 0,
      avgRating: ratingRow.avgRating ? Number(ratingRow.avgRating).toFixed(1) : null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar las estadísticas.' });
  }
});

module.exports = router;
