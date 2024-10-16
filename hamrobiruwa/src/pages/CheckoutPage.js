// src/pages/Checkout.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe public key
const stripePromise = loadStripe('your-public-key-from-stripe');

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      // Process the payment (send paymentMethod.id to backend)
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay Now
          </button>
          {error && <div>{error}</div>}
          {success && <div>Payment Successful</div>}
        </form>
      </div>
    </Elements>
  );
};

export default Checkout;
