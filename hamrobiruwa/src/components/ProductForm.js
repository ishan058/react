// src/components/ProductForm.js
import React, { useState } from 'react';
import { addProduct, updateProduct } from '../api/api';

const ProductForm = ({ existingProduct, onSave }) => {
  const [product, setProduct] = useState(existingProduct || { name: '', price: '', stock: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.id) {
      await updateProduct(product);
    } else {
      await addProduct(product);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        placeholder="Price"
      />
      <input
        type="number"
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        placeholder="Stock"
      />
      <button type="submit">{product.id ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
