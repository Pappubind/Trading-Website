import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/home'; 
import Header from './components/header'; 
import Footer from './components/footer'; 
import { Services } from './pages/services'; 
import { Courses } from './pages/courses'; 
import Contact from './pages/contact';
import Market from './pages/market';
import About from './pages/About'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/market" element={<Market />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
