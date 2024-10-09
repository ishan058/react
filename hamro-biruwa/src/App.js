import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/PlantCategories';
import BestSeller from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <HeroSection />
            <Categories />
            <BestSeller />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
