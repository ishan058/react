// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'Alice', review: 'Great quality plants and fast delivery!' },
  { id: 2, name: 'Bob', review: 'The customer service is amazing, highly recommend!' },
];

const Testimonials = () => (
  <div className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-item">
          <p>{testimonial.review}</p>
          <h4>- {testimonial.name}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
