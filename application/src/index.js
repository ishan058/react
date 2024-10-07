// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './store'; // Import the Redux store
import { AuthProvider } from './contexts/AuthContext'; // Import the AuthProvider
import App from './App'; // Import the main App component

// Ensure that there is only a single BrowserRouter wrapping the entire app.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Redux Provider */}
      <AuthProvider> {/* Wrap App with AuthContext */}
        <BrowserRouter> {/* Ensure there is only a single BrowserRouter */}
          <App /> {/* Main App Component */}
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
