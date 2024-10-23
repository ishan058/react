// src/middleware/roleMiddleware.js

exports.checkRole = (requiredRole) => (req, res, next) => {
    const { role } = req.user; // Assuming the user role is part of the JWT payload
  
    if (role !== requiredRole) {
      return res.status(403).json({ message: 'Access forbidden: insufficient rights' });
    }
  
    next();
  };
  