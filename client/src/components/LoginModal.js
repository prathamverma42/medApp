import axios from "axios";
import React, { useState } from "react";
import { Route } from "react-router-dom";

import { Button, Modal, Form, Col, Container } from "react-bootstrap";
function LoginModal(props) {
  const exchangeModal_with_ForgotModal = () => {
    props.handleClose();
    props.handleShowForgot();
  };
  const exchangeModal_with_SignupModal = () => {
    props.handleClose();
    props.handleShowSignup();
  };
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [checklogin, setChecklogin] = useState(false);
  const checkUserLogin = () => {
    const body = {
      uid,
      password,
    };
    console.log(body);
    if(uid !=="" && password !==""){
      axios.post("http://localhost:5000/users/check", body).then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          // alert("Valid");
          setPassword("");
          props.setUserid(res.data.data[0]._id);
          setUid("");
          // props.handleClose();
          setChecklogin(true);
        } else {
          alert("Not a valid user");
        }
      });
    }
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Modal</Modal.Title>
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
          </Container>

          <Button onClick={exchangeModal_with_ForgotModal}>
            Forgot Password
          </Button>
          <Button onClick={exchangeModal_with_SignupModal}>
            Create a Account
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Route
            render={({ history }) => (
              <Button
                onClick={() => {
                  checkUserLogin();
                  checklogin === true ? history.push(`/Dashboard`) : <p></p>;
                }}
              >
                Login
              </Button>
            )}
          />
          {/* <Button variant="primary" onClick={checkUserLogin}>
            Login
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
