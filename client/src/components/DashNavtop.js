import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import logo from "../assets/Logo2.png";

function DashNavtop(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(props.userid);
    axios
      .post(`http://localhost:5000/users/getuser/${props.userid}`)
      .then((res) => {
        console.log(res.data)
        setName(res.data.data.uid);
      });
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
            <Nav.Link href="#deets">
              <h3>Welcome {name}</h3>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default DashNavtop;
