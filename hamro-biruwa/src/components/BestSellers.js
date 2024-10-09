// BestSellers.js
import React from 'react';
import '../styles/BestSellers.css';

const BestSellerCard = ({ name }) => (
  <div className="best-seller-card">
    <img src="/path-to-image.png" alt={name} />
    <h3>{name}</h3>
    <button>Shop</button>
  </div>
);

const BestSellers = () => (
  <section className="best-sellers">
    <div className="container">
      <h2>Best Sellers</h2>
      <div className="grid">
        <BestSellerCard name="Snake Plant" />
        {/* Add more BestSellerCard components */}
      </div>
    </div>
  </section>
);

export default BestSellers;
