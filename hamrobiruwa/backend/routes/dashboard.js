const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authenticateJWT = require('../middleware/auth');

// Protect the route with JWT middleware
router.get('/dashboard', authenticateJWT, dashboardController.getDashboardData);

module.exports = router;
