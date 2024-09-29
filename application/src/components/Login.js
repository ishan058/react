import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css'; // Make sure you have this CSS file

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="button" className="login-button" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
