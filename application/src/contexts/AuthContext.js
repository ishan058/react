// src/contexts/AuthContext.js

import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import { loginUser, registerUser } from '../utils/api'; // Import necessary API functions

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token');
                } else {
                    setCurrentUser(decodedToken);
                }
            } catch (error) {
                console.error('Invalid token:', error);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await loginUser({ email, password });
        const token = response.token;
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        setCurrentUser(decodedToken);
    };

    const register = async (email, password) => {
        const response = await registerUser({ email, password });
        const token = response.token;
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        setCurrentUser(decodedToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
