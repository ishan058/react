// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Ensure you import the store from the correct path
import { AuthProvider } from './contexts/AuthContext'; // User authentication context
import { AdminAuthProvider } from './contexts/AdminAuthContext'; // Admin authentication context
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Register from './pages/Register';
import OrderHistory from './components/OrderHistory';
import PasswordRecovery from './pages/PasswordRecovery';
import AdminProducts from './pages/AdminProducts'; // Admin products page
import UserProducts from './pages/UserProducts'; // User products page
import Header from './components/Header';
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
                                <Route path="/" element={<Home />} />
                                <Route path="/products" element={<ProductList />} />
                                <Route path="/user-products" element={<UserProducts />} />
                                <Route path="/admin-products" element={
                                    <ProtectedRoute>
                                        <AdminProducts />
                                    </ProtectedRoute>
                                } />
                                <Route path="/login" element={<Login />} />
                                <Route path="/admin-login" element={<AdminLogin />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/user-profile/:userId" element={<UserProfile />} />
                                <Route path="/product/:productId" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/order-history" element={<OrderHistory />} />
                                <Route path="/password-recovery" element={<PasswordRecovery />} />
                                <Route path="/admin" element={
                                    <ProtectedRoute>
                                        <AdminDashboard />
                                    </ProtectedRoute>
                                } />
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
