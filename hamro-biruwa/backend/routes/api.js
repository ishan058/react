const express = require('express');
const Plant = require('../models/Plant');

const router = express.Router();

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Plant.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Get all best sellers
router.get('/bestsellers', async (req, res) => {
  try {
    const bestSellers = await Plant.find({ rating: { $gte: 4.5 } });
    res.json(bestSellers);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
