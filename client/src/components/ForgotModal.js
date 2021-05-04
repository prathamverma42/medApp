import React from "react";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";
function ForgotModal(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Enter Uid" />
              </Form.Group>
              <Form.Group>
                <Button variant="outline-primary">Send OTP</Button>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Enter OTP" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="New Password" disabled />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Old Password" disabled />
              </Form.Group>
            </Form.Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ForgotModal;
