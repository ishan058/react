import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlantProvider } from './contexts/PlantContext';
import './index.css';
;
ReactDOM.render(
  <PlantProvider>
    <App />
  </PlantProvider>,
  document.getElementById('root')
);
