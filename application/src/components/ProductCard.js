import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Updated path to the styles directory

const ProductCard = ({ product, addToWishlist }) => {
  return (
      <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
  );
};


export default ProductCard;
