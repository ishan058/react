import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`bg-${darkMode ? 'gray-800' : 'white'} p-4`}>
      <div className="container mx-auto">
        <h1 className={`text-${darkMode ? 'white' : 'black'} text-lg`}>My App</h1>
        <button onClick={toggleDarkMode} className="ml-4 text-sm">
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
