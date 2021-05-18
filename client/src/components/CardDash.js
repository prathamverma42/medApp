import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import abc from "../assets/userdashbg1.png";
import "./CardDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router";
import PasswordModal from "./PasswordModal";
import LogoutModal from "./LogoutModal";

function CardDash(props) {

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordClose = () => setShowPassword(false);
  const handlePasswordShow = () => setShowPassword(true);

  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutClose = () => setShowLogout(false);
  const handleLogoutShow = () => setShowLogout(true);

  const element = <FontAwesomeIcon icon="coffee" />;
  return (
    <>
      <PasswordModal
        show={showPassword}
        handleShow={handlePasswordShow}
        handleClose={handlePasswordClose}
        userid={props.userid}
      />
      <LogoutModal
        show={showLogout}
        handleShow={handleLogoutShow}
        handleClose={handleLogoutClose}
        setUserid={props.setUserid}
      />
      <Card style={{ width: "16rem" }} className="mt-5 card-dash">
        <div style={{ fontSize: "6rem", color: "mediumseagreen" }}>
          <center>
            <FontAwesomeIcon icon={props.icon} />
          </center>{" "}
        </div>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Route
            render={({ history }) => (
              <Button
                variant="info"
                onClick={() => {
                  props.sendto !== "password-modal" && props.sendto !== "logout"
                    ? history.push(`/${props.sendto}`)
                    : props.sendto === "password-modal"
                    ? handlePasswordShow()
                    : handleLogoutShow();
                }}
              >
                Go Somewhere
              </Button>
            )}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default CardDash;
