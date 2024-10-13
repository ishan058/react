// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Importing global CSS

// Rendering the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
