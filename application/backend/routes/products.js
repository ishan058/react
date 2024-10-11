// routes/products.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET products with pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find().skip(skip).limit(limit);
    const totalProducts = await Product.countDocuments();

    res.json({
      products,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create product (only for admin)
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const newProduct = new Product({ name, description, price, imageUrl });
  await newProduct.save();
  res.status(201).json(newProduct);
});

// Update product (only for admin)
router.put('/:id', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, price, imageUrl },
    { new: true }
  );
  res.json(updatedProduct);
});

// Delete product (only for admin)
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
