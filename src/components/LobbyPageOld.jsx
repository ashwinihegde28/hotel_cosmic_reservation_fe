import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./styles/navbar-styles.css";


export default function LobbyPage() {

  return (

    <p className="lobby-body">
      <div> Lobby page !</div>
      <div className="cards-container">
        {/* <div className="cards-row"> */}
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1cJXy4MbmODDsKFskm2qCINEpBBZNU19b" />
            <Card.Body>
              <Card.Title>Rooms</Card.Title>
              <Card.Text>
                View our selection of deluxe themed rooms
              </Card.Text>
              <Button variant="primary">View Rooms</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="https://www.snezny.co.uk/wp-content/uploads/2021/02/W-Kuala-Lumpur-Photos-from-Marriott.com-8.jpg" />
            <Card.Body>
              <Card.Title>Restaurant: The secret lounge </Card.Title>
              <Card.Text>
                Have a snack and a drink at any time of the day
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        {/* </div> */}
      
      {/* <div className="cards-row"> */}
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1pdO9RJ55eMMIaLudo7kiGDwOZN_MqIGE" />
          <Card.Body>
            <Card.Title>Amenities</Card.Title>
            <Card.Text>
              Become an explorer and walk on the surface
            </Card.Text>
            <Button variant="primary">More information</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1tk04Iah8Aig9tYBuJwum6LqMrE9loEwu" />
          <Card.Body>
            <Card.Title>Galactic Spa</Card.Title>
            <Card.Text>
              Relax and unwind with one of our many spa services
            </Card.Text>
            <Button variant="primary">More information</Button>
          </Card.Body>
        </Card>
      {/* </div> */}
      </div>
    </p>

  );
};