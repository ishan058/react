import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Updated path to the styles directory

function ProductCard({ id, name, price, image }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
