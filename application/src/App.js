import React from 'react';
import './global.css';
import './Navbar.css';
import './ProductCard.css';
import './Checkout.css';
import './Responsive.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes and Route
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Update Route syntax */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
