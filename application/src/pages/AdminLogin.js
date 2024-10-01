// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'; // Import the corresponding CSS

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Authentication: You can replace this with actual backend authentication.
        if (username === 'admin' && password === 'admin123') {
            // Store authentication state (using localStorage or any state management solution)
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin'); // Redirect to Admin Dashboard
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
