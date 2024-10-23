// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import { fetchPaginatedProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const { products, totalPages } = await fetchPaginatedProducts(page);
      setProducts(products);
      setTotalPages(totalPages);
    };

    loadProducts();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default ProductList;
