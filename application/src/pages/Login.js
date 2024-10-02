// src/pages/Login.js

import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Ensure the correct import path
import '../styles/Login.css'; // Ensure the correct import path
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import eye icons

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state
        try {
            await login(email, password);
            // Redirect or perform any action on successful login
        } catch {
            setError('Failed to log in');
        }
        setLoading(false); // Reset loading state
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit} aria-live="polite">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-required="true"
                        aria-invalid={error ? "true" : "false"}
                    />
                </div>
                <div className="form-group password-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-required="true"
                        />
                        <span className="password-toggle" onClick={() => setShowPassword(!showPassword)} role="button" aria-label={showPassword ? "Hide password" : "Show password"}>
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                    </div>
                </div>
                <button type="submit" className="login-button" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <div className="register-link">
                    Don't have an account? <a href="/register">Register now</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
