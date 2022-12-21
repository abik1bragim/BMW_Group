import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import BMW from './pages/BMW';
import Mini from './pages/Mini';
import RR from './pages/RR';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bwm' element={<BMW />} />
        <Route path='/mini' element={<Mini />} />
        <Route path='/rolls-royce' element={<RR />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

