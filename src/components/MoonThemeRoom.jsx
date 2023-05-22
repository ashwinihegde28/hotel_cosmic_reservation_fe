import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { useRooms } from "../hooks/roomsHook";

import "./styles/moon_theme_room-styles.css";

import Carousel from 'react-bootstrap/Carousel';
import Button from "../components/Button";

import Bedroom3 from "./images/bedroom3.jpg";
import BathroomSpace from "./images/bathroom_space.jpg";
import Lounge5 from "./images/lounge5.png";
import View3 from "./images/view3.jpg";
import View4 from "./images/view4.jpg";


export default function MoonThemeRoom() {

  const { getRoomById } = useRooms();

  const [rooms, setRooms] = useState({
    id: "",
    type: "",
    no_of_beds: "",
    no_of_bathrooms: "",
    description: "",
  })

  const loadPage = async () => {
    getRoomById('2')

      .then((results) => {

        setRooms({
          id: results.id,
          type: results.type,
          no_of_beds: results.no_of_beds,
          no_of_bathrooms: results.no_of_bathrooms,
          description: results.description,
          price: results.price,
        })

      })
  }
  useEffect(() => {
    loadPage()
  }, [])
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);
  

  return (

    <div className="page-container">
      <div className="container-half">

        {/* <div> Moon Theme Room !</div> */}
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Bedroom3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Master bedroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={BathroomSpace}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Main Bathroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Lounge5}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Entertaining Space</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={View3}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>View</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={View4}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Astonishing sights</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
      <div className="theme-description">
        <h2>{rooms.type}</h2>
        <p>{rooms.description}</p>
      </div>
      <div className="icons-container">
        <div className="icons-left">
          <h4 className="h4-icon">{rooms.price}</h4>
          <p className="digital-text">Digital currency</p>
        </div>
        <div className="icons-right">
          <h4 className="h4-icon">{rooms.no_of_beds}</h4>
          <ul className="bed">
            <svg className="bed-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
          </ul>
          <h4 className="h4-icon">{rooms.no_of_bathrooms}</h4>
          <ul className="bath">
            <svg className="bath-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" /></svg>
          </ul>
        </div>
      </div>
      <div className="button-container2">
        <Link to="/Reservations">
          <Button className="room-button" text="Book Room" />
        </Link>
      </div>

    </div>
  );

};
