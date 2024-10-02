// src/contexts/AdminAuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the Admin Auth Context
const AdminAuthContext = createContext();

// Custom hook to use AdminAuthContext
export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    if (!context) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
};

// AdminAuthProvider component to wrap around components that need access to admin auth state
export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null); // Admin state
    const [loading, setLoading] = useState(true); // Loading state
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate checking if admin is authenticated (you can replace this with your API call)
        const storedAdmin = localStorage.getItem('adminAuth');
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
        setLoading(false);
    }, []);

    const login = (adminData) => {
        setAdmin(adminData);
        localStorage.setItem('adminAuth', JSON.stringify(adminData));
        navigate('/admin'); // Redirect to admin dashboard on successful login
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('adminAuth');
        navigate('/admin-login');
    };

    return (
        <AdminAuthContext.Provider value={{ admin, login, logout, loading }}>
            {children}
        </AdminAuthContext.Provider>
    );
};
