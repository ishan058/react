import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Updated path to the styles directory

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Siyodhago</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
