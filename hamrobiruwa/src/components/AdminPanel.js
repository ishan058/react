// src/components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { fetchProducts, addProduct, deleteProduct } from '../api';
import '../App.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    };
    loadProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>

      <form className="add-product-form" onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <h3>Existing Products</h3>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
