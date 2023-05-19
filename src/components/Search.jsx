import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "../components/Button";

import "./styles/reservations-styles.css";

import { useReservations } from "../hooks/reservationHook";


export default function Search() {

  const [reservationEmail, setReservationEmail] = useState("");
  const [reservationID, setReservationID] = useState("");

  const [reservationError, setReservationError] = useState({
    reservationEmail: "",
    reservationID: "",
  });

  const { addReservation, getReservationById } = useReservations();

  const handleReservationSubmit = () => {
    // reservationID, reservationEmail
    getReservationById(reservationID)
      .then((reservation) => {

        // We need to call a pop up here to display the data from reservation

        // We need to call a pop up here to display the data from reservation

        // const { id, check_in_date, check_out_date, customer_id, date_reserved, room_id, total_price
        //} =  reservation 
        alert(`Reservation is :`);


      });

  };

  function validateReservation(event) {
    event.preventDefault();

    let errorExists = false;

    if (reservationEmail === "") {
      errorExists = true;
      setReservationError((prevError) => {
        return {
          ...prevError,
          reservationEmail: "Please enter email",
        };
      });
    }

    if (reservationID === "") {
      errorExists = true;
      setReservationError((prevError) => {
        return {
          ...prevError,
          reservationID: "Please enter your reservation ID",
        };
      });
    }
    if (!errorExists) {
      handleReservationSubmit();
    }
  }

  return (

    <div className="reservations-body">
      <article className="top-image">
        <h1 className="title">Reservations</h1>
      </article>

      <div className="form-search">
        <Card style={{ width: "50rem" }}>
          <Card.Img
            variant="top"
            src="https://www.optics-trade.eu/blog/wp-content/uploads/2020/12/Telescope-VS-Binoculars.jpg"
          />
          <Card.Body>
            <Card.Title>Looking for an existing reservation?</Card.Title>
            <Form onSubmit={validateReservation}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setReservationEmail(e.target.value)}
                    value={reservationEmail}
                    isInvalid={!!reservationError.reservationEmail}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {reservationError.reservationEmail}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicReservationId">
                <Form.Label>Reservation ID</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter Reservation ID"
                    onChange={(e) => setReservationID(e.target.value)}
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
      
    </div >
  )
}