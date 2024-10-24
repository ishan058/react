const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { checkRole } = require('../middleware/roleMiddleware');

// Route for admin-only access
router.get('/admin-only', checkRole('admin'), adminController.adminOnlyEndpoint);

// Route for manager-level access
router.get('/manager', checkRole('manager'), adminController.managerEndpoint);

module.exports = router;
