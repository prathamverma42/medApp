import React from "react";
import { Card, Button } from "react-bootstrap";
import abc from "../assets/userdashbg1.png";
import "./CardDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardDash(props) {
  const element = <FontAwesomeIcon icon="coffee" />;
  return (
    <>
      <Card style={{ width: "16rem" }} className="mt-5 card-dash">
        {/* <Card.Img variant="top" style={{alignItems: "center"}} src={element} /> */}
        <div style={{fontSize:"6rem", color: "mediumseagreen"}}>
          <center>
            <FontAwesomeIcon icon={props.icon} />
          </center>{" "}
        </div>
        {/* <img><FontAwesomeIcon icon="Coffee" /></img> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Card.Text>Some quick example</Card.Text> */}
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <FontAwesomeIcon icon="coffee" />  */}
    </>
  );
}

export default CardDash;
