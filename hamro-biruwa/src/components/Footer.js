import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>Hamro Biruwa</h2>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <form className="contact-form">
        {/* Form fields */}
      </form>
    </footer>
  );
};

export default Footer;
