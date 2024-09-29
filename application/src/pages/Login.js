import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Assuming you have this context in `context/AuthContext.js`
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';  // Ensure the CSS path is correct

const Login = () => {
  const { login } = useAuth();  // Using the `useAuth` hook to access the login function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/');  // Redirect to the homepage on successful login
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          <span>Don't have an account? </span>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
