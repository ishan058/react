// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css'; // Include your refined CSS here
import { fetchUsers, fetchOrders, fetchProducts } from '../api'; // Replace with actual API calls
import Chart from 'react-apexcharts';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [chartData, setChartData] = useState({
        series: [
            { name: 'Users', data: [] },
            { name: 'Orders', data: [] }
        ],
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const usersData = await fetchUsers();
                const ordersData = await fetchOrders();
                const productsData = await fetchProducts();

                setUsers(usersData);
                setOrders(ordersData);
                setProducts(productsData);

                // Assuming your data structure has properties that hold values for the chart
                setChartData({
                    series: [
                        {
                            name: 'Users',
                            data: usersData.map(user => user.signupCount || 0), // Provide default value
                        },
                        {
                            name: 'Orders',
                            data: ordersData.map(order => order.totalCount || 0), // Provide default value
                        }
                    ],
                });
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.active ? 'Active' : 'Inactive'}</td>
                                <td>
                                    <Link to={`/admin/users/edit/${user.id}`} className="edit-button">Edit</Link>
                                </td>
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
