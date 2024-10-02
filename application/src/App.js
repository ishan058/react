// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin'; // Import the new AdminLogin component
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute component
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
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import react-toastify CSS
import './styles/App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user-profile/:userId" element={<UserProfile />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/order-history" element={<OrderHistory />} />
                        {/* Protect Admin Route */}
                        <Route path="/admin" element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    {/* Add ToastContainer globally to the App */}
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
