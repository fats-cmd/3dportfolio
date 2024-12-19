/**
 * main.jsx
 * The entry point of the React application.
 * Sets up the React root and renders the main App component.
 * Imports global styles and initializes the application.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
