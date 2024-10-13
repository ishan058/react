// backend/routes/paymentRoutes.js
const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', async (req, res) => {
  const { items } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.json({ id: session.id });
});

module.exports = router;
