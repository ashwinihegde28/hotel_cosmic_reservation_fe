import React from "react";

import { Link } from "react-router-dom";

import "./styles/moon_theme_room-styles.css";

import Carousel from 'react-bootstrap/Carousel';
import Button from "../components/Button";

export default function VenusThemeRoom() {

  return (

    <div className="page-container">
      <div className="container-half">
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
      <div className="theme-description">
        <h2>Description of Venus Theme Rooms</h2>
        <p>
          Theme Lorem ipsum dolor sit amet. Ex delectus incidunt sed dolor numquam qui voluptas voluptatem est blanditiis repudiandae eum saepe accusamus et tempora nobis.
          33 tempore accusantium ut rerum earum qui dolorum quibusdam sit magni voluptates qui ducimus deleniti vel cumque magnam ad quas rerum.
          Qui inventore inventore sit reprehenderit veniam et galisum iure qui repellendus voluptatibus a adipisci consequatur qui incidunt delectus.
          Eum omnis aliquam et omnis delectus eum reprehenderit voluptas et eaque nulla ut repellendus quisquam. Aut saepe consectetur non atque maiores et aliquid voluptate.
          Ut porro recusandae At neque voluptates aut quia dolorem non consectetur excepturi et autem nulla.
          Eos quisquam minima ea dolores vitae et necessitatibus corporis 33 earum omnis! Ut doloremque quos et dolorem accusantium non doloremque dolor sit sint ipsum.
          At quos architecto rem expedita harum in minima quisquam qui dolores facilis. Et aliquam dicta id internos sint est sunt ipsam ad corporis accusamus ut facere iusto.</p>

        <div className="button-container">
          <Link to="/Reservations">
            <Button className="room-button" text="Book Room" />
          </Link>
        </div>
        <div className="icons-container">
          <h4 className="h4-icon">3</h4>
          <ul className="bed">
            <svg className="bed-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
          </ul>
          <h4 className="h4-icon">2</h4>
          <ul className="bath">
            <svg className="bath-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" /></svg>
          </ul>
        </div>
      </div>
    </div>
  );
};