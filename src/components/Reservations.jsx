import React from "react";

import "./styles/navbar-styles.css"
import "./styles/reservations-styles.css"


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Reservations() {

  return (

    <p className="reservations-body">
      <div className="top-image">
      </div>
      <div> Reservations page </div>
      <div className="search-img">
        <Card style={{ width: '42rem' }}>
          <Card.Img variant="top" src="https://www.optics-trade.eu/blog/wp-content/uploads/2020/12/Telescope-VS-Binoculars.jpg" />
          <Card.Body>
            <Card.Title>Looking for an existing reservation?</Card.Title>
            <Card.Text>
              Enter your name and reservation ID to see the details of your order
            </Card.Text>
            <Button variant="primary">Search</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="form-background">
        <div className="form">
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
                      id="custom-switch"
                      label="Mars rover tour"
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Visit the SpaceX base"
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Relaxation in the stars (spa)"
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
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
        </div>
      </div>
    </p>



  )
};