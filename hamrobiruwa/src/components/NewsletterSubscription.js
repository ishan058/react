// src/components/NewsletterSubscription.js

import React, { useState } from 'react';
import '../styles/NewsletterSubscription.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add API call to subscribe the user to newsletter
    console.log('User subscribed with email:', email);
  };

  return (
    <div className="newsletter-subscription">
      <h2>Subscribe to our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default NewsletterSubscription;
