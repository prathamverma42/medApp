import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function DiseaseInfo(props) {
  const [diseasename, setDiseasename] = useState("");
  const [category, setCategory] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [contact, setContact] = useState("");
  const [uid, setUid] = useState('');
  useEffect(() => {
    axios.post(`http://localhost:5000/users/getuser/${props.userid}`).then((res) => {
      setUid(res.data.data.uid);
    });
  }, [ ])
  const shareDisease = (e) => {
    e.preventDefault();
    const body = {
      diseasename,
      category,
      symptoms,
      recommendations,
      suggestions,
      contact,
      user: props.userid
    };
    console.log(body);
    axios.post("http://localhost:5000/disease/", body).then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        setDiseasename("");
        setCategory("");
        setSymptoms("");
        setRecommendations("");
        setSuggestions("");
        document.getElementById("formHorizontalRadios1").checked = false;
        document.getElementById("formHorizontalRadios2").checked = false;
      }
    });
  };
  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#a2d9ff" }}>
              <center>
                <h1>
                  <FontAwesomeIcon icon="share" />
                  &nbsp; Share Disease Info &nbsp;
                  <FontAwesomeIcon icon="share" />
                </h1>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <Form className="container my-4" onSubmit={shareDisease}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control type="text"  disabled value={uid} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Eyes</option>
                <option>Ear</option>
                <option>Nose</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Disease-Name</Form.Label>
            <Form.Control
              placeholder="Your Name"
              value={diseasename}
              onChange={(e) => setDiseasename(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState"></Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Available for calls</Form.Label>
            <Row>
              <Col sm={6}>
                <Form.Check
                  onChange={(e) => setContact(e.target.value)}
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col sm={6}>
                <Form.Check
                  onChange={(e) => setContact(e.target.value)}
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Row>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Symptoms</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Recommedations</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={recommendations}
            onChange={(e) => setRecommendations(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Suggestions</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <Form.Control type="file" placeholder="Enter you email id" />{" "}
            <Form.Group as={Col} controlId="formGridState"></Form.Group>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <Form.Control type="file" placeholder="Enter you email id" />{" "}
            <Form.Group as={Col} controlId="formGridState"></Form.Group>
          </Form.Group>
        </Form.Row>
        <br /> */}

        <center>
          {" "}
          <Button variant="info" className="pl-4 pr-4" type="submit">
            Share Information
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default DiseaseInfo;
