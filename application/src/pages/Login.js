// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Ensure this path is correct
import '../styles/Login.css';

const Login = () => {
    const { login } = useAuth(); // Destructure login from useAuth
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically make an API call to login
        const userData = { email }; // Example user data
        login(userData); // Call the login function
        // Redirect to dashboard or other logic
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
