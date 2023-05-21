import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutusCards from "./AboutusCards";

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
                  img="https://drive.google.com/uc?export=view&id=1cJXy4MbmODDsKFskm2qCINEpBBZNU19b"
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
                  img="https://drive.google.com/uc?export=view&id=1k612ZBdfKE_NjCbdeAVq5DclVBTtKmzt"
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
                  img="https://drive.google.com/uc?export=view&id=1pdO9RJ55eMMIaLudo7kiGDwOZN_MqIGE"
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