import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './global.ts';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

