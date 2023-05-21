import React, { useState, useEffect } from "react";

import "./styles/services-styles.css";

import Bar1 from "./images/bar.png";
import Bar2 from "./images/bar2.png";
import Bar3 from "./images/bar3.png";
import Bar4 from "./images/bar4.png";
import View4 from "./images/view4.jpg";

import Carousel from 'react-bootstrap/Carousel';
import { useServices } from "../hooks/servicesHook"; 

export default function Bar() {

  const { getService } = useServices();

  const [services, setServices] = useState({
    name: "",
    description: "",
  })
  const id = '3';

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
              src={Bar1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Cocktail Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Bar2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Spirits Lounge</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Bar3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Cocktail Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Bar4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>24H Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={View4}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Astonishing sights with a drink</h3>
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