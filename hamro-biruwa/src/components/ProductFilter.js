import React, { useState } from 'react';
import '../styles/ProductFilter.css';

const ProductFilter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleFilter = () => {
    onFilter({ category: selectedCategory, priceRange });
  };

  return (
    <div className="product-filter">
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      
      <input
        type="range"
        min="0"
        max="100"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
      />
      
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default ProductFilter;
