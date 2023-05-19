import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import PageLayout from "./components/PageLayout";
import LobbyPage from "./components/LobbyPage";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reservations from "./components/Reservations";
import Aboutus from "./components/Aboutus";
import RoomDisplay from "./components/RoomDisplay";
import MoonThemeRoom from "./components/MoonThemeRoom";
import VenusThemeRoom from "./components/VenusThemeRoom";
import JupiterThemeRoom from "./components/JupiterThemeRoom";
import ErrorPage from "./components/ErrorPage";
import SpaPage from "./components/SpaPage";
import Casino from "./components/Casino";
import Bar from "./components/Bar";
import SportsBar from "./components/SportsBar";
import Restaurant from "./components/Restaurant";

import "./components/styles/navbar-styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeProvider from "./providers/Stripe";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>



function App() {

  return (
    
    <StripeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<LobbyPage />} /> 
          <Route path="/roomdisplay" element={<RoomDisplay />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/reservations" element={<Reservations />} /> 
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path="/moonthemeroom" element={<MoonThemeRoom />} /> 
          <Route path="/venusthemeroom" element={<VenusThemeRoom />} /> 
          <Route path="/jupiterthemeroom" element={<JupiterThemeRoom />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/sportsbar" element={<SportsBar />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/*" element={<ErrorPage />} /> 
        </Route>
        
      </Routes>
    </Router>
    </StripeProvider>
  );
};

export default App;
