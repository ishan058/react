// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
    // Access the authentication state from the Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If the user is not authenticated, redirect them to the admin login page
    if (!isAuthenticated) {
        return <Navigate to="/admin-login" />;
    }

    // If authenticated, render the children components (the protected routes)
    return children;
};

export default ProtectedRoute;
