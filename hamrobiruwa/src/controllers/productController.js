// src/controllers/productController.js
const { check, validationResult } = require('express-validator');

exports.createProduct = [
  check('name').isLength({ min: 3 }).withMessage('Product name must be at least 3 characters long'),
  check('price').isFloat({ min: 0.01 }).withMessage('Price must be a positive number'),
  check('stock').isInt({ min: 0 }).withMessage('Stock cannot be negative'),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Product creation logic
  },
];
