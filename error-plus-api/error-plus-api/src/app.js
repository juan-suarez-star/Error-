const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const catalogRoutes = require('./routes/catalog');
const technicianRoutes = require('./routes/technicians');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const repairRoutes = require('./routes/repairs');

const app = express();

// CORS: solo permite los orígenes definidos en .env (frontend de Error+)
const allowedOrigins = (process.env.CORS_ORIGIN || '*').split(',').map(o => o.trim());
app.use(cors({
  origin: allowedOrigins.includes('*') ? true : allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Limita intentos de login/registro para mitigar fuerza bruta
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { error: 'Demasiados intentos. Intenta de nuevo en unos minutos.' }
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Límite general para el resto de la API
const generalLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 });
app.use('/api', generalLimiter);

// Rutas
app.use('/api', catalogRoutes);
app.use('/api', technicianRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/repairs', repairRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// 404
app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada.' }));

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

module.exports = app;
