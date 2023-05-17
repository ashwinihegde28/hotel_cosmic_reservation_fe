import React from "react";

import "./styles/navbar-styles.css"
import "./styles/gallery-styles.css"

import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Services() {

  return (

    <div className="gallery-body">
      <div className="carousel">

        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1644601664278-28918473d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/sunset-sky-with-rocket-launcher-generated-by-ai_188544-24579.jpg?w=1480&t=st=1684013783~exp=1684014383~hmac=4a59bd74dd5b22f2664a6a39197809a012b676fae3ee4242017decbdb17d530c"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2023/05/08/11/47/space-7978460_1280.jpg
              "
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1617800032175-23631cb240f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>

      <div className="cards">
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
      </div>
      <div className="nasa-box">
        <div className="nasa-image">
          <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='1200' height='618' scrolling='no' frameborder='0' ></iframe>
        </div>
      </div>
    </div>


  )
};
