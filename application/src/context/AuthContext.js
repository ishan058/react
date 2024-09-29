import React, { createContext, useContext, useState } from 'react';

// Create an AuthContext with React's createContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // Store the user data

    // Function to log in the user
    const login = (userData) => {
        setUser(userData);
    };

    // Function to log out the user
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
