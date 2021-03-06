import React from "react";
import { Route } from "react-router-dom";

import { Button, Modal, Form, Col, Container } from "react-bootstrap";
function LogoutModal(props) {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.handleClose}>
            Close
          </Button>
          <Route
            render={({ history }) => (
              <Button
                variant="outline-danger"
                onClick={() => {
                  props.handleClose();
                  history.push("/");
                  props.setUserid("");
                }}
              >
                Logout
              </Button>
            )}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LogoutModal;
