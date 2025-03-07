import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactInfo from './components/ContactInfo';
import Shop from './components/Shop';
import './index.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactInfo />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
);

export default App;
