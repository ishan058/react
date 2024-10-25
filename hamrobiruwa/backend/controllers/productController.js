// src/controllers/productController.js
// backend/controllers/productController.js

const Product = require('../models/productModel');

exports.getTrendingProducts = async (req, res) => {
  try {
    const trendingProducts = await Product.find({ isTrending: true }); // Example condition
    res.json(trendingProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending products' });
  }
};


exports.getPaginatedProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
      
    const totalProducts = await Product.countDocuments();
    
    res.json({
      products,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
