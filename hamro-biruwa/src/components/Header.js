// Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="container flex space-between">
      <h1 className="logo">Hamro Biruwa</h1>
      <nav className="nav">
        <ul className="nav-list flex">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
