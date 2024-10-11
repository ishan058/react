// src/pages/Products.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const { products, totalPages } = await fetchProducts(page);
      setProducts(products);
      setTotalPages(totalPages);
    };
    loadProducts();
  }, [page]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="btn">Previous</button>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="btn">Next</button>
      </div>
    </div>
  );
};

export default Products;
