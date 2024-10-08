import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlantCategories from './components/PlantCategories';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <PlantCategories />
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
