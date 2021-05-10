import React from 'react';
import HomeNavTop from '../HomeNavTop';
import { Route } from 'react-router-dom';
import {
  Button,
  Carousel,
  Card,
  CardColumns,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import med1 from '../../assets/med1.jpg';
import med2 from '../../assets/med2.jpg';
import med3 from '../../assets/med3.png';
import card1 from '../../assets/card1.svg';
import card2 from '../../assets/card2.svg';
import card3 from '../../assets/card3.svg';
import pic1 from '../../assets/pratham.jpg';
import pic2 from '../../assets/jatin.jpg';
function Home() {
  return (
    <>
      <HomeNavTop />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={med1}
            alt="First slide"
            style={{ height: '40rem' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={med2}
            alt="Second slide"
            style={{ height: '40rem' }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={med3}
            alt="Third slide"
            style={{ height: '40rem' }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <center>
        <h1
          className="mt-3"
          style={{
            fontFamily: 'Alegreya SC',
            fontWeight: 'bold',
            fontSize: '3rem',
            textShadow: '2px 2px 2px',
          }}
        >
          {' '}
          OUR SERVICES
        </h1>
      </center>
      <br />
      <CardColumns>
        <Container>
          <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </CardColumns>
      {/* <br/> */}
      <center>
        <h1
          className="mt-3"
          style={{
            fontFamily: 'Alegreya SC',
            fontWeight: 'bold',
            fontSize: '3rem',
            textShadow: '2px 2px 2px',
          }}
        >
          {' '}
          DEVELOPERS
        </h1>
      </center>
      <br />
      <br/>
      <Container>
        <Row className='ml-5'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pic1}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pic2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <center>
        <h1
          className="mt-3"
          style={{
            fontFamily: 'Alegreya SC',
            fontWeight: 'bold',
            fontSize: '3rem',
            textShadow: '2px 2px 2px',
          }}
        >
          {' '}
          REACH - US
        </h1>
      </center>
      
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.6046872047627!2d75.83634225081823!3d30.248347681719252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910511a5e718f7f%3A0x845af2cdf66215b6!2sSanju%20Studio!5e0!3m2!1sen!2sin!4v1606913175629!5m2!1sen!2sin" style={{height="500px;" width="100%" frameborder="0" style="border:0;  " allowfullscreen="" aria-hidden="false" tabindex="0" id="map"}}>
        </iframe> */}
      <br />
      <div style={{ height: '50px' }}></div>
      <Route
        render={({ history }) => (
          <Button
            variant="info"
            onClick={() => {
              history.replace(`/dashboard`);
            }}
          >
            Go Somewhere
          </Button>
        )}
      />
    </>
  );
}

export default Home;
