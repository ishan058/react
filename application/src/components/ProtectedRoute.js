// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');
    return isAdminAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
