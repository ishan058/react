import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form">
            <h2>Contact Form</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Contact Number" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;
