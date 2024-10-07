// src/pages/AdminProducts.js
import React, { useEffect, useState } from 'react';
import { fetchAdminProducts } from '../utils/api'; // Ensure correct import path
import '../styles/AdminProducts.css'; // Optional, if you want component-specific styles

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchAdminProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="container">
      <h1>Admin Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProducts;
