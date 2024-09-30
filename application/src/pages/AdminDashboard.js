// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/admin/users" className="dashboard-link">User Management</Link>
                <Link to="/admin/products" className="dashboard-link">Product Management</Link>
                <Link to="/admin/orders" className="dashboard-link">Order Management</Link>
                <Link to="/admin/analytics" className="dashboard-link">Analytics</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
