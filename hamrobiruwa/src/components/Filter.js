// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleFilter = () => {
    onFilter({ category: selectedCategory, priceRange });
  };

  return (
    <div className="filter-panel">
      <h3>Filter by Category</h3>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <h3>Filter by Price</h3>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, e.target.value])}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
