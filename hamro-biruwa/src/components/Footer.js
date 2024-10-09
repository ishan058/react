// Footer.js
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        {/* Add more links */}
      </ul>
    </div>
    <div className="contact-info">
      <h3>Contact Us</h3>
      <p>Phone: 9845126486</p>
      <p>Email: info@hamro-biruwa.com</p>
    </div>
  </footer>
);

export default Footer;
