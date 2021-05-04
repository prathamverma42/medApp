import React from "react";
import { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompleteProfile() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "orange" }}>
              <center>
                <h2>
                  Personal Information &nbsp;
                  <FontAwesomeIcon icon="user-plus" />
                </h2>
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
            <Button variant="info" size="sm" className="pl-5 pr-5 pb-2 mt-4">
              &emsp;Fetch&emsp;
            </Button>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" defaultValue="Male">
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Mobile/Contact</Form.Label>
            <Form.Control placeholder="Enter your contact details" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Your City" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Punjab">
              <option>Punjab</option>
              <option>Delhi</option>
              <option>Haryana</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Pin</Form.Label>
            <Form.Control placeholder="Your Pin" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {" "}
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Aadhar Card Number</Form.Label>
            <Form.Control placeholder="Enter aadhar Card (12-digits)" />{" "}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {" "}
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Enter you email id" />{" "}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <br />
            <center>
              <input type="file" onChange={onSelectFile} />
              <div className="my-3">
                {" "}
                {selectedFile && (
                  <img
                    src={preview}
                    style={{ width: "19rem", border: "1px dotted black" }}
                  />
                )}
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px solid red",
                }}
                ondrop={(e) => console.log(e)}
                ondragover={(e) => console.log(e)}
              ></div>
            </center>
          </Form.Group>
        </Form.Row>
        <center>
          {" "}
          <Button variant="success" className="pl-4 pr-4" type="submit">
            Update
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default CompleteProfile;
