import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: "Stella Lee", text: "Great selection of plants and fast delivery." },
        { name: "Rabina", text: "Love the variety and quality of the plants!" }
    ];

    return (
        <section className="testimonials">
            <h2>What Our Customers say About <span className="highlight">Hamro Biruwa</span></h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
