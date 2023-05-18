import React, { useState } from "react";
import Button from "../components/Button";

import "./styles/navbar-styles.css";
import "./styles/reservations-styles.css";


import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import { useReservations } from "../hooks/reservationHook";
import { useCustomers } from "../hooks/customerHook";
import { useInvoices } from "../hooks/invoicesHook";



export default function Reservations(props) {
  const [reservationEmail, setReservationEmail] = useState("");
  const [reservationID, setReservationID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [reservationError, setReservationError] = useState({
    reservationEmail: "",
    reservationID: ""
  });
  const [error, setError] = useState({ 
    email: "",
    name: "",
    room: "",
    username: ""
  });
  const [reservationData, setReservationData] = useState({
    checkInDate: "",
    checkOutDate: "",
    customerId: "",
    roomId: "",
    totalPrice: 0,
  });

  const { reservations, loading, addReservation } = useReservations();
  const { addCustomer, customers } = useCustomers();
  const { addInvoice } = useInvoices();


  const handleSubmit = () => {
    
    // make the data an object ready for the hook
    addCustomer({ name, email }) 
    
    .then((customer_id) => {
      const { checkInDate, checkOutDate, roomId, totalPrice } = reservationData
      let customerId = customer_id.id

      addReservation({ checkInDate: '2022-04-03', checkOutDate: '2022-04-10', customerId, roomId: 2, totalPrice })
      
      .then((reservation_id) => {
        let reservations_id = reservation_id
        // must return reservations id
        console.log(`addReservation promise succesful`)
        // POST METHOD 
        const description = "description here bla bla bla bla FINAL TEST FINAL TESTFINAL TESTFINAL TEST ";
        
        addInvoice({ reservations_id, description })
        .then((invoiceback) => {
            console.log(`add invoice worked`, invoiceback)
            alert(`Reservation created!`)
        })
      });
    });


  };

  const handleReservationSubmit = () => {
    alert('A form was submitted');
  };


  function validateReservation(event) {
    event.preventDefault();

    let errorExists = false;

    if (reservationEmail === "") {
      errorExists = true;
      setReservationError(prevError => {
        return {
          ...prevError,
          reservationEmail: "Please enter email"
        };
      });
    }

    if (reservationID === "") {
      errorExists = true;
      setReservationError(prevError => {
        return {
          ...prevError,
          reservationID: "Please enter your reservation ID"
        };
      });
    }
    if (!errorExists) {
      handleReservationSubmit();
    }
  }


  function validateBooking(event) {
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

    if (name.trim().length < 2) {
      errorExists = true;
      setError(prevError => {
        return {
          ...prevError,
          name: "Name must be at least 2 characters"
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

    if (room === "") {
      errorExists = true;
      setError(prevError => {
        return {
          ...prevError,
          room: "Please select a room"
        };
      });
      return;
    }

    if (!errorExists) {
      handleSubmit();
    }
  }


  return (

    <div className="reservations-body">
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
            <Form onSubmit={validateReservation}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setReservationEmail(e.target.value)}
                    value={reservationEmail}
                    isInvalid={!!reservationError.reservationEmail}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {reservationError.reservationEmail}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Reservation ID</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter Reservation ID"
                    onChange={e => setReservationID(e.target.value)}
                    value={reservationID}
                    isInvalid={!!reservationError.reservationID}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {reservationError.reservationID}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" text="Search" />
            </Form>         
          </Card.Body>
        </Card>
      </div>

      <div className="form-background">
        <div className="form">
          <Card style={{ width: '50rem', backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px" }}>
            <Form onSubmit={validateBooking}>
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
    </div>
  );
};