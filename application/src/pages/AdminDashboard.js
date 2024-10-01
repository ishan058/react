// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { fetchUsers, fetchOrders, fetchProducts } from '../api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({ series: [], options: {} });

    useEffect(() => {
        const getData = async () => {
            try {
                // Fetch data from API (ensure your API calls are defined in `../api`)
                const usersData = await fetchUsers();
                const ordersData = await fetchOrders();
                const productsData = await fetchProducts();

                // Set state with the fetched data
                setUsers(usersData);
                setOrders(ordersData);
                setProducts(productsData);
                setLoading(false);

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
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Stop loading on error
            }
        };
        getData();
    }, []);

    // Display a loading indicator while data is being fetched
    if (loading) return <p>Loading...</p>;

    return (
        <div className="admin-dashboard">
            {/* Include Sidebar Component */}
            <Sidebar />
            <div className="main-content">
                {/* Include Navbar Component */}
                <Navbar />
                <div className="dashboard-content">
                    <h1>Welcome to Admin Dashboard</h1>
                    {/* Chart for Data Trends */}
                    <div className="chart-container">
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="line"
                            height="350"
                        />
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
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
