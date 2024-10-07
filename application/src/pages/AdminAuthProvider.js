// src/pages/AdminAuthProvider.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is from react-router-dom

const AdminAuthProvider = () => {
  const navigate = useNavigate();

  // Example usage of useNavigate inside a button
  const handleLogout = () => {
    // Navigate to login page on logout
    navigate('/login');
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminAuthProvider;
