import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Hamro Biruwa</div>
            <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </nav>
        </header>
    );
}

export default Header;
