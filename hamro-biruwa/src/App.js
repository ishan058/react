// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Categories from './components/PlantCategories';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Newsletter from './components/Newsletter';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Router>
          <Navbar />
          <ThemeToggle />
          <Newsletter />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories />
                <BestSellers />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
