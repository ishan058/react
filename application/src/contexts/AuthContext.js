// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await loginUser(credentials);
    setUser(response);
  };

  const register = async (userData) => {
    const response = await registerUser(userData);
    setUser(response);
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
