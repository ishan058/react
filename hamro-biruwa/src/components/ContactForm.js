import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!form.name) errors.name = 'Name is required';
    if (!form.contact) errors.contact = 'Contact is required';
    if (!form.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
      // Call API to submit the form
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
      {errors.name && <span className="error">{errors.name}</span>}
      
      <input type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" />
      {errors.contact && <span className="error">{errors.contact}</span>}
      
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"></textarea>
      {errors.message && <span className="error">{errors.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
