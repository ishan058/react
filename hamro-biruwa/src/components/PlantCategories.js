// Categories.js
import React from 'react';
import '../styles/PlantCategories.css';

const CategoryCard = ({ name }) => (
  <div className="category-card">
    <img src="/path-to-image.png" alt={name} />
    <h3>{name}</h3>
    <p>Beautiful plants for your space.</p>
    <button>Shop</button>
  </div>
);

const Categories = () => (
  <section className="categories">
    <div className="container">
      <h2>Plant Categories</h2>
      <div className="grid">
        <CategoryCard name="Snake Plant" />
        <CategoryCard name="Aloe Vera" />
        {/* Add more CategoryCard components */}
      </div>
    </div>
  </section>
);

export default Categories;
