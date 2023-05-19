import React from "react";

import "./styles/navbar-styles.css"
import "./styles/gallery-styles.css"

import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNasa } from "../hooks/nasaHook";
import Space1 from "./images/space1.jpg";
import Space2 from "./images/space2.jpg";
import Space3 from "./images/space3.jpg";
import Space4 from "./images/space4.jpg";
import Space5 from "./images/space5.jpg";



export default function Services() {
  const nasaData = useNasa();


  return (

    <div className="gallery-body">
      <div className="carousel">

        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Space2}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>NASA Hubble Space Telescope captures the chaotic activity atop a three-light-year-tall pillar of gas and dust that is being eaten away by the brilliant light from nearby bright stars in a tempestuous stellar nursery called the Carina Nebula.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Space3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>In celebration of the International Year of Astronomy 2009, NASA's Great Observatories -- Hubble Space Telescope, Spitzer Space Telescope, and Chandra X-ray Observatory -- have produced a matched trio of images of the central region of our Milky Way.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Space1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>A beautiful sun rising on earth from the ISS</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Space4}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>2007-02-12 DO WE KEEP TITLE? DATE OR SOMETHING?</h3>
              <p>This infrared image from NASA Spitzer Space Telescope shows the Helix nebula, a cosmic starlet often photographed by amateur astronomers for its vivid colors and eerie resemblance to a giant eye.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Space5}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
              This dazzling infrared image from NASA Spitzer Space Telescope shows hundreds of thousands of stars crowded into the swirling core of our spiral Milky Way galaxy.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
      {/* Below is the cards that were just an example line 89-110 */}
      {/* <div className="cards">
        <Card style={{ width: '38rem' }}>
          <Card.Img variant="top" src="https://img.freepik.com/free-vector/astronaut-making-selfie-moon_1441-3247.jpg?w=900&t=st=1684014557~exp=1684015157~hmac=62f870c6352992be49ae95519afe618c97bc057e31757ed2574835d2023eb566" />
          <Card.Body>
            <Card.Title>Activity: Mars tour</Card.Title>
            <Card.Text>
              Become an explorer and walk on the surface
            </Card.Text>
            <Button variant="primary">More information</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '38rem' }}>
          <Card.Img variant="top" src="https://www.snezny.co.uk/wp-content/uploads/2021/02/W-Kuala-Lumpur-Photos-from-Marriott.com-8.jpg" />
          <Card.Body>
            <Card.Title>Restaurant: The secret loundge </Card.Title>
            <Card.Text>
              Have a snack and a drink at any time of the day
            </Card.Text>
            <Button variant="primary">More information</Button>
          </Card.Body>
        </Card>
      </div> */}
      <div className="nasa-box">
        <div className="nasa-image">
          <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='1200' height='620' scrolling='no' frameborder='0'></iframe>
        </div>
      </div>
      <div className="api-container">
        <div className="api-title">
          {nasaData.title}
        </div>
        <div className="api-image-box">
          <img className="api-image" src={nasaData.hdurl}></img>
        </div>
        <div className="api-description">
          <div className="api-author">
          {nasaData.copyright}
          </div>
          <br></br>
          {nasaData.explanation}
        </div>
      </div>
    </div>


  )
};
