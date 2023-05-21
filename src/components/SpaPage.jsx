import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./styles/services-styles.css";

import Spa from "./images/spa.jpg";
import Spa2 from "./images/spa2.jpg";
import Lobby9 from "./images/lobby9.jpg";

import Carousel from 'react-bootstrap/Carousel';

export default function SpaPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

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
        <p>
          <h2>Spa services all around the hotel</h2>
          Theme Lorem ipsum dolor sit amet. Ex delectus incidunt sed dolor numquam qui voluptas voluptatem est blanditiis repudiandae eum saepe accusamus et tempora nobis.
          33 tempore accusantium ut rerum earum qui dolorum quibusdam sit magni voluptates qui ducimus deleniti vel cumque magnam ad quas rerum.
          Qui inventore inventore sit reprehenderit veniam et galisum iure qui repellendus voluptatibus a adipisci consequatur qui incidunt delectus.
          Eum omnis aliquam et omnis delectus eum reprehenderit voluptas et eaque nulla ut repellendus quisquam. Aut saepe consectetur non atque maiores et aliquid voluptate.
          Ut porro recusandae At neque voluptates aut quia dolorem non consectetur excepturi et autem nulla.
          Eos quisquam minima ea dolores vitae et necessitatibus corporis 33 earum omnis! Ut doloremque quos et dolorem accusantium non doloremque dolor sit sint ipsum.
          At quos architecto rem expedita harum in minima quisquam qui dolores facilis. Et aliquam dicta id internos sint est sunt ipsam ad corporis accusamus ut facere iusto.</p>
      </div>
      <div className="button-container">
        <Link to="/Reservations">
          <button className="room-button">Book Room</button>
        </Link>
      </div>
      
    </div>
  );
};