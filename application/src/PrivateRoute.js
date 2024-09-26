import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth hook

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Get authentication state

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
