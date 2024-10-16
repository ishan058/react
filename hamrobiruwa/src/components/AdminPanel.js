// src/components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { addProduct, deleteProduct } from '../api/api';

const AdminPanel = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddProduct = async () => {
    const addedProduct = await addProduct(newProduct);
    dispatch(fetchProducts()); // Fetch products again after adding
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    dispatch(fetchProducts()); // Fetch products again after deletion
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add New Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      {productStatus === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
