// src/components/FeaturedCategories.js
import React from 'react';
import './FeaturedCategories.css';

const categories = [
  { id: 1, name: 'Indoor Plants', image: '/images/indoor.jpg' },
  { id: 2, name: 'Outdoor Plants', image: '/images/outdoor.jpg' },
  { id: 3, name: 'Flowering Plants', image: '/images/flowering.jpg' },
];

const FeaturedCategories = () => {
  return (
    <div className="featured-categories">
      <h2>Shop by Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
