// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAdminAuth } from '../contexts/AdminAuthContext'; // Correctly import `useAdminAuth`

const ProtectedRoute = ({ children }) => {
    const { admin, loading } = useAdminAuth(); // Use `useAdminAuth` to access admin auth state
    const isReduxAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Check Redux authentication state

    // Show loading indicator while checking admin auth status
    if (loading) {
        return <div>Loading...</div>;
    }

    // Determine if the user is authenticated
    const isAuthenticated = admin || isReduxAuthenticated;

    // Redirect if not authenticated as admin
    return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
