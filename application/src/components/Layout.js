// src/components/Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Toast from './Toast';
import '../styles/Layout.css'; // Import enhanced Layout styles

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <header className="content-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Close' : 'Open'} Menu
          </button>
          <h1>Dashboard</h1>
        </header>
        <div className="content-body">
          {children} {/* Render children components dynamically */}
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </footer>
      </main>
      <Toast />
    </div>
  );
};

export default Layout;
