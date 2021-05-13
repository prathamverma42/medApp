import React,{useState} from "react";
import { Form, Col, Button, Row, Container, lg, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MedicineManager() {
  const [findmed, setFindmed] = useState([
  ]);
  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#0099FF" }}>
              <center>
                <h2>Medicine Manager page</h2>
              </center>
            </div>
          </Col>
        </Row>
        <Form.Row>
          <Form.Group as={Col} className="col-6" controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled />
          </Form.Group>
          <Form.Group as={Col} className="col-2"></Form.Group>
          <Form.Group as={Col} className="col-3" controlId="formGridPassword">
            <Button variant="outline-dark" className="mt-4" size="block">
              Fetch
            </Button>
          </Form.Group>
          <Form.Group as={Col} className="col-1"></Form.Group>
        </Form.Row>
        <Table striped bordered hover variant="light">
        <thead className="bg-dark text-light">
          <tr>
            {/* <th>Rid</th> */}
            <th>Medname</th>
            <th>Company</th>
            <th>City</th>
            <th>Unshare</th>
            <th>Update</th>
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
    </div>
  );
}

export default MedicineManager;
