const jwt = require('jsonwebtoken');
const config = require('../config/config');  // Make sure config contains jwtSecret

// Middleware for authenticating JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret || process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Middleware for authorizing specific roles
const authorizeRole = (role) => (req, res, next) => {
  if (!req.user || req.user.role !== role) {
    return res.status(403).json({ message: 'Forbidden: Access restricted to ' + role + ' role.' });
  }
  next();
};

// General auth middleware for simple token verification (without role-based authorization)
const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret || process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = {
  authenticateJWT,
  authorizeRole,
  auth,
};
