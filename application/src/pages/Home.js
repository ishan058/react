// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Import CSS for the Home component

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website!</h1>
        <p>Your one-stop shop for everything you need.</p>
        <button className="home-button">Shop Now</button>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Quality Products</h2>
          <p>We offer a wide range of high-quality products.</p>
        </div>
        <div className="feature">
          <h2>Fast Shipping</h2>
          <p>Get your orders delivered quickly and safely.</p>
        </div>
        <div className="feature">
          <h2>Customer Support</h2>
          <p>Our support team is here to help you 24/7.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
