// backend/controllers/reviewController.js
const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  const { userId } = req.user;

  const newReview = new Review({ productId, userId, rating, comment });
  await newReview.save();

  res.status(201).json(newReview);
};

exports.getReviews = async (req, res) => {
    const { productId } = req.params;
  
    const reviews = await Review.find({ productId }).populate('userId', 'name');
    res.json(reviews);
  };