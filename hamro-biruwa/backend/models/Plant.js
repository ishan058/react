const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String,
  rating: Number,
});

module.exports = mongoose.model('Plant', plantSchema);
