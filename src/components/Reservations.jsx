import React, { useState } from "react";
import Button from "../components/Button";

import "./styles/navbar-styles.css";
import "./styles/reservations-styles.css";


import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Reservations(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState({
    email: "",
    name: "",
    room: "",
    username: ""
  });

  const handleSubmit = () => {
    alert('A form was submitted');
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value)
  }

  function validate(event) {
    event.preventDefault();
    

    let errorExists = false;

    if (name === "") {
      errorExists = true;
      setError(prevError => {
        return {
          ...prevError,
          name: "Please enter name"
        };
      });
    }

    if (email === "") {
      errorExists = true;
      setError(prevError => {
        return {
          ...prevError,
          email: "Please enter email"
        };
      });
    }

    if(room === "") {
    errorExists = true
      setError(prevError => {
        return {
          ...prevError, 
          room: "Please select a room"
        }
      })
      return
    }

    if (username === "") {
      errorExists = true;
      setError(prevError => {
        return {
          ...prevError,
          username: "Please enter username"
        };
      });
    }
    if (!errorExists) {
      handleSubmit();
    }
  }


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
            <Button variant="primary" text="Search" />
          </Card.Body>
        </Card>
      </div>
      <div className="form-background">
        <div className="form">
          <Card style={{ width: '50rem', backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px" }}>
            <Form onSubmit={validate}>
              <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                <Col xs="auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        isInvalid={!!error.email}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {error.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Text className="text-muted">
                      Your information is secured with us, it will never be shared.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    size="lg"
                    type="name"
                    placeholder="Full name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    isInvalid={!!error.name}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {error.name}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Room Selector</Form.Label>
                <InputGroup hasValidation>
                <Form.Select 
                size="lg" 
                onChange={e => setRoom(e.target.value)}
                value={room}
                isInvalid={!!error.room}
                >
                  <option>Select a room</option>
                  <option value="1">Moon theme room</option>
                  <option value="2">Venus Theme room</option>
                  <option value="3">Jupiter Theme room</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                    {error.room}
                  </Form.Control.Feedback>
                </InputGroup>
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
                  <Button size="lg" type="submit" text="Book now!" />
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </div>
      <div className="bottom-image">

      </div>
    </p>



  );
};