// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Hamro Biruwa</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
