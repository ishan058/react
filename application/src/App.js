import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user-profile" element={<ProtectedRoute component={UserProfile} />} />
                    <Route path="/admin-dashboard" element={<ProtectedRoute component={AdminDashboard} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
