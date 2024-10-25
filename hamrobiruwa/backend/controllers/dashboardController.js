const { Order } = require('../models/Order');
const { sequelize } = require('../config/db');

exports.getDashboardData = async (req, res) => {
  try {
    const totalSales = await Order.sum('totalAmount');
    const productsSold = await Order.sum('quantity');
    const recentOrders = await Order.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
    });
    const salesData = await Order.findAll({
      attributes: [
        [sequelize.fn('DATE', sequelize.col('createdAt')), 'date'],
        [sequelize.fn('SUM', sequelize.col('totalAmount')), 'totalAmount'],
      ],
      group: ['date'],
      order: [['date', 'ASC']],
    });
    
    res.json({ totalSales, productsSold, recentOrders, salesData });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
