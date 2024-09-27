import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import OrderHistory from './components/OrderHistory';
import Header from './components/Header';
import './styles/App.css';  // Updated import path

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
