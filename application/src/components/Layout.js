// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ThemeToggle from './ThemeToggle';
import Toast from './Toast';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin/products">Admin Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <ThemeToggle />
      </nav>
      <Toast /> {/* Include Toast for notifications */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
