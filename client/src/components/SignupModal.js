import React, { useState } from "react";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";
import { Route } from "react-router-dom";

import axios from "axios";
function SignupModal(props) {
  const exchangeModal = () => {
    props.handleClose();
    props.handleShow();
  };
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [checksignup, setChecksignup] = useState(false);
  const createUserAccount = () => {
    const body = {
      uid: uid,
      password: password,
      mobile: contact,
    };
    console.log(body);
    axios
      .post("http://localhost:5000/users", body)
    .then((res) => {console.log(res.data)
    if(res.data.success===true)
    {
      console.log(res.data.data._id);
      props.setUserid(res.data.data._id);
      setChecksignup(true);
    // props.handleClose();

    }
    });
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Uid"
                  value={uid}
                  onChange={(e) => {
                    setUid(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="number"
                  placeholder="Mobile"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
          </Container>
          <Button onClick={exchangeModal}>Already have an account</Button>
          <Modal.Footer>
          <Route
            render={({ history }) => (
              <Button
                onClick={() => {
                  createUserAccount()
                  checksignup === true ? history.push(`/signup-complete-profile`) : <p></p>;
                }}
              >
                Login
              </Button>
            )}
          />
            
            
            {/* <Button variant="primary" onClick={createUserAccount}>
              Signup
            </Button> */}
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignupModal;
