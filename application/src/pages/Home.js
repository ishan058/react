// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api'; // Import the fetch function
import '../styles/Home.css'; // Import CSS styles

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
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
        <div className="home">
            <h1>Welcome to Our Store</h1>
            {loading && <p>Loading products...</p>}
            {error && <p className="error">{error}</p>}
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <img src={product.imageUrl} alt={product.name} />
                        <button>Add to Cart</button> {/* Replace with your add to cart function */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
