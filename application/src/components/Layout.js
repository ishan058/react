// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import '../App.css';
import Toast from './Toast';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar /> {/* Include the Sidebar component */}
      <main className="main-content">
        {children}
      </main>
      <Toast />
    </div>
  );
};

export default Layout;
