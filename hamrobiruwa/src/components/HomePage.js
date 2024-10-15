// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { fetchProducts } from '../api';
import '../App.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    };
    loadProducts();
  }, []);

  const applyFilters = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.price === 'low-high') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.price === 'high-low') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    if (filters.rating) {
      filtered = filtered.filter(p => p.rating >= parseInt(filters.rating));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="homepage">
      <ProductFilters applyFilters={applyFilters} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
