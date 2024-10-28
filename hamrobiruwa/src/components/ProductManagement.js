import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from './ProductCard';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sort: '',
  });

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    applyFilters({ ...filters, [name]: value });
  };

  const applyFilters = ({ category, priceRange, sort }) => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (sort === 'priceAsc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceDesc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <div className="filter-sort">
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
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
