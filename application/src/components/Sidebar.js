// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBoxOpen, FaHeart, FaInfoCircle } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar open and close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-logo">{isOpen ? 'MyApp' : 'M'}</h1>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? '⟨' : '⟩'}
        </button>
      </div>
      <nav className="sidebar-nav">
        <NavLink exact to="/" className="sidebar-link" activeClassName="active">
          <FaHome className="sidebar-icon" />
          {isOpen && <span>Home</span>}
        </NavLink>
        <NavLink to="/about" className="sidebar-link" activeClassName="active">
          <FaInfoCircle className="sidebar-icon" />
          {isOpen && <span>About</span>}
        </NavLink>
        <NavLink to="/profile" className="sidebar-link" activeClassName="active">
          <FaUser className="sidebar-icon" />
          {isOpen && <span>Profile</span>}
        </NavLink>
        <NavLink to="/admin/products" className="sidebar-link" activeClassName="active">
          <FaBoxOpen className="sidebar-icon" />
          {isOpen && <span>Admin Products</span>}
        </NavLink>
        <NavLink to="/wishlist" className="sidebar-link" activeClassName="active">
          <FaHeart className="sidebar-icon" />
          {isOpen && <span>Wishlist</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
