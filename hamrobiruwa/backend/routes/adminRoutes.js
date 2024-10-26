const express = require('express');
const router = express.Router();
const { authenticateJWT, authorizeRole } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

// Product Management
router.get('/products', authenticateJWT, authorizeRole('admin'), adminController.getAllProducts);
router.post('/products', authenticateJWT, authorizeRole('admin'), adminController.addProduct);
router.put('/products/:id', authenticateJWT, authorizeRole('admin'), adminController.updateProduct);
router.delete('/products/:id', authenticateJWT, authorizeRole('admin'), adminController.deleteProduct);

// Order Management
router.get('/orders', authenticateJWT, authorizeRole('admin'), adminController.getAllOrders);
router.put('/orders/:id', authenticateJWT, authorizeRole('admin'), adminController.updateOrderStatus);

// User Management
router.get('/users', authenticateJWT, authorizeRole('admin'), adminController.getAllUsers);
router.delete('/users/:id', authenticateJWT, authorizeRole('admin'), adminController.deleteUser);

module.exports = router;
