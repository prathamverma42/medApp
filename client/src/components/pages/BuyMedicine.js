import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function BuyMedicine() {
  const [availablemed, setavailablemed] = useState([]);

  const [distinctCity, setDistinctCity] = useState([]);
  const [distinctMedicine, setDistinctMedicine] = useState([]);
  const [selectedcity, setSelectedcity] = useState("");
  const [selectedmedname, setSelectedmedname] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/medicine/getDistinctCity_BuyMedicine")
      .then((res) => {
        console.log(res.data);
        setDistinctCity(res.data.data);
      });
  }, []);

  const getmedicines = (city) => {
    axios
      .post("http://localhost:5000/medicine/getDistinctMedicine_BuyMedicine", {
        city: city,
      })
      .then((res) => {
        console.log(res.data.data);
        setDistinctMedicine(res.data.data);
      });
  };
  const fetchmedicines = (e) => {
    e.preventDefault();
    const body = { city: selectedcity, medname: selectedmedname };
    console.log(body);
    axios
      .post(
        "http://localhost:5000/medicine/getMedicinesByCity_BuyMedicine",
        body
      )
      .then((res) => {
        console.log(res.data.data);
        setDistinctMedicine([]);
        setavailablemed(res.data.data);
      });
  };

  return (
    <>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#00cba9" }}>
              <center>
                <h1>
                  Find Medicines &nbsp;
                  <FontAwesomeIcon icon="shopping-cart" />
                </h1>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <Form className="container my-4" onSubmit={fetchmedicines}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Select City</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                if (e.target.value !== "") {
                  getmedicines(e.target.value);
                  setSelectedcity(e.target.value);
                } else {
                  console.log("hello");
                }
              }}
            >
              <option value="">choose...</option>
              {distinctCity.map((user) => {
                return <option value={user}>{user}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col}>
              <Form.Label>Select Medicine</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  if (e.target.value !== "") {
                    setSelectedmedname(e.target.value);
                  } else {
                    console.log("hello");
                  }
                }}
              >
                <option value="">choose...</option>

                {distinctMedicine.map((user) => {
                  console.log(user);
                  return <option>{user}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <br />
        <center>
          <Button variant="info" className="pl-4 pr-4" type="submit">
            Fetch
          </Button>
        </center>
      </Form>
      <br />
      <br />

      <div className="mt-4">
        <Container>
          <Row>
            {availablemed.map((med) => {
              return (
                <>
                  <Card className="col-3 m-4">
                    <Card.Header>Medname :- {med.medname}</Card.Header>
                    <Card.Body>
                      <p>{med.expdate}</p>
                      <p>{med.qty}</p>
                      <p>{med.company}</p>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BuyMedicine;
