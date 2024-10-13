// backend/controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    wishlist = new Wishlist({ userId, products: [productId] });
  } else {
    wishlist.products.push(productId);
  }

  await wishlist.save();
  res.status(201).json(wishlist);
};

exports.getWishlist = async (req, res) => {
    const { userId } = req.user;
    const wishlist = await Wishlist.findOne({ userId }).populate('products');
    res.json(wishlist);
  };