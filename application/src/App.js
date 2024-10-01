// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthContext
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
import './styles/App.css';

const PrivateRoute = ({ children }) => {
    const { isAdmin } = useAuth(); // Get isAdmin from Auth context
    return isAdmin() ? children : <Navigate to="/login" />; // Redirect if not admin
};

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider> {/* Wrap with AuthProvider */}
                <Router>
                    <div>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<ProductList />} />
                            <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} /> {/* Protect Admin route */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/user-profile/:userId" element={<UserProfile />} />
                            <Route path="/product/:productId" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/order-history" element={<OrderHistory />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </AuthProvider>
        </Provider>
    );
};

export default App;
