import React from "react";
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
                <Form.Control type="text" placeholder="Enter Uid" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="password" placeholder="Password" />
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
          <Button variant="primary" onClick={props.handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
