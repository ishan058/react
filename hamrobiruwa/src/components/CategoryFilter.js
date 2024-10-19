import React from 'react';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
