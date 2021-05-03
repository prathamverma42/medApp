import React from "react";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";
function SignupModal(props) {
  const exchangeModal = () => {
    props.handleClose();
    props.handleShow();
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
                <Form.Control type="text" placeholder="Enter Uid" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Mobile" />
              </Form.Group>
            </Form.Row>
          </Container>
          <Button onClick={exchangeModal}>Already have an account</Button>
          <Modal.Footer>
            <Button variant="primary" onClick={props.handleClose}>
              Signup
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignupModal;
