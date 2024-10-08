import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Hamro Biruwa</div>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
            </ul>
            <input type="text" placeholder="Search plants..." />
        </nav>
    );
};

export default Navbar;
