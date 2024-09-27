import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import pages from the pages folder
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
// import ProductList from './pages/ProductList';
import Profile from './pages/Profile';
// import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
// import Login from './components/Login';
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
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<ProductList />} /> {/* Home or Product List */}
                    <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
                    <Route path="/login" element={<Login />} /> Login Page
                    {/* <Route path="/signup" element={<SignUp />} /> Sign Up Page */}
                    <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
                    <Route path="/user-profile/:userId" element={<UserProfile />} /> {/* User Profile with ID */}
                    <Route path="*" element={<NotFound />} /> {/* 404 Not Found Page */}
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
