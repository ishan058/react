// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated'); // Clear authentication
        navigate('/admin-login'); // Redirect to login page
    };

    return (
        <nav className="navbar">
            <h1>Admin Dashboard</h1>
            <div className="nav-links">
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
