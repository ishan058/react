import React, { useState, useContext } from 'react';
import { PlantContext } from '../contexts/PlantContext';
import '../styles/BestSellers.css';

const BestSellers = () => {
  const { bestSellers } = useContext(PlantContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bestSellers.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bestSellers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="best-sellers">
      <h2>Here Are the Best Sellers</h2>
      <div className="product-grid">
        {currentItems.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
