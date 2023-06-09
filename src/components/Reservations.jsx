import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import InvoicePopup from "./Invoice";

import "react-calendar/dist/Calendar.css";
import "./styles/navbar-styles.css";
import "./styles/reservations-styles.css";
import "./styles/calender.css";

import Accordion from "react-bootstrap/Accordion";
import Calendar from "react-calendar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import customerPayment from "../hooks/stripe_payment";
import { useReservations } from "../hooks/reservationHook";
import { useCustomers } from "../hooks/customerHook";
import { useInvoices } from "../hooks/invoicesHook";
import { useRooms } from "../hooks/roomsHook";

export default function Reservations(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);
  const [newInvoice, setNewInvoice] = useState(null);
  const [roomPrice, setRoomPrice] = useState(null);

  const [error, setError] = useState({
    email: "",
    name: "",
    room: "",
    username: "",
    card: "",
  });

  const [reservationData, setReservationData] = useState({
    checkInDate: "",
    checkOutDate: "",
    customerId: "",
    roomId: "",
    totalPrice: 4000000.0,
  });

  const stripe = useStripe();
  const elements = useElements();

  //check-in and check-out dates are stored in state - date variable
  const [date, setDate] = useState([new Date(), new Date()]);

  const { addReservation } = useReservations();
  const { addCustomer, getCustomerByEmail } = useCustomers();
  const { addInvoice } = useInvoices();
  const { rooms } = useRooms();

  // const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const location = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [location]);

  const handleCalendarChange = (newDate) => {
    setDate(newDate);
  };

  //Extract the day and time components from date[0] and date[1](Moved later to helper file.)
  const extractDayAndTime = (dateObj) => {
    const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
    const time = dateObj.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    const date = dateObj.toLocaleDateString("en-US");
    return `${day} ${time} (${date})`;
  };

  // added an object here
  //  line 263 name, email, room, card: paymentMethod.id, paymentMethod
  const handleSubmit = async (object) => {
    const card = elements.getElement(CardElement);
    const amount = 5000;
    const currency = "CAD";
    const paymentMethod = object.paymentMethod;

    var price = 0;
    var roomType = "Moon";
    for (let roomObj of rooms) {
      if (roomObj.id === Number(room)) {
        setRoomPrice(roomObj.price);
        price = roomObj.price;
        roomType = roomObj.type;
      }
    }

    await customerPayment({ amount, currency, paymentMethod })
      .then((clientSecret) => {
        // Use the clientSecret for the client-side payment flow

        // Call the Stripe.js function to confirm the payment using the clientSecret
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
            },
          })
          .then((result) => {
            // Handle the payment result
            if (result.error) {
              console.error("Payment failed:", result.error.message);
            } else if (result.paymentIntent.status === "succeeded") {
              //needs to be discussed
              console.log("Payment sucess");
            }
          })
          .catch((error) => {
            console.error("Error confirming payment:", error);
          });
      })
      .catch((error) => {
        console.error("Payment intent creation failed:", error);
      });

    // make the data an object ready for the hook
    await addCustomer({ name, email }).then((customer) => {
      //We should have a calculation here Price per day * (checkOutDate - checkInDate)
      const { totalPrice } = reservationData;
      let customerId = customer.id;

      addReservation({
        checkInDate: date[0],
        checkOutDate: date[1],
        customerId,
        roomId: room,
        totalPrice,
      }).then((reservations) => {
        // must return reservations id

        const description = `${name},${email},${room},${roomType},${price},${extractDayAndTime(
          new Date(date[0])
        )},${extractDayAndTime(new Date(date[1]))}`;
        const reservations_id = reservations.id;

        addInvoice({ reservations_id, description }).then((newInvoice1) => {
          // prepare data for Invoice Pop up and display
          // set entire invoice object to the newInvoice state to use it later.
          setNewInvoice(newInvoice1);
          setShowInvoice(true);
        });
      });
    });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "" || !value.includes("@") || !value.includes(".")) {
      setError((prevError) => ({
        ...prevError,
        email:
          email === ""
            ? "Please enter email"
            : "Please enter a valid email.  sample : example@abc.com",
      }));
    } else {
      setError((prevError) => ({ ...prevError, email: "" }));
    }
  };

  async function validateBooking(event) {
    event.preventDefault();

    let errorExists = false;
    setError("");

    if (name === "") {
      errorExists = true;
      setError((prevError) => {
        return {
          ...prevError,
          name: "Please enter name",
        };
      });
    }

    if (name.trim().length < 2) {
      errorExists = true;
      setError((prevError) => {
        return {
          ...prevError,
          name: "Name must be at least 2 characters",
        };
      });
    }

    if (email === "") {
      errorExists = true;
      setError((prevError) => {
        return {
          ...prevError,
          email: "Please enter email",
        };
      });
    }

    if (room === "" || room === "0") {
      errorExists = true;
      setError((prevError) => {
        return {
          ...prevError,
          room: "Please select a room",
        };
      });
      // return;
    }

    if (!stripe || !elements) {
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError((prevError) => {
        return {
          ...prevError,
          card: error.message,
        };
      });
      return;
    } else {
      //console.log("[PaymentMethod]", paymentMethod);
    }

    getCustomerByEmail(email)
      .then((data) => {
        if (data === 1) {
          errorExists = true;
        } else {
          if (!errorExists) {
            handleSubmit({
              name,
              email,
              room,
              card: paymentMethod.id,
              paymentMethod,
            });
          }
        }
      })
      .catch((error) => {
        console.error("getCustomerByEmail failed:", error);
      });
  }

  return (
    <div className="reservations-body">
      <article className="top-image">
        <h1 className="title">Reservations</h1>
      </article>
      <div className="form-background">
        <div className="form">
          <Card
            style={{
              width: "50rem",
              backgroundColor: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
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
                        onChange={handleEmailChange}
                        value={email}
                        isInvalid={!!error.email}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {error.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                    <div>
                      {showInvoice && (
                        <InvoicePopup
                          invoiceData={newInvoice}
                          setShowInvoice={setShowInvoice}
                        />
                      )}
                    </div>
                    <Form.Text className="text-muted">
                      Your information is secured with us, it will never be
                      shared.
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
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setRoom(e.target.value)}
                    value={room}
                    isInvalid={!!error.room}
                  >
                    <option value="0">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.type} - {room.price} Digital currencies
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {error.room}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Calendar</Accordion.Header>
                  <Accordion.Body>
                    <div className="calendar">
                      <h1 className="text-center">
                        Choose your arrival and departure date
                      </h1>
                      <div className="calendar-container">
                        <Calendar
                          onChange={handleCalendarChange}
                          value={date}
                          selectRange={true}
                          minDate={new Date()}
                        />
                      </div>
                      {date[0] && date[1] ? (
                        date[0] <= date[1] ? (
                          <p className="text-center">
                            <span className="bold">Start:</span>{" "}
                            {date[0].toDateString()} |{" "}
                            <span className="bold">End:</span>{" "}
                            {date[1].toDateString()}
                          </p>
                        ) : (
                          <p className="text-center error-message">
                            Please select a valid date range.
                          </p>
                        )
                      ) : (
                        <p className="text-center">
                          Please select your arrival and departure dates.
                        </p>
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <fieldset>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label as="legend" column xs="auto">
                    Activities
                  </Form.Label>
                  <Col xs="auto">
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch1"
                        label="Massage"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch2"
                        label="Facial"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch3"
                        label="Mars Mud bath"
                      />
                    </Form>
                  </Col>
                </Form.Group>
              </fieldset> */}

              <Form.Group className="mb-3">
                <Form.Label>Payment Information</Form.Label>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
                {/* <InputGroup hasValidation>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {error.card}
                  </Form.Control.Feedback>
                </InputGroup> */}
                {error.card && <div>{error.card}</div>}
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Col xs="auto">
                  <Button size="lg" type="submit" text="Book now!" />
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
