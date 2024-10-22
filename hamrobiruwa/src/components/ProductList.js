// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const newProducts = await fetchProducts(page, 10); // Fetch 10 products per page
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setLoading(false);
    };

    loadProducts();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!loading && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default ProductList;
