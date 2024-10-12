// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom'; // Replaces Redirect
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />; // Replaces <Redirect />
  }

  return children;
};

export default ProtectedRoute;
