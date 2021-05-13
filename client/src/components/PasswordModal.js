import React from "react";

import { Button, Modal, Form, Col, Container } from "react-bootstrap";

function PasswordModal(props) {
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Old Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" disabled />
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={props.handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PasswordModal;
