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
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>



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
