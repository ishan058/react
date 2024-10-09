// App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Categories from './components/PlantCategories';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Categories />
    <BestSellers />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
