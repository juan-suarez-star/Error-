const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/pool');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function signToken(user) {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

function publicUser(u) {
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    phone: u.phone,
    address: u.address,
    avatar: u.avatar,
    memberSince: u.member_since
  };
}

// POST /api/auth/register  { name, email, password, phone?, address? }
router.post('/register', async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nombre, correo y contraseña son obligatorios.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ingresa un correo válido.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' });
  }

  try {
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Este correo ya está registrado.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=c1ecd4&color=012d1d&size=100`;

    const [result] = await pool.query(
      `INSERT INTO users (name, email, password_hash, phone, address, avatar, member_since)
       VALUES (?, ?, ?, ?, ?, ?, YEAR(CURDATE()))`,
      [name, email, passwordHash, phone || null, address || null, avatar]
    );

    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    const user = rows[0];
    res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar el usuario.' });
  }
});

// POST /api/auth/login  { email, password }
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Completa todos los campos.' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];
    if (!user) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
    }

    res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
});

// POST /api/auth/guest -> sesión de invitado (no persiste en la tabla users)
router.post('/guest', (req, res) => {
  const guest = {
    id: null,
    name: 'Invitado',
    email: 'invitado@error.co',
    phone: '',
    address: '',
    avatar: '',
    memberSince: new Date().getFullYear()
  };
  const token = jwt.sign({ id: null, guest: true, name: guest.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
  res.json({ token, user: guest });
});

// GET /api/auth/me -> usuario autenticado actual (para restaurar sesión)
router.get('/me', requireAuth, async (req, res) => {
  if (req.user.guest || !req.user.id) {
    return res.json({
      id: null, name: 'Invitado', email: 'invitado@error.co',
      phone: '', address: '', avatar: '', memberSince: new Date().getFullYear()
    });
  }
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Usuario no encontrado.' });
    res.json(publicUser(rows[0]));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar el usuario.' });
  }
});

module.exports = router;
