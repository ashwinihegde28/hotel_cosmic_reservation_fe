import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LobbyCards from './LobbyCards';

import "./styles/lobby_page-styles.css"

export default function LobbyPage() {
  return (
    <p className="lobby-body">
    <Container>
      <Row>
        <Col className="mb-4">
        <LobbyCards
          title="Rooms"
          text="View our selection of deluxe themed rooms"         
          img="https://drive.google.com/uc?export=view&id=1cJXy4MbmODDsKFskm2qCINEpBBZNU19b"
          buttonText="View Rooms"
          link="/roomdisplay"
        />
        </Col>
        <Col className="mb-4">
        <LobbyCards
          title="Restaurant: The secret lounge"
          text="Have a snack and a drink at any time of the day"        
          img="https://drive.google.com/uc?export=view&id=1k612ZBdfKE_NjCbdeAVq5DclVBTtKmzt"
          buttonText="View Restaurant"
          link="/restaurant"
        />
        </Col>
      </Row>
      <Row>
      <Col className="mb-4">
        <LobbyCards
          title="Services"
          text="View all that Hotel Cosmic has to offer"        
          img="https://drive.google.com/uc?export=view&id=1pdO9RJ55eMMIaLudo7kiGDwOZN_MqIGE"
          buttonText="View Services"
          link="/services"
        />
        </Col>
        <Col className="mb-4">
        <LobbyCards
          title="Galactic Spa"
          text="Relax and unwind"        
          img="https://drive.google.com/uc?export=view&id=1tk04Iah8Aig9tYBuJwum6LqMrE9loEwu"
          buttonText="View Spa"
          link="/spa"
        />
        </Col>
      </Row>
    </Container>
    </p>
  );
}
