// src/components/AdminDashboard.js
import React, { useState } from 'react';
import { deleteProduct } from '../api/api';
import ProductTable from './ProductTable';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const handleDeleteProduct = async (productId) => {
    // Optimistic UI: Remove the product from the UI before waiting for the server response
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

    try {
      await deleteProduct(productId);
    } catch (error) {
      // If the delete fails, rollback the UI update
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
