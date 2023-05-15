import React from "react";

import { Link } from "react-router-dom";

import "./styles/moon_theme_room-styles.css"

import Carousel from 'react-bootstrap/Carousel';

export default function VenusThemeRoom() {

  return (
    
    <div className="page-container">
      <div className="container-half">
        <div> Venus Theme Room !</div>
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?id=18muVEVPKIuvVAOwUQieu2Pm9NqJ16HqY"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Master bedroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1MPZxIwO9XNAn-nZal1oB-Aolbm3vzOeB"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Main Bathroom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1KSOwl5t7MUyc-jxmeEeRxcOuJIhiBvzR"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Entertaining Space</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>View</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2023/01/10/10/47/space-7709489_1280.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Astonishing sights</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
      <div className="container-half">
        <p> 
          <h2>Description of Venus Theme Rooms</h2> 
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
  )
};