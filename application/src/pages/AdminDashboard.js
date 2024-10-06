import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchOrders } from '../utils/api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadDashboardData = async () => {
            const productData = await fetchProducts();
            const orderData = await fetchOrders();
            setProducts(productData);
            setOrders(orderData);
        };
        loadDashboardData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-section">
                <h2>Total Products: {products.length}</h2>
                <h2>Total Orders: {orders.length}</h2>
                <div className="product-overview">
                    <h3>Product Inventory Overview</h3>
                    {products.map((product) => (
                        <div key={product.id} className="product-summary">
                            <p>{product.name}</p>
                            <p>Stock: {product.stock}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
