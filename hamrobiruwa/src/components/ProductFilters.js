import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      priceRange: { min: minPrice, max: maxPrice },
      rating,
    });
  };

  return (
    <div className="product-filter">
      <h3>Filter Products</h3>

      <div>
        <label>Category:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>

      <div>
        <label>Price Range:</label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <label>Rating:</label>
        <select onChange={(e) => setRating(e.target.value)} value={rating}>
          <option value="">All</option>
          <option value="1">1 Star & up</option>
          <option value="2">2 Stars & up</option>
          <option value="3">3 Stars & up</option>
          <option value="4">4 Stars & up</option>
        </select>
      </div>

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default ProductFilter;
