import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Survey from './pages/Survey/Survey';
import Freelance from './pages/Freelance/Freelance';

export default function Router() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Freelance" element={<Freelance />} />
      </Routes>
    </div>
  );
}
