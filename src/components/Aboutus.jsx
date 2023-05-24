import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutusCards from "./AboutusCards";

import roomsImage from "./images/rooms-lobby.png";
import restaurantImage from "./images/restaurant.jpg";
import spaImage from "./images/spa.jpg";

import "./styles/footer-styles.css"
import "./styles/aboutus-styles.css"

export default function Aboutus() {

  return (

    <div className="aboutus-body">
      <article className="top-image-aboutus">
        <h1 className="title-aboutus">About us</h1>
      </article>
      <div>
        <div className="lobby-body">
          <Container>
            <Row>
              <Col className="mb-4">
                <AboutusCards
                  title="Catherine"
                  text="Full Stack Web Developer"
                  img={roomsImage}
                  buttonText="View Github"
                  link="https://github.com/catherinemitchell"
                  buttonText2="View Linked In"
                  link2=""
                />
              </Col>
              <Col className="mb-4">
                <AboutusCards
                  title="Ashwini"
                  text="Full Stack Web Developer"
                  img={restaurantImage}
                  buttonText="View Github"
                  link="https://github.com/ashwinihegde28"
                  buttonText2="View Linked In"
                  link2=""
                />
              </Col>
              <Col className="mb-4">
                <AboutusCards
                  title="Jeremy"
                  text="Full Stack Web Developer"
                  img={spaImage}
                  buttonText="View Github"
                  link="https://github.com/010JGL"
                  buttonText2="View Linked In"
                  link2="https://www.linkedin.com/in/jeremygl/"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>

  )
};