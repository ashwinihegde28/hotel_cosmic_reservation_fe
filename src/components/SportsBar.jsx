import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./styles/services-styles.css";

import Sportsbar1 from "./images/sportsbar.jpg";
import Sportsbar2 from "./images/sportsbar2.jpg";
import Sportsbar3 from "./images/sportsbar3.jpg";
import Sportsbar4 from "./images/sportsbar4.jpg";
import Sportsbar5 from "./images/sportsbar5.jpg";
import Sportsbar6 from "./images/sportsbar6.jpg";

import Carousel from 'react-bootstrap/Carousel';
import { useServices } from "../hooks/servicesHook";

export default function SportBar() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);


  const { getService } = useServices();

  const [services, setServices] = useState({
    name: "",
    description: "",
  })
  const id = '5';

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
              src={Sportsbar1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sports Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Sportsbar2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Sports Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Sportsbar3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>24H Sports Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={Sportsbar4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>24H Sports Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Sportsbar5}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Sports Bar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Sportsbar6}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Sports Bar</h3>
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