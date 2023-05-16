import React from "react";
import { useLocation } from 'react-router-dom';

import "./styles/navbar-styles.css"

export default function Navbar() {

  let location = useLocation();
  if (location.pathname === "/") {

    return (
      
      <nav className="navbar">
        <a href="/" className="nav-title">
          Hotel Cosmic 
        </a>
        {/* hide the buttons on home page */}
        <ul>
        </ul>
      </nav>
    )
  }
  if (location.pathname === "/roomdisplay") {
    return (
      
      <nav className="navbar">
        <a href="/" className="nav-title">
          Hotel Cosmic 
        </a>
        <ul>
          <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
          <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
          <li className="active"><a href="/services" className="nav-link"> Services </a></li>
          <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
          <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </ul>
      </nav>
    )
  }
  if (location.pathname === "/lobby") {
    return (
      
      <nav className="navbar">
        <a href="/" className="nav-title">
          Hotel Cosmic 
        </a>
        <ul>
          <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
          <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </ul>
      </nav>
    )
  }
  if (location.pathname === "/gallery") {
    return (
      
      <nav className="navbar">
        <a href="/" className="nav-title">
          Hotel Cosmic 
        </a>
        <ul>
          <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
          <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
          <li className="active"><a href="/services" className="nav-link"> Services </a></li>
          <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </ul>
      </nav>
    )
  }
  if (location.pathname === "/reservations") {
    return (
      
      <nav className="navbar">
        <a href="/" className="nav-title">
          Hotel Cosmic 
        </a>
        <ul>
          <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
          <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
          <li className="active"><a href="/services" className="nav-link"> Services </a></li>
          <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        </ul>
      </nav>
    )
  }
  
};



