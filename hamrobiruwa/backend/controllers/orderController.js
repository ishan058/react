// backend/controllers/orderController.js
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const nodemailer = require('nodemailer');

// Function to send order confirmation email
const sendOrderConfirmation = async (email, order) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Order Confirmation',
    text: `Your order with ID: ${order._id} has been placed successfully! Total Amount: $${order.totalAmount}.`,
  };

  await transporter.sendMail(mailOptions);
};

// Create order function
exports.createOrder = async (req, res) => {
  const { userId } = req.user;

  try {
    // Get cart items for the user
    const cart = await Cart.findOne({ user: userId });
    const totalAmount = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const order = new Order({
      user: userId,
      items: cart.items,
      totalAmount,
    });

    await order.save();

    // Send email confirmation
    await sendOrderConfirmation(req.user.email, order); 

    // Clear user's cart after order
    await Cart.deleteOne({ user: userId });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order' });
  }
};

// Get order history function
exports.getOrderHistory = async (req, res) => {
  const { userId } = req.user;

  try {
    const orders = await Order.find({ user: userId }).populate('items.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order history' });
  }
};
