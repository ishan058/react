import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout.css'; // Create a separate Layout.css for layout styles
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
