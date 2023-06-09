import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from "../components/Button";

import RoomCards from './RoomCards';

import "./styles/roomdisplay-styles.css";

import bedroomMoonImage from "./images/bedroom-moon.jpg";
import bedroomVenusImage from "./images/bedroom-venus.jpg";
import bedroomJupiterImage from "./images/bedroom-jupiter.jpg";



export default function RoomDisplay2() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    
    <div className="room-body">
      <i className="fa-solid fa-bed" style={{color: 'black'}}></i>
      <Container>
        <Col>
          <Row className="mb-4">
            <RoomCards className="card-item"
              title="Welcome to the Moon"
              img={bedroomMoonImage}
              link="/moonthemeroom"
            />
          </Row>
          <Row className="mb-4">
            <RoomCards className="card-item"
              title="Welcome to Venus"
              img={bedroomVenusImage}
              link="/venusthemeroom"
            />
          </Row>
          <Row className="mb-4">
            <RoomCards className="card-item"
              title="Welcome to Jupiter"
              img={bedroomJupiterImage}
              link="/jupiterthemeroom"
            />
          </Row>
          <Row>
            <div className="button-container justify-content-end">
              <Link to="/reservations">
                <Button variant="primary" className="room-button" text="Book Room" />
              </Link>
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
}