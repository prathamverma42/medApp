import React, { useState } from 'react';
import { Form, Col, Button, Row, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CommonDisease() {
  const [findmed, setFindmed] = useState([
    {
      symptoms: 'always wear mask',
      recommendations: 'wash hands',
      suggestions: 'bath daily',
      dos: Date.now(),
      contact: 9876543210,
    },
    {
      symptoms: 'always wear mask',
      recommendations: 'wash hands',
      suggestions: 'bath daily',
      dos: Date.now(),
      contact: 9876543210,
    },
    {
      symptoms: 'always wear mask',
      recommendations: 'wash hands',
      suggestions: 'bath daily',
      dos: Date.now(),
      contact: 9876543210,
    },
  ]);
  return (
    <Container>
      <Row>
        {' '}
        <Col sm={12}>
          <div style={{ backgroundColor: '#292B2C', color: 'white' }}>
            <center>
              <h1>
                Find Common Diseases&nbsp;
                <FontAwesomeIcon icon="search" />
              </h1>
            </center>
          </div>
        </Col>
      </Row>

      <Form className="container my-4">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" defaultValue="Eyes">
              <option>Eyes</option>
              <option>Ear</option>
              <option>Nose</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Diseases</Form.Label>
              <Form.Control as="select" defaultValue="Covid">
                <option>Fever</option>
                <option>Cough</option>
                <option>Covid</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <br />
        <center>
          <Button
            variant="outline-dark"
            className="pl-4 pr-4"
            type="submit"
            size="lg"
          >
            Fetch
          </Button>
        </center>
      </Form>
      <br />
      <Table striped bordered hover variant="light">
        <thead className="bg-dark text-light">
          <tr>
            <th>Symptoms</th>
            <th>Recommendations</th>
            <th>Suggestions</th>
            <th>DOS</th>
            <th>Contact</th>
          </tr>
        </thead>
      {/* </Table> */}
      <tbody>
              
      {findmed.map((med) => {
        return (
          
                <tr>
                  <td>{med.symptoms}</td>
                  <td>{med.recommendations}</td>
                  <td>{med.suggestions}</td>
                  <td>{med.dos}</td>
                  <td>{med.contact}</td>
                </tr>
          
          );
        })}
          </tbody>
        </Table>
    </Container>
  );
}

export default CommonDisease;
