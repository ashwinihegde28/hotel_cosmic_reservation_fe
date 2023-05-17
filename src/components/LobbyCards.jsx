import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function LobbyCards(props) {
  const { img, title, text, buttonText, link } = props;

  return (
    <Container className="card-item" >
      <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={img} className="card-img"/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
              <Link to={link}>
              <Button variant="primary" text={buttonText} />
              </Link>
            </Card.Body>
          </Card>
    </Container>
  );
}

