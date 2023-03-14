import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './contexts/userContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserProvider>
  </React.StrictMode>,
);
