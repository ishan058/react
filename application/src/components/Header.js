import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = ({ isAuthenticated, handleLogout }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header className={`main-header ${isDarkMode ? 'dark' : ''}`}>
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
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? <BsSun /> : <BsMoon />}
            </button>
        </header>
    );
};

export default Header;
