// src/pages/AdminProductManagement.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/admin/products', { name, price, description, category, images }, {
      headers: { Authorization: token },
    });
    // Fetch products again
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <form onSubmit={handleAddProduct}>
        <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={images} onChange={(e) => setImages(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
      {/* Display the product list here */}
    </div>
  );
};

export default AdminProductManagement;
