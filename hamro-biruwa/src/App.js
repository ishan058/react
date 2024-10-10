import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Categories from './components/PlantCategories';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <Navbar />
        <button onClick={toggleDarkMode} className="mode-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
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
  );
};

export default App;
