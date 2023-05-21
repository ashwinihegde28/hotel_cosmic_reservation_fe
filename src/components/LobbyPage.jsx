import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LobbyCards from './LobbyCards';

import "./styles/lobby_page-styles.css"

import roomsImage from "./images/rooms-lobby.png";
import servicesImage from "./images/pool.png";
import restaurantImage from "./images/restaurant.jpg";
import spaImage from "./images/spa.jpg";

export default function LobbyPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    <div className="lobby-body">
    <Container>
      <Row>
        <Col className="mb-4">
        <LobbyCards
          title="Rooms"
          text="View our selection of deluxe themed rooms"         
          img={roomsImage}
          buttonText="View Rooms"
          link="/roomdisplay"
        />
        </Col>
        <Col className="mb-4">
        <LobbyCards
          title="Restaurant: The secret lounge"
          text="Have a snack and a drink at any time of the day"        
          img={restaurantImage}
          buttonText="View Restaurant"
          link="/restaurant"
        />
        </Col>
      </Row>
      <Row>
      <Col className="mb-4">
        <LobbyCards
          title="Services"
          text="View all that Hotel Cosmic has to offer"        
          img={servicesImage}
          buttonText="View Services"
          link="/services"
        />
        </Col>
        <Col className="mb-4">
        <LobbyCards
          title="Galactic Spa"
          text="Relax and unwind"        
        img={spaImage}
          buttonText="View Spa"
          link="/spa"
        />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
