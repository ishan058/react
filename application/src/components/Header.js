import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isAuthenticated, handleLogout }) => {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/">ShiyoDhago</Link>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                {isAuthenticated ? (
                    <div className="profile-dropdown">
                        <button className="dropdown-toggle">Profile</button>
                        <div className="dropdown-menu">
                            <Link to="/profile">My Profile</Link>
                            <Link to="/orders">My Orders</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
