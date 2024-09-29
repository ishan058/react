import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Import pages from the pages folder
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Register from './components/Register';
import OrderHistory from './components/OrderHistory';
import Header from './components/Header';
import './styles/App.css';  // Updated import path

const App = () => {
    return (
        <Provider store={store}> {/* Wrap the Router with Provider */}
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} /> {/* Adjusted to avoid duplicates */}
                        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
                        <Route path="/login" element={<Login />} /> {/* Login Page */}
                        <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
                        <Route path="/user-profile/:userId" element={<UserProfile />} /> {/* User Profile with ID */}
                        <Route path="/product/:productId" element={<ProductDetail />} /> {/* Product Detail */}
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} /> {/* Registration Page */}
                        <Route path="/order-history" element={<OrderHistory />} />
                        <Route path="*" element={<NotFound />} /> {/* 404 Not Found Page */}
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
