import React from "react";

import { Link } from "react-router-dom";

import "./styles/services-styles.css";


import Restaurant1 from "./images/restaurant.jpg";
import Restaurant2 from "./images/restaurant2.jpg";
import Restaurant3 from "./images/restaurant3.jpg";
import Restaurant4 from "./images/restaurant4.jpg";

import Carousel from 'react-bootstrap/Carousel';

export default function Restaurant() {

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
        <p>
          <h2>Restaurants</h2>
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