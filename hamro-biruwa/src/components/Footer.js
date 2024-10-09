import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="quick-links">
                    <a href="/">Home</a>
                    <a href="/product">Product</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="contact-info">
                    <p>Find us on Maps</p>
                    <p>Contact: +985123456</p>
                </div>
                <div className="privacy">
                    <a href="/terms">Terms of Use</a>
                    <a href="/policy">Privacy Policy</a>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="tel" placeholder="Contact Number" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
