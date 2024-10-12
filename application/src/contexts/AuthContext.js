// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correctly importing jwtDecode
import { loginUser, registerUser } from '../utils/api'; // Ensure these are correctly exported in api.js

// Your context and provider logic here...

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkTokenExpiration = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                logout();
            } else {
                setCurrentUser(decodedToken);
            }
        } catch (error) {
            console.error('Invalid token', error);
            logout();
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await loginUser({ email, password });
            const token = response.token;
            checkTokenExpiration(token);
            localStorage.setItem('token', token);  // Store token securely
        } catch (error) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    };

    const register = async (email, password) => {
        setLoading(true);
        try {
            const response = await registerUser({ email, password });
            const token = response.token;
            checkTokenExpiration(token);
            localStorage.setItem('token', token);
        } catch (error) {
            setError('Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) checkTokenExpiration(token);
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout, error, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
