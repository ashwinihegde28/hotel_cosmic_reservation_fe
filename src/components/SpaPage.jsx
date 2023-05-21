import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./styles/services-styles.css";

import Spa from "./images/spa.jpg";
import Spa2 from "./images/spa2.jpg";
import Lobby9 from "./images/lobby9.jpg";

import Carousel from 'react-bootstrap/Carousel';
import { useServices } from "../hooks/servicesHook"; 

export default function SpaPage() {

  
  const { getService } = useServices();

  const [services, setServices] = useState({
    name: "",
    description: "",
  })
  const id = '1';

  const loadPage = async () => {
    getService(id)

      .then((servicesDetails) => {
        console.log(`servicesDetails`, servicesDetails)
        
        setServices({
          name: servicesDetails.name,
          description: servicesDetails.description,
        })
        

      })
  }
  useEffect(() => {
    loadPage()
    }, [])

  return (

    <div className="page-container">
      <div className="container-half">
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Spa}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Relaxtion space</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Spa2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Massages</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Lobby9}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Entertaining Space</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>View</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2014/02/05/19/58/blue-259458_1280.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Astonishing sights with a massage</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
      
      <div className="container-half-lower">
          <h2>{services.name}</h2>
        <p className="description">{services.description}</p>
      </div>
      <div className="button-container">
        <Link to="/Reservations">
          <button className="room-button">Book Room</button>
        </Link>
      </div>
      
    </div>
  );
};