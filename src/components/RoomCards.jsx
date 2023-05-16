import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function RoomCards(props) {
  const { img, title, text, link } = props;

  return (

    <Container >
      <Card style={{ width: '57rem', textAlign: 'center' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
              <Link to={link}>
              <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
          
    </Container>
  );
}

