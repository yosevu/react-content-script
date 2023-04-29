import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App';
// import reportWebVitals from '../utils/reportWebVitals';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// reportWebVitals(console.log);
