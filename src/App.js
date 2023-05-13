import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import PageLayout from "./components/PageLayout";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reservations from "./components/Reservations";
import Aboutus from "./components/Aboutus";

import "./components/styles/navbar-styles.css"




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/reservations" element={<Reservations />} /> 
          <Route path="/aboutus" element={<Aboutus />} /> 
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
