// src/components/Navbar.js
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2>Admin Dashboard</h2>
            </div>
            <div className="navbar-right">
                <div className="navbar-icon">
                    <FaBell />
                    <span className="badge">3</span>
                </div>
                <div className="navbar-profile">
                    <FaUserCircle className="profile-icon" />
                    <div className="profile-dropdown">
                        <p>Admin Profile</p>
                        <p>Settings</p>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
