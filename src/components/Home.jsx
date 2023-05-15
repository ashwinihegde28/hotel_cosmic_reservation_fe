import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import "./styles/navbar-styles.css";
import "./styles/home-styles.css";
import spaceship from "./images/space_ship.gif";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="home-body">
      <h1>Wlecome to Hotel Cosmic </h1>
      <div className="button-container">
        <h3>Choose the options below</h3>
        <Link to="/landing">
          <Button text="Experience Tour" />
        </Link>
        <Link to="/reservations">
          <Button text="Room Reservations" />
        </Link>
      </div>
    </div>
  );
}
