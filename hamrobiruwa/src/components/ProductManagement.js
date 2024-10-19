import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProducts, addProduct, deleteProduct } from '../api/api';

const ProductManagement = () => {
  const queryClient = useQueryClient();
  const { data: products, isLoading, error } = useQuery('products', fetchProducts);
  
  const addProductMutation = useMutation(addProduct, {
    onSuccess: () => queryClient.invalidateQueries('products'),
  });
  
  const deleteProductMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries('products'),
  });

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProductMutation.mutate(newProduct);
    setNewProduct({ name: '', price: '' });
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h2>Product Management</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        {products.data.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => deleteProductMutation.mutate(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
