import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import RoomCards from './RoomCards';

import "./styles/roomdisplay-styles.css";

export default function RoomDisplay2() {
  return (
    <p className="room-body">
      <Container>
        <Col>
          <Row className="mb-4">

            <RoomCards className="card-item"
              title="Welcome to the Moon"
              img="https://drive.google.com/uc?export=view&id=1M8w1IhP7BbDG2Pfy1rlh8G7YN_17l87P"
              link="/moonthemeroom"
            />
          </Row>
          <Row className="mb-4">
            <RoomCards className="card-item"
              title="Welcome to Venus"
              img="https://drive.google.com/uc?id=18muVEVPKIuvVAOwUQieu2Pm9NqJ16HqY"
              link="/venusthemeroom"
            />
          </Row>
          <Row className="mb-4">
            <RoomCards className="card-item"
              title="Welcome to Jupiter"
              img="https://drive.google.com/uc?id=1lObWdFs0obLj0v_dLXbX2yJ7n9cQu0IH"
              link="/jupiterthemeroom"
            />
          </Row>
          <Row>
            <div className="button-container justify-content-end">
              <Link to="/reservations">
                <button className="room-button">Book Room</button>
              </Link>
            </div>
          </Row>
        </Col>
      </Container>
    </p>
  );
}