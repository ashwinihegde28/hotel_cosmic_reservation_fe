import React, { useState, useEffect } from "react";

import "./styles/services-styles.css";

import Spa from "./images/spa.jpg";
import Spa2 from "./images/spa2.jpg";
import Lobby9 from "./images/lobby9.jpg";
import View4 from "./images/view4.jpg";
import View3 from "./images/view3.jpg";

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
              src={View3}
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
              <h3>Astonishing sights with a massage</h3>
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