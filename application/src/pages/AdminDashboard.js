// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ProductForm from '../components/ProductForm';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';
import { fetchUsers, fetchOrders, fetchProducts } from '../api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({ series: [], options: {} });
    const [isEditing, setIsEditing] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });

    // Load data for users, orders, and products
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const usersData = await fetchUsers();
                const ordersData = await fetchOrders();
                const productsData = await fetchProducts();

                setUsers(usersData);
                setOrders(ordersData);
                setProducts(productsData);

                // Set up chart data for ApexCharts
                setChartData({
                    series: [
                        {
                            name: 'Users',
                            data: usersData.map((user) => new Date(user.signupDate).toLocaleDateString()),
                        },
                        {
                            name: 'Orders',
                            data: ordersData.map((order) => new Date(order.date).toLocaleDateString()),
                        },
                    ],
                    options: {
                        chart: {
                            id: 'user-order-trends',
                        },
                        xaxis: {
                            categories: ordersData.map((order) => new Date(order.date).toLocaleDateString()),
                            title: {
                                text: 'Dates',
                            },
                        },
                        yaxis: {
                            title: {
                                text: 'Counts',
                            },
                        },
                    },
                });

                setLoading(false);
            } catch (error) {
                setNotification({ message: error.message, type: 'error' });
                setLoading(false);
            }
        };
        getData();
    }, []);

    const handleEdit = (productId) => {
        setEditProductId(productId);
        setIsEditing(true);
    };

    const handleSuccess = () => {
        setEditProductId(null);
        setIsEditing(false);
        setNotification({ message: 'Product saved successfully!', type: 'success' });
        // Reload products
        const loadProducts = async () => {
            setLoading(true);
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                setNotification({ message: error.message, type: 'error' });
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    };

    // Display a loading indicator while data is being fetched
    if (loading) return <LoadingSpinner />;

    return (
        <div className="admin-dashboard">
            {/* Include Sidebar Component */}
            <Sidebar />
            <div className="main-content">
                {/* Include Navbar Component */}
                <Navbar />
                <div className="dashboard-content">
                    <h1>Welcome to Admin Dashboard</h1>

                    {notification.message && <Toast message={notification.message} type={notification.type} />}

                    {/* Chart for Data Trends */}
                    <div className="chart-container">
                        <Chart options={chartData.options} series={chartData.series} type="line" height="350" />
                    </div>

                    {/* User Management Table */}
                    <div className="table-container">
                        <h2>User Management</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.active ? 'Active' : 'Inactive'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Order Management Table */}
                    <div className="table-container">
                        <h2>Order Management</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>User</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.userName}</td>
                                        <td>${order.total}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Product Management Section */}
                    <div className="table-container">
                        <h2>Product Management</h2>
                        {isEditing ? (
                            <ProductForm productId={editProductId} onSuccess={handleSuccess} />
                        ) : (
                            <>
                                <ProductForm onSuccess={handleSuccess} />
                                <h2>Product List</h2>
                                <ul>
                                    {products.map((product) => (
                                        <li key={product.id}>
                                            {product.name} - ${product.price}
                                            <button onClick={() => handleEdit(product.id)}>Edit</button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
