import React from "react";
import { Link } from "react-router-dom";

import "./styles/roomdisplay-styles.css";
import "./Reservations.jsx";

export default function RoomDisplay() {

  return (
    <div>
      <h1 className="title">Rest and Recharge in one of our deluxe themed rooms</h1>

      <div className="room-display-body">

        <div>
          <h2 className="moon-theme">Welcome to the Moon</h2>
          <img
            src="https://drive.google.com/uc?export=view&id=1M8w1IhP7BbDG2Pfy1rlh8G7YN_17l87P"
            className="room-image-moon"
          />
          {/* <div className="moon-room-description">
          <p>Description of the moon theme...</p>
          </div> */}
        <Link to="/MoonThemeRoom">
        <button className="room-button">View Details</button>
        </Link>
        </div>
        <div>
          <h2 className="venus-theme">Welcome to Venus</h2>
          <img src="https://drive.google.com/uc?id=18muVEVPKIuvVAOwUQieu2Pm9NqJ16HqY"
            className="room-image-venus"
          />
        <Link to="/VenusThemeRoom">
        <button className="room-button">View Details</button>
        </Link>
        </div>
        <div>
          <h2 className="jupitar-theme">Welcome to Jupitar</h2>
          <img src="https://drive.google.com/uc?id=1lObWdFs0obLj0v_dLXbX2yJ7n9cQu0IH"
            className="room-image-jupitar"
          />
        <Link to="/JupiterThemeRoom">
        <button className="room-button">View Details</button>
        </Link>
        </div>
      </div>
      <div className="button-container">
        <Link to="/Reservations">
        <button className="room-button">Book Room</button>
        </Link>
      </div>
    </div>

  );
};