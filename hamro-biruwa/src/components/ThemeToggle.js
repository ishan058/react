// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
