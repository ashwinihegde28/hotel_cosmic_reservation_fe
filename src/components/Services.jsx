import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "./styles/navbar-styles.css"
import "./styles/services-styles.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "../components/Button";

import RoomCards from './RoomCards';

import bedroomMoonImage from "./images/bedroom-moon.jpg";
import bedroomVenusImage from "./images/bedroom-venus.jpg";
import bedroomJupiterImage from "./images/bedroom-jupiter.jpg";
import Spa from "./images/spa.jpg";
import Casino from "./images/casino2.png";
import Bar from "./images/bar.png";
import Sportsbar from "./images/sportsbar3.jpg";
import Restaurant1 from "./images/restaurant.jpg";


export default function Services() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    
    <p className="services-body">
    <i class="fa-solid fa-bed" style={{color: 'black'}}></i>
    <Container>
      <Col>
        <Row className="mb-4">
          <RoomCards className="card-item"
            title="Spa"
            img={Spa}
            link="/spa"
          />
        </Row>
        <Row className="mb-4">
        <Row className="mb-4">
          <RoomCards className="card-item"
            title="Restaurant"
            img={Restaurant1}
            link="/restaurant"
          />
        </Row>
        <Row className="mb-4">
          <RoomCards className="card-item"
            title="Bar"
            img={Bar}
            link="/bar"
          />
        </Row>
          <RoomCards className="card-item"
            title="Casino"
            img={Casino}
            link="/casino"
          />
        </Row>
        <Row className="mb-4">
          <RoomCards className="card-item"
            title="Sports Bar"
            img={Sportsbar}
            link="/sportsbar"
          />
        </Row>
        <Row>
          <div className="button-container justify-content-end">
            <Link to="/reservations">
              <Button className="room-button" text="Book Room" />
            </Link>
          </div>
        </Row>

      </Col>
    </Container>
  </p>
  )
};