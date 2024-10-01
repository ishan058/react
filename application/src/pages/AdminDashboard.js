// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import Sidebar from '../components/Sidebar';
import { fetchUsers, fetchOrders, fetchProducts } from '../api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({ series: [] });

    useEffect(() => {
        const getData = async () => {
            const usersData = await fetchUsers();
            const ordersData = await fetchOrders();
            const productsData = await fetchProducts();
            setUsers(usersData);
            setOrders(ordersData);
            setProducts(productsData);
            setLoading(false);
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
            });
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Admin Dashboard</h1>
                <div className="dashboard-links">
                    <Link to="/admin/users" className="dashboard-link">
                        Manage Users
                    </Link>
                    <Link to="/admin/products" className="dashboard-link">
                        Manage Products
                    </Link>
                    <Link to="/admin/orders" className="dashboard-link">
                        Manage Orders
                    </Link>
                </div>

                <div className="stats-container">
                    <div className="stats-card">
                        <h3>Total Users</h3>
                        <p>{users.length}</p>
                    </div>
                    <div className="stats-card">
                        <h3>Total Orders</h3>
                        <p>{orders.length}</p>
                    </div>
                    <div className="stats-card">
                        <h3>Total Products</h3>
                        <p>{products.length}</p>
                    </div>
                </div>

                <div className="analytics-section">
                    <h2>User and Order Trends</h2>
                    <Chart
                        options={{
                            chart: {
                                id: 'basic-bar',
                            },
                            xaxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                            },
                        }}
                        series={chartData.series}
                        type="line"
                        height="300"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
