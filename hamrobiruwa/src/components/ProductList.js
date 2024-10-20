import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api'; // Fetch products API function

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filter, setFilter] = useState({ category: '', priceRange: '' });

  useEffect(() => {
    // Fetch products and apply filters
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, [filter, sortOption]);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedAndFilteredProducts = products
    .filter((product) => {
      if (filter.category && product.category !== filter.category) return false;
      // Add more filter conditions like priceRange
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return 0; // Default sorting logic
    });

  return (
    <div>
      <div className="filter-sort-options">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>

        <select onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>

      <div className="product-grid">
        {sortedAndFilteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
