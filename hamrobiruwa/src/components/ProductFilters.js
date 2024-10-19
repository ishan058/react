import React, { useState } from 'react';
import { useFilteredProducts } from '../hooks/useProducts';

const ProductFilters = () => {
  const [filters, setFilters] = useState({ category: '', sort: '' });
  const { data: products, isLoading, error } = useFilteredProducts(filters);

  const handleCategoryChange = (e) => setFilters({ ...filters, category: e.target.value });
  const handleSortChange = (e) => setFilters({ ...filters, sort: e.target.value });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <div className="filters">
        <select onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>

        <select onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {products && products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
