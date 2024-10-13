// backend/routes/cartRoutes.js
const express = require('express');
const auth = require('../middleware/authMiddleware');
const Cart = require('../models/Cart');

const router = express.Router();

router.post('/add', auth, async (req, res) => {
  const { userId } = req.user;
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });
    
    if (cart) {
      // Update cart with new items
      cart.items.push({ productId, quantity });
      await cart.save();
    } else {
      // Create new cart
      const newCart = new Cart({ user: userId, items: [{ productId, quantity }] });
      await newCart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update cart' });
  }
});

module.exports = router;
