import React from "react";
import { Card, Button } from "react-bootstrap";
import abc from "../assets/userdashbg1.png";
import "./CardDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router";

function CardDash(props) {
  const element = <FontAwesomeIcon icon="coffee" />;
  return (
    <>
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
                  history.replace(`/${props.sendto}`);
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
