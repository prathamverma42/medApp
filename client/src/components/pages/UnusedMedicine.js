import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import med from "../../assets/med.jpg";
import axios from "axios";
function UnusedMedicine(props) {
  const onsubmit = (e) => {
    e.preventDefault();
    if (typeSelect === "Donate") {
      setPrice("");
      setOprice("");
      setModeofpay("");
    }
    const body = {
      medname,
      company,
      expdate,
      qty,
      type,
      typeSelect,
      price,
      oprice,
      modeofpay,
      user: props.userid
    };
    setQty("");
    setType("");
    setExpdate("");
    setCompany("");
    setMedname("");
    if (typeSelect === "Sell") {
      setPrice("");
      setOprice("");
      setModeofpay("");
    }
    console.log(body);

    axios.post("http://localhost:5000/medicine", body).then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        alert("post success");
      }
    });
  };
  const [uid, setUid] = useState("");
  const [medname, setMedname] = useState("");
  const [company, setCompany] = useState("");
  const [expdate, setExpdate] = useState("");
  const [type, setType] = useState("Strips");
  const [qty, setQty] = useState("");
  const [typeSelect, setTypeSelect] = useState("Donate");
  const [price, setPrice] = useState("");
  const [oprice, setOprice] = useState("");
  const [modeofpay, setModeofpay] = useState("");

  useEffect(() => {
    console.log(props.userid);
    axios.post(`http://localhost:5000/users/getuser/${props.userid}`).then((res) => {
      // console.log(res.data);
      setUid(res.data.data.uid);
    });
  }, []);
  return (
    <>
      <Container>
        <div style={{ backgroundColor: "#ff4c4c" }}>
          <center>
            <h1>
              UnusedMedicine&nbsp;
              <FontAwesomeIcon icon="medkit" />
            </h1>
          </center>
        </div>
      </Container>
      <Form className="container my-4" onSubmit={onsubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>User id</Form.Label>
                <Form.Control type="text" disabled placeholder="" value={uid} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="mt-3 " as={Col} controlId="formGridCity">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control
                  placeholder="Medicine Name"
                  value={medname}
                  required
                  onChange={(e) => setMedname(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <img src={med} style={{ height: "80%" }} />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mb-3">
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              placeholder="Company Name"
              value={company}
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Exp Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              value={expdate}
              required
              onChange={(e) => setExpdate(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              placeholder="Enter Quantity"
              value={qty}
              required
              onChange={(e) => setQty(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option>Strips</option>
              <option>Cream</option>
              <option>Tablets</option>
              <option>Injections</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Options</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => setTypeSelect(e.target.value)}
            >
              <option value="Donate">Donate</option>
              <option value="Sell">Sell</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        {typeSelect !== "Donate" ? (
          <div>
            <Form.Row>
              {" "}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  placeholder="Mrp"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />{" "}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Offered Price</Form.Label>
                <Form.Control
                  placeholder="Offered Price"
                  value={oprice}
                  onChange={(e) => setOprice(e.target.value)}
                />{" "}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Check
                  type="radio"
                  value="nb"
                  label="NetBanking"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onClick={(e) => {
                    setModeofpay(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  value="cod"
                  label="cash on Delivery"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onClick={(e) => {
                    setModeofpay(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  value="paytm"
                  label="Paytm"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onClick={(e) => {
                    setModeofpay(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  value="any"
                  label="Any"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onClick={(e) => {
                    setModeofpay(e.target.value);
                  }}
                />
              </Col>
            </Form.Row>
          </div>
        ) : (
          <div></div>
        )}

        <br />
        <center>
          {" "}
          <Button variant="success" className="pl-4 pr-4" type="submit">
            Post Advertisement
          </Button>
        </center>
      </Form>
    </>
  );
}

export default UnusedMedicine;
