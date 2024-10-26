// src/components/ProductManagement.js

import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from './ProductCard';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '', sort: '' });

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts(filters);
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Product Management</h2>
      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
        <select name="priceRange" onChange={handleFilterChange}>
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
        </select>
        <select name="sort" onChange={handleFilterChange}>
          <option value="">Sort By</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
