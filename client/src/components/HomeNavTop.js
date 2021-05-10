import React, { useState } from "react";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";
import logo from "../assets/Logo2.png";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import ForgotModal from "./ForgotModal";

function HomeNavTop(props) {
  const [showlogin, setShowlogin] = useState(false);

  const handleCloseLogin = () => setShowlogin(false);
  const handleShowLogin = () => setShowlogin(true);

  const [showsignup, setShowSignup] = useState(false);

  const handleClosesignup = () => setShowSignup(false);
  const handleShowsignup = () => setShowSignup(true);

  const [showforgotpassword, setShowforgotpassword] = useState(false);

  const handleCloseforgotpassword = () => setShowforgotpassword(false);
  const handleShowforgotpassword = () => setShowforgotpassword(true);

  return (
    <div>
      <LoginModal
        show={showlogin}
        handleClose={handleCloseLogin}
        handleShowForgot={handleShowforgotpassword}
        handleShowSignup={handleShowsignup}
      />
      <SignupModal
        show={showsignup}
        handleClose={handleClosesignup}
        handleShow={handleShowLogin}
      />
      <ForgotModal
        show={showforgotpassword}
        handleClose={handleCloseforgotpassword}
      />

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{boxShadow:'0px 0px 10px black'}}>
        <Navbar.Brand href="#home">
          <div style={{ fontSize: "2rem", marginLeft: "-1rem" }}>
            <img src={logo} height="65rem" />
            CareAll.com
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Button
              variant="outline-success"
              className="m-2"
              onClick={handleShowsignup}
            >
              SignUp
            </Button>
            <Button
              variant="outline-primary"
              className="m-2"
              onClick={handleShowLogin}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavTop;
