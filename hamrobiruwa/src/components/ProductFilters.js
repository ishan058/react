// src/components/ProductFilters.js
import React, { useState } from 'react';
import '../App.css';

const ProductFilters = ({ applyFilters }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    const filters = {
      category,
      price,
      rating,
    };
    applyFilters(filters); // Callback to apply filters
  };

  return (
    <form className="product-filters" onSubmit={handleFilter}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>

      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Rating</option>
        <option value="5">5 stars</option>
        <option value="4">4 stars & above</option>
        <option value="3">3 stars & above</option>
      </select>

      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default ProductFilters;
