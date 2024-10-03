// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './contexts/AuthContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';

// Page Imports
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import PasswordRecovery from './pages/PasswordRecovery';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import UserProducts from './pages/UserProducts';
import NotFound from './pages/NotFound';

// Component Imports
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import './styles/App.css';

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <AdminAuthProvider>
                    <Router>
                        <div>
                            <Header />
                            <Routes>
                                {/* Public Routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/products" element={<ProductList />} />
                                <Route path="/product/:productId" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/password-recovery" element={<PasswordRecovery />} />
                                <Route path="/user-products" element={<UserProducts />} />
                                <Route path="/user-profile/:userId" element={<UserProfile />} />

                                {/* Protected Admin Routes */}
                                <Route path="/admin-login" element={<AdminLogin />} />
                                <Route
                                    path="/admin"
                                    element={
                                        <ProtectedRoute>
                                            <AdminDashboard />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/admin-products"
                                    element={
                                        <ProtectedRoute>
                                            <AdminProducts />
                                        </ProtectedRoute>
                                    }
                                />

                                {/* User-Specific Routes */}
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/order-history" element={<OrderHistory />} />

                                {/* 404 Page */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </Router>
                </AdminAuthProvider>
            </AuthProvider>
        </Provider>
    );
};

export default App;
