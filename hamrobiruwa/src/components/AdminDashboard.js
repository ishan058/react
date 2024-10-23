// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { deleteProduct } from '../api/api';
import ProductTable from './ProductTable';

const socket = io.connect('http://localhost:5000');

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  // WebSocket product updates
  useEffect(() => {
    socket.on('productUpdate', (updatedProduct) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    });

    // Cleanup WebSocket connection on component unmount
    return () => {
      socket.off('productUpdate');
    };
  }, []);

  // Handle product deletion
  const handleDeleteProduct = async (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

    try {
      await deleteProduct(productId);
    } catch (error) {
      // Rollback UI update if deletion fails
      setProducts(products);
      alert('Failed to delete product. Please try again.');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ProductTable products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default AdminDashboard;
