import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./styles/services-styles.css";

import Restaurant1 from "./images/restaurant.jpg";
import Restaurant2 from "./images/restaurant2.jpg";
import Restaurant3 from "./images/restaurant3.jpg";
import Restaurant4 from "./images/restaurant4.jpg";

import Carousel from 'react-bootstrap/Carousel';
import { useServices } from "../hooks/servicesHook"; 

export default function Restaurant() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  const { getService } = useServices();

  const [services, setServices] = useState({
    name: "",
    description: "",
  })
  const id = '2';

  const loadPage = async () => {
    getService(id)

      .then((servicesDetails) => {
        
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
              src={Restaurant1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Restaurant</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Restaurant2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Restaurant</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Restaurant3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>24H Restaurant</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Restaurant4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>24H Restaurant</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-half-lower">
          <h2 className="services-title">{services.name}</h2>
        <p className="description">{services.description}</p>
      </div>
    </div>
  );
};