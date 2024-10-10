import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers say About <span>Hamro Biruwa</span></h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <h4>Stella Lee</h4>
          <p>"Amazing plants and customer service!"</p>
        </div>
        <div className="testimonial-card">
          <h4>Rabina</h4>
          <p>"I love the variety of plants available."</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
