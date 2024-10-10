import React, { useState, useContext } from 'react';
import { PlantContext } from '../contexts/PlantContext';
import '../styles/PlantCategories.css';

const Categories = () => {
  const { categories } = useContext(PlantContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="categories">
      <h2>Plant Categories</h2>
      <input
        type="text"
        placeholder="Search Categories..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="category-cards">
        {filteredCategories.map((category, index) => (
          <div key={index} className="category-card">{category}</div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
