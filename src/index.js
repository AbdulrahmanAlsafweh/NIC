import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DinoGame from './components/landingPage';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Products from './components/Products';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <DinoGame /> */}
      {/* <Navbar /> */}

      <Hero />
      <Products />
  </React.StrictMode>
);

