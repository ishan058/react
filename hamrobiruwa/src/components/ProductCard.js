// src/components/ProductCard.js
import React from 'react';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button className="view-product">View Product</button>
    </div>
  );
};

export default ProductCard;
