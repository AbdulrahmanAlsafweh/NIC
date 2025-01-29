import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DinoGame from './Pages/Intro/landingPage';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItSupport from './Pages/Itsupport/Itsupport';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TopFooter from './components/Footer/TopFooter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DinoGame /> */}
    <Router>
      {/* Navbar  */}
      <Navbar />
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} /> Home Page
        <Route path="/it-support" element={<ItSupport />} />
      </Routes>
      {/* Footer is here  */}
      <TopFooter />
      <Footer />
    </Router>
  </React.StrictMode>
);

