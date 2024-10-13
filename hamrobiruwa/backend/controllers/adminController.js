// backend/controllers/adminController.js
const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  const { name, price, description, category, images } = req.body;

  const newProduct = new Product({ name, price, description, category, images });
  await newProduct.save();

  res.status(201).json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price, description, category, images } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(productId, {
    name,
    price,
    description,
    category,
    images,
  }, { new: true });

  res.json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  await Product.findByIdAndDelete(productId);
  res.status(204).send();
};
