import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlantCategories from './components/PlantCategories';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    return (
        <Router>
            <div className="App">
                <Navbar onSearch={handleSearch} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <PlantCategories searchTerm={searchTerm} />
                            <BestSellers />
                            <Testimonials />
                            <ContactForm />
                        </>
                    } />
                    <Route path="/about" element={<div>About Us</div>} />
                    <Route path="/contact" element={<div>Contact Us</div>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
