import React from "react";
import "../dashboard.css";
import CardDash from "../CardDash";
import { Col, Container, Row } from "react-bootstrap";
import DashNavtop from "../DashNavtop";
function Dashboard(props) {
  return (
    <>
      <DashNavtop userid={props.userid} />
      <div className="dash">
        <center>
          <Container className="pt-5 mt-5">
            <Row>
              <Col sm={3}>
                <CardDash
                  title="Complete Profile"
                  icon="user-md"
                  sendto="complete-profile"
                />
              </Col>

              <Col sm={3}>
                <CardDash
                  title="Unused Medicine"
                  icon="recycle"
                  sendto="unused-medicine"
                />
              </Col>
              <Col sm={3}>
                <CardDash
                  title="Medicine Manager"
                  icon="medkit"
                  sendto="medicine-manager"
                />
              </Col>
              <Col sm={3}>
                <CardDash
                  title="Buy Medicine"
                  icon="shopping-cart"
                  sendto="buy-medicine"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <CardDash
                  title="Disease Info"
                  icon="hospital"
                  sendto="disease-info"
                />
              </Col>

              <Col sm={3}>
                <CardDash
                  title="Common Disease"
                  icon="search"
                  sendto="common-disease"
                />
              </Col>
              <Col sm={3}>
                <CardDash
                  title="Change Password"
                  icon="key"
                  sendto="password-modal"
                  userid={props.userid}
                />
              </Col>
              <Col sm={3}>
                <CardDash
                  title="Logout Session"
                  icon="sign-out-alt"
                  sendto="logout"
                  setUserid={props.setUserid}
                />
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
