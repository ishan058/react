import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Simulating an API call to fetch testimonials
        setTimeout(() => {
            setTestimonials([
                { id: 1, name: 'Stella Lee', text: 'Great variety of plants and fantastic service!' },
                { id: 2, name: 'Rabina', text: 'I love my new snake plant. It fits perfectly in my living room.' },
                { id: 3, name: 'John Doe', text: 'The plants are well-packed and of excellent quality.' },
            ]);
        }, 1000);
    }, []);

    return (
        <section className="testimonials">
            <h2>What Our Customers say About <span>Hamro Biruwa</span>?</h2>
            <div className="testimonial-list">
                {testimonials.length === 0 ? (
                    <p>Loading testimonials...</p>
                ) : (
                    testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.text}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Testimonials;
