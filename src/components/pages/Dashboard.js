import React from "react";
import "../dashboard.css";
import CardDash from "../CardDash";
import { Col, Container, Row } from "react-bootstrap";
import "../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navtop from '../NavTop';
<FontAwesomeIcon icon="faCoffee" />;

function Dashboard() {
  return (
    <>
    <Navtop/>
    <div className="dash">
      <center>
      <Container className="pt-5 mt-5">
        <Row>
          <Col sm={3}>
            <CardDash title="Complete Profile" icon="user-md" />
          </Col>

          <Col sm={3}>
            <CardDash title="Unused Medicine" icon="recycle" />
          </Col>
          <Col sm={3}>
            <CardDash title="Medicine Manager" icon="medkit"  />
          </Col>
          <Col sm={3}>
            <CardDash title="Buy Medicine" icon="shopping-cart"  />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <CardDash title="Disease Info" icon="hospital" />
          </Col>

          <Col sm={3}>
            <CardDash title="Common Disease" icon="search"  />
          </Col>
          <Col sm={3}>
            <CardDash title="Change Password" icon="key" />
          </Col>
          <Col sm={3}>
            <CardDash title="Logout Session" icon="sign-out-alt" />
          </Col>
        </Row>
      </Container>
      </center>
      <div style={{ height: "50px" }}></div>
    </div>
    </>
  );
}

export default Dashboard;
