import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DinoGame from './Pages/Intro/landingPage';
// import Home from './Pages/Home/Home';
import HorizontalSortableList from "./Pages/draganddrop/SortableContext.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/Home.jsx';
import AdminPage from './Pages/Admin/Admin.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DinoGame /> */}
    <Router>
      {/* Pages */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> Home Page */}
        <Route path='/' element={<HomePage /> } /> 
        <Route path='/addBlog' element={<AdminPage />} />
      </Routes>
      {/* <HorizontalSortableList /> */}
      {/* Footer is here  */}
    </Router>
  </React.StrictMode>
);

