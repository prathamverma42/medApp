import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import med from "../../assets/med.jpg";
function UnusedMedicine() {
  const [typeSelect, setTypeSelect] = useState("Donate");
  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <div style={{ backgroundColor: "#ff4c4c" }}>
          <center>
            <h1>
              UnusedMedicine&nbsp;
              <FontAwesomeIcon icon="medkit" />
            </h1>
          </center>
        </div>
      </Container>
      <Form className="container my-4" onSubmit={onsubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>User id</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="mt-3 " as={Col} controlId="formGridCity">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control placeholder="Your Name" />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <img src={med} style={{ height: "80%" }} />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mb-3">
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Comapny</Form.Label>
            <Form.Control placeholder="Enter Company" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Exp Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Quantity</Form.Label>
            <Form.Control placeholder="Enter Quantity" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="Strips">
              <option>Strips</option>
              <option>Cream</option>
              <option>Tablets</option>
              <option>Injections</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Options</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setTypeSelect(e.target.value)}
            >
              <option value="Donate">Donate</option>
              <option value="Sell">Sell</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        {typeSelect !== "Donate" ? (
          <div>
            <Form.Row>
              {" "}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="Mrp" />{" "}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Offered Price</Form.Label>
                <Form.Control placeholder="Offered Price" />{" "}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="NetBanking"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="cash on Delivery"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Paytm"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Any"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
            </Form.Row>
          </div>
        ) : (
          <div></div>
        )}

        <br />
        <center>
          {" "}
          <Button variant="success" className="pl-4 pr-4" type="submit">
            Post Advertisement
          </Button>
        </center>
      </Form>
    </>
  );
}

export default UnusedMedicine;
