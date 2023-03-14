import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserProvider>
  </React.StrictMode>,
);
