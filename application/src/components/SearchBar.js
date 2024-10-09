// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar open and close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? '⟨' : '⟩'}
      </button>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/about" className="sidebar-link">About</Link>
        <Link to="/profile" className="sidebar-link">Profile</Link>
        <Link to="/admin/products" className="sidebar-link">Admin Products</Link>
        <Link to="/wishlist" className="sidebar-link">Wishlist</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
