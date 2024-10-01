// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Include styles for sidebar

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/admin">Dashboard</Link></li>
                <li><Link to="/admin/users">Manage Users</Link></li>
                <li><Link to="/admin/products">Manage Products</Link></li>
                <li><Link to="/admin/orders">Manage Orders</Link></li>
                <li><Link to="/admin/analytics">View Analytics</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
