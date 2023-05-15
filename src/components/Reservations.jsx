import React from "react";

import "./styles/navbar-styles.css"
import "./styles/reservations-styles.css"


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



export default function Reservations() {

  return (

    <p className="reservations-body">
    <article className="top-image">
      <h1 className="title">Reservations</h1>
    </article>
      <div>  
      </div>
      <div className="search-img">
        <Card style={{ width: '60rem' }}>
          <Card.Img variant="top" src="https://www.optics-trade.eu/blog/wp-content/uploads/2020/12/Telescope-VS-Binoculars.jpg" />
          <Card.Body>
            <Card.Title>Looking for an existing reservation?</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Reservation ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Reservation ID" />
              </Form.Group>
            </Form>
            <Button variant="primary">Search</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="form-background">
        <div className="form">
          <Card style={{ width: '50rem', backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px" }}>
            <Form>
              <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                <Col xs="auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Your information is secured with us, it will never be shared.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control size="lg" type="name" placeholder="Full name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Room Selector</Form.Label>
                <Form.Select size="lg">
                  <option>Select a room</option>
                  <option value="1">Moon theme room</option>
                  <option value="2">Venus Theme room</option>
                  <option value="3">Jupiter Theme room</option>
                </Form.Select>
              </Form.Group>
              <fieldset>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label as="legend" column xs="auto">
                    Activities
                  </Form.Label>
                  <Col xs="auto">
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch1"
                        label="Mars rover tour"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch2"
                        label="Visit the SpaceX base"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch3"
                        label="Relaxation in the stars (spa)"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch4"
                        label="Visit the Mars biodome"
                      />
                    </Form>
                  </Col>
                </Form.Group>
              </fieldset>

              <Form.Group as={Col} className="mb-3">
                <Col xs="auto">
                  <Button size="lg" type="submit">Book now!</Button>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </div>
      <div className="bottom-image">

      </div>
    </p>



  )
};