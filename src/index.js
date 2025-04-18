import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App';
import './index.css'; // Import Tailwind CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));  // Get the root div from index.html

root.render(
  <BrowserRouter>
    <App />  {/* The App component holds the routing and renders all pages */}
  </BrowserRouter>
);
