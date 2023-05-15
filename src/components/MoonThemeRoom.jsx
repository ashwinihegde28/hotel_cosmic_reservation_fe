import React from "react";

import { Link } from "react-router-dom";

import "./styles/moon_theme_room-styles.css";

import Carousel from 'react-bootstrap/Carousel';

export default function MoonThemeRoom() {

  return (

    <div className="page-container">
      <div className="container-half">
        <div> Moon Theme Room !</div>
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1M8w1IhP7BbDG2Pfy1rlh8G7YN_17l87P"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Master bedroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1WPUKEN_JLw0axvhDIKy7muPmHEkz6Exj"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Main Bathroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1aiTj8SztZ1HQszg7IGYasNnNMS_CYPG8"
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
              <h3>Astonishing sights</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
      <div className="container-half-lower">
        <p>
          <h2>Description of Moon Theme Rooms</h2>
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