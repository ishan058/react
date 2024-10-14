import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
// import Footer from './components/Footer'; // Uncomment if you have a Footer component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user-profile" element={<ProtectedRoute component={UserProfile} />} />
                    <Route path="/admin-dashboard" element={<ProtectedRoute component={AdminDashboard} />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </AuthProvider>
    );
};

export default App;
