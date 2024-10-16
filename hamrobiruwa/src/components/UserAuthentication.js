import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAPI } from '../api/api';
import { loginSuccess } from '../slices/userSlice';

const UserAuthentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginAPI({ email, password });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserAuthentication;
