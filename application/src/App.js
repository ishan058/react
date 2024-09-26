import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile'; // Ensure this file exists in the `pages` folder
import PrivateRoute from './PrivateRoute'; // Correct import for PrivateRoute
import NotFound from './pages/NotFound'; // Import NotFound component

// Stylesheets
import './styles/Navbar.css';
import './styles/ProductCard.css';
import './styles/Checkout.css';
import './styles/FilterBar.css';
import './styles/Profile.css';
import './styles/ProductReview.css';
import './styles/Home.css';
import './styles/Cart.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<PrivateRoute />}>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
