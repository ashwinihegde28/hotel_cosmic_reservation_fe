import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Button from "../components/Button";
import { Link } from "react-router-dom";



export default function AboutusCards(props) {
  const { img, title, text, buttonText, buttonText2, link, link2 } = props;

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
              <Link to={link2}>
              <Button variant="secondary" text={buttonText2} />
              </Link>
            </Card.Body>
          </Card>
    </Container>
  );
}