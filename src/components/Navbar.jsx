import React from "react";
import { useLocation } from 'react-router-dom';

import './styles/navbar-styles.css'

export default function Navbar() {

  let location = useLocation();


  return (
    
    <nav className="navbar" style={{ fontSize: 25 }}>
      <a href="/" className="nav-title">
        Hotel Cosmic
      </a>
      <ul>
        {location.pathname === "/roomdisplay" && 
        <>
        <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
        <li className="active"><a href="/services" className="nav-link"> Services </a></li>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </>
        }
        {location.pathname === "/lobby" && 
        <>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </>
        }
        {location.pathname === "/gallery" && 
        <>
        <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
        <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
        <li className="active"><a href="/services" className="nav-link"> Services </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </>
        }
        {location.pathname === "/reservations" && 
        <>
        <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
        <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
        <li className="active"><a href="/services" className="nav-link"> Services </a></li>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        </>
        }
        {location.pathname === "/services" && 
        <>
        <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
        <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </>
        }
        {(location.pathname === "/aboutus" || location.pathname === "/moonthemeroom" || location.pathname === "/jupiterthemeroom" || location.pathname === "/jupiterthemeroom") && 
        <>
        <li className="active"><a href="/roomdisplay" className="nav-link"> Rooms </a></li>
        <li className="active"><a href="/lobby" className="nav-link"> Lobby </a></li>
        <li className="active"><a href="/services" className="nav-link"> Services </a></li>
        <li className="active"><a href="/gallery" className="nav-link"> Gallery </a></li>
        <li className="active"><a href="/reservations" className="nav-link"> Reservations </a></li>
        </>
        }
      </ul>
    </nav>
     
  )
}




