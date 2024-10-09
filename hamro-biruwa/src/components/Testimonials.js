// Testimonials.js
import React from 'react';

const Testimonial = ({ name, review }) => (
  <div className="testimonial">
    <p>{review}</p>
    <h4>{name}</h4>
  </div>
);

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Customers say About <span>Hamro Biruwa</span>?</h2>
    <div className="testimonial-cards">
      <Testimonial name="Stella Lee" review="This plant has transformed my space!" />
      {/* Add more Testimonial components */}
    </div>
  </section>
);

export default Testimonials;
