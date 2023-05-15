import React from "react";


import "./styles/navbar-styles.css"

export default function Navbar() {

  return (
    <nav className="navbar">
      <a href="/" className="nav-title">
        Hotel Cosmic 
      </a>
      {/* hide the buttons on home page */}
      <ul>
        <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
        <li className="active"><a href="/landing" className="nav-link"> Landing </a></li>
        <li className="active"><a href="/services" className="nav-link"> Services </a></li>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
      </ul>
    </nav>

  )
};



