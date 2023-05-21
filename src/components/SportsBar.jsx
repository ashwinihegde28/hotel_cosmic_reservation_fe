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

export default function SportBar() {
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
        <p>
          <h2>Sports Bars are everywhere in the hotel</h2>
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