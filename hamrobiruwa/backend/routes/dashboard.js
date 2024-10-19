const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');

// GET /dashboard
router.get('/', async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Order.countDocuments();
        const totalUsers = await User.countDocuments();

        res.json({ totalProducts, totalOrders, totalUsers });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ message: 'Error fetching dashboard data' });
    }
});

module.exports = router;
