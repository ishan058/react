// src/pages/ProductManagement.js
import React, { useState, useEffect } from 'react';
import { fetchProducts, addProduct, deleteProduct } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductManagement.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                toast.error('Error fetching products');
            }
        };
        getProducts();
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await addProduct(newProduct);
            toast.success('Product added successfully!');
            setNewProduct({ name: '', price: '', description: '' });
            const productsData = await fetchProducts();
            setProducts(productsData);
        } catch (error) {
            toast.error('Error adding product');
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            toast.success('Product deleted successfully!');
            const productsData = await fetchProducts();
            setProducts(productsData);
        } catch (error) {
            toast.error('Error deleting product');
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-management">
            <h2>Manage Products</h2>
            <form onSubmit={handleAddProduct} className="product-form">
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
                <button type="submit" className="add-button">Add Product</button>
            </form>
            
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        {product.name} - ${product.price}
                        <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">Delete</button>
                    </li>
                ))}
            </ul>

            {/* ToastContainer to show notifications */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
        </div>
    );
};

export default ProductManagement;
