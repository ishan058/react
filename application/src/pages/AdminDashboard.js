// src/pages/AdminDashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css'; // Include your refined CSS here
import { fetchUsers, fetchOrders, fetchProducts } from '../api'; // Ensure this matches your file structure
import Chart from 'react-apexcharts';

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
                        data: usersData.map(user => user.signupDate), // Modify based on your data structure
                    },
                    {
                        name: 'Orders',
                        data: ordersData.map(order => order.date), // Modify based on your data structure
                    }
                ],
            });
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/admin/users" className="dashboard-link">Manage Users</Link>
                <Link to="/admin/products" className="dashboard-link">Manage Products</Link>
                <Link to="/admin/orders" className="dashboard-link">Manage Orders</Link>
                <Link to="/admin/analytics" className="dashboard-link">View Analytics</Link>
            </div>

            <div className="analytics-chart">
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

            <div className="user-management">
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
                        {users.map(user => (
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

            <div className="order-management">
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
                        {orders.map(order => (
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
        </div>
    );
};

export default AdminDashboard;
