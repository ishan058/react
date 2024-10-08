import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        { name: 'Stella Lee', text: 'Great variety of plants and fantastic service!' },
        { name: 'Rabina', text: 'I love my new snake plant. It fits perfectly in my living room.' },
    ];

    return (
        <section className="testimonials">
            <h2>What Our Customers say About <span>Hamro Biruwa</span>?</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
