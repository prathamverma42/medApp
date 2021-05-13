import React, { useState } from "react";
import { Form, Col, Button, Row, Container, lg, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BuyMedicine() {
  const [availablemed, setavailablemed] = useState([
    {
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },{
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate:  new Date().toDateString(),
      available_quantity: 10,
    },
  ]);
  return (
    <>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#00cba9" }}>
              <center>
                <h1>
                  Find Medicines &nbsp;
                  <FontAwesomeIcon icon="shopping-cart" />
                </h1>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <Form className="container my-4">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Select City</Form.Label>
            <Form.Control as="select" defaultValue="Male">
              <option>Eyes</option>
              <option>Ear</option>
              <option>Nose</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Select Medicine</Form.Label>
              <Form.Control as="select" defaultValue="Male">
                <option>Eyes</option>
                <option>Ear</option>
                <option>Nose</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <br />
        <center>
          <Button variant="info" className="pl-4 pr-4" type="submit">
            Fetch
          </Button>
        </center>
      </Form>
      <div className="mt-4">
          <Container>
        <Row>
        {availablemed.map((med) => {
          return (
            <>
                <Card className="col-3 m-4">
                  <Card.Header>Medname :- {med.medname}</Card.Header>
                  <Card.Body>
                    <p>{med.expdate}</p>
                    <br />

                    <p>{med.available_quantity}</p>
                    <br />

                    <p>{med.company}</p>
                  </Card.Body>
                </Card>
            </>
          );
        })}
        </Row>
            </Container>
      </div>
    </>
  );
}

export default BuyMedicine;
