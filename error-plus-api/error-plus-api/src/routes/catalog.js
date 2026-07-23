const express = require('express');
const pool = require('../db/pool');

const router = express.Router();

// GET /api/appliances -> lista de electrodomésticos/equipos disponibles
router.get('/appliances', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, icon FROM appliances ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar los aparatos.' });
  }
});

// GET /api/cities -> lista de ciudades de cobertura
router.get('/cities', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name FROM cities ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar las ciudades.' });
  }
});

module.exports = router;
