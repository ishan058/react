// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = ['Electronics', 'Clothing', 'Books'];

  useEffect(() => {
    // Fetch products from the API
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchProducts();
  }, []);

  const handleFilter = (filters) => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(product => product.price <= filters.priceRange[1]);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Filter categories={categories} onFilter={handleFilter} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
