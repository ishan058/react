// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBox, FaChartLine, FaBars } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
                <FaBars className="toggle-icon" onClick={() => setIsCollapsed(!isCollapsed)} />
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/admin">
                        <FaHome /> <span className="menu-item">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/users">
                        <FaUsers /> <span className="menu-item">Manage Users</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/products">
                        <FaBox /> <span className="menu-item">Manage Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/orders">
                        <FaChartLine /> <span className="menu-item">Manage Orders</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
