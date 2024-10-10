import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email submission logic here
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Newsletter;
