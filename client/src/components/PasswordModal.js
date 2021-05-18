import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CardDash.css";
import validator from "validator";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";

function PasswordModal(props) {
  const [oldpwd, setOldpwd] = useState("");
  const [newpwd, setNewpwd] = useState("");
  const [confpwd, setConfpwd] = useState("");
  const checknewpwd = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      document.getElementById("newpass").style.border = "2px solid green";
      document.getElementById("confpwd").disabled = false;
    } else {
      document.getElementById("confpwd").disabled = true;
      document.getElementById("newpass").style.border = "2px solid red";
    }
  };
  const checkconfpwd = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      document.getElementById("confpwd").style.border = "2px solid green";
    } else {
      document.getElementById("confpwd").style.border = "2px solid red";
    }
  };


  const checkoldpwd = (val) => {
    axios
      .post(`http://localhost:5000/users/checkpassword/${props.userid}`, {
        password: val,
      })
      .then((res) => {
        //console.log(res.data);
        if (res.data.succes === true) {
          // document.getElementById("newpass").style.border="1px solid green";
          document.getElementById("newpass").disabled = false;
        } else {
          // document.getElementById("newpass").style.border="1px solid red";
          document.getElementById("newpass").disabled = true;
        }
      });
  };
  const updatePassword = () => {
    if (confpwd !== newpwd) {
      alert("Password does not match");
    } else {
      axios.put(`http://localhost:5000/users/${props.userid}`,{password: newpwd})
      .then(res=>{
        console.log(res.data);
        if(res.data.success===true){
          alert("Password updated");
          setOldpwd("");
          setNewpwd("");
          setConfpwd("");
          props.handleClose();
        }
      })
    }
  };
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        // style = {
        //   {
        //     Control:focus()
        //   }
        // }
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                style={{ outline: "none" }}
                value={oldpwd}
                onChange={(e) => {
                  setOldpwd(e.target.value);
                  checkoldpwd(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                id="newpass"
                disabled
                value={newpwd}
                onChange={(e) => {
                  setNewpwd(e.target.value);
                  checknewpwd(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                id="confpwd"
                disabled
                style={{ outline: "none" }}
                value={confpwd}
                onChange={(e) => {
                  setConfpwd(e.target.value);
                  checkconfpwd(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={updatePassword}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PasswordModal;
