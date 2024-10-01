// src/pages/ProductManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, addProduct, deleteProduct } from '../api';
import '../styles/ProductManagement.css';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
            setLoading(false);
        };
        getProducts();
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await addProduct(newProduct);
        setNewProduct({ name: '', price: '', description: '' });
        const productsData = await fetchProducts();
        setProducts(productsData);
        toast.success("Product added successfully!"); // Show success notification
    };

    const handleDeleteProduct = async (productId) => {
        await deleteProduct(productId);
        const productsData = await fetchProducts();
        setProducts(productsData);
        toast.error("Product deleted successfully!"); // Show error notification
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-management">
            <ToastContainer /> {/* Add ToastContainer here */}
            <h2>Manage Products</h2>
            <form onSubmit={handleAddProduct}>
                <input 
                    type="text" 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                    placeholder="Product Name" 
                    required 
                />
                <input 
                    type="number" 
                    value={newProduct.price} 
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
                    placeholder="Price" 
                    required 
                />
                <input 
                    type="text" 
                    value={newProduct.description} 
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
                    placeholder="Description" 
                    required 
                />
                <button type="submit">Add Product</button>
            </form>
            <ul>
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

export default ProductManagement;
