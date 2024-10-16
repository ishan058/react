import React, { useState, useEffect } from 'react';
import { addProductAPI, deleteProductAPI, fetchProductsAPI } from '../api/api'; // Correct import names

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsAPI();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      const response = await addProductAPI(newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', description: '' }); // Reset form fields
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProductAPI(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <textarea
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        ></textarea>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="product-list">
        <h3>Product List</h3>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
