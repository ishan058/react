// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials)
            .then(() => {
                // Handle successful login, e.g., redirect or show a success message
                console.log('Login successful');
            })
            .catch((err) => {
                // Handle login failure
                setError('Login failed. Please try again.'); // Example error handling
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>} {/* Display error message if any */}
            </form>
        </div>
    );
};

export default Login;
