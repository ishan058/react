// src/pages/AdminProducts.js
import React, { useState, useEffect } from 'react';
import { fetchAdminProducts } from '../utils/api'; // Assume this fetches admin-specific products
import '../styles/AdminProducts.css'; // Import CSS styles

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchAdminProducts(); // Fetch products added by admin
                setProducts(data);
            } catch (error) {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <div className="admin-products">
            <h1>Admin Products</h1>
            {loading && <p>Loading products...</p>}
            {error && <p className="error">{error}</p>}
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <img src={product.imageUrl} alt={product.name} />
                        <button>Edit Product</button> {/* Replace with your edit product function */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProducts;
