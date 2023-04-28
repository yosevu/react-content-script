import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Popup from './Popup';
import reportWebVitals from '../utils/reportWebVitals';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
reportWebVitals(console.log);
