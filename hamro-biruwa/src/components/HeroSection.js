import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="fade-in">Welcome to Our Plant Store</h1>
      <p className="slide-up">Find the perfect plants for your home or office</p>
      <button className="fade-in-delay">Shop Now</button>
    </section>
  );
};

export default HeroSection;
