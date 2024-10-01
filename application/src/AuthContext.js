// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state

    const login = (userData) => {
        setUser(userData); // Set user data on login
    };

    const logout = () => {
        setUser(null); // Clear user data on logout
    };

    const isAdmin = () => user?.role === 'admin'; // Check if user is an admin

    return (
        <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};
