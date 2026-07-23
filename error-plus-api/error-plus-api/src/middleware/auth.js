const jwt = require('jsonwebtoken');

/**
 * Exige un token válido en el header Authorization: Bearer <token>
 * Si es válido, adjunta { id, email, name } en req.user
 */
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'No autenticado. Falta el token.' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }
}

/**
 * Igual que requireAuth pero no bloquea la petición si no hay token.
 * Útil para endpoints que cambian de comportamiento si el usuario
 * está logueado (ej: guardar el repair asociado a un user_id).
 */
function optionalAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return next();

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    // token inválido: seguimos como invitado, sin lanzar error
  }
  next();
}

module.exports = { requireAuth, optionalAuth };
