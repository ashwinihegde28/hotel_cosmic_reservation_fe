import React, { useState, useEffect } from "react";

import "./styles/services-styles.css";

import Casino1 from "./images/casino.png";
import Casino2 from "./images/casino2.png";
import Casino3 from "./images/casino3.jpg";
import Casino4 from "./images/casino4.jpg";

import Carousel from 'react-bootstrap/Carousel';
import { useServices } from "../hooks/servicesHook";

export default function Casino() {

  const { getService } = useServices();

  const [services, setServices] = useState({
    name: "",
    description: "",
  })
  const id = '4';

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
              src={Casino1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Blackjack Tables</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Casino2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Blackjack Tables</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Casino3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Poker Tables</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Casino4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Roulette</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2014/02/05/19/58/blue-259458_1280.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Astonishing sights</h3>
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