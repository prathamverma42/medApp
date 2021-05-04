import React from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function DiseaseInfo() {
  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#a2d9ff" }}>
              <center>
                <h1>
                  <FontAwesomeIcon icon="share" />
                  &nbsp; Share Disease Info &nbsp;
                  <FontAwesomeIcon icon="share" />
                </h1>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <Form className="container my-4">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" defaultValue="Male">
                <option>Eyes</option>
                <option>Ear</option>
                <option>Nose</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Disease-Name</Form.Label>
            <Form.Control placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState"></Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Available for calls</Form.Label>
            <Row>
              <Col sm={6}>
                <Form.Check
                  type="radio"
                  label="NetBanking"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col sm={6}>
                <Form.Check
                  type="radio"
                  label="NetBanking"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
            </Row>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <Form.Control type="file" placeholder="Enter you email id" />{" "}
            <Form.Group as={Col} controlId="formGridState"></Form.Group>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <Form.Control type="file" placeholder="Enter you email id" />{" "}
            <Form.Group as={Col} controlId="formGridState"></Form.Group>
          </Form.Group>
        </Form.Row>
        <br />
        <center>
          {" "}
          <Button variant="info" className="pl-4 pr-4" type="submit">
            Share Information
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default DiseaseInfo;
