import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function CommonDisease() {
  const [findmed, setFindmed] = useState([
    {
      symptoms: "always wear mask",
      recommendations: "wash hands",
      suggestions: "bath daily",
      dos: Date.now(),
      contact: 9876543210,
    },
    {
      symptoms: "always wear mask",
      recommendations: "wash hands",
      suggestions: "bath daily",
      dos: Date.now(),
      contact: 9876543210,
    },
    {
      symptoms: "always wear mask",
      recommendations: "wash hands",
      suggestions: "bath daily",
      dos: Date.now(),
      contact: 9876543210,
    },
  ]);
  const [disease, setDisease] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState("");
  const [selecteddisease, setSelecteddisease] = useState("");

  const [diseasestable, setDiseasestable] = useState([]);

  const getDistinctdiseases = (val) => {
    axios
      .post("http://localhost:5000/disease/getDistinctDiseasesByCategory/", {
        category: val,
      })
      .then((res) => {
        console.log(res.data);
        setDisease(res.data.data);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/disease/getDistinctCategory")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data.data);
      });
  }, []);
  const getdiseasesinfo = (e) => {
    e.preventDefault();
    const body = {
      category: selectedcategory,
      diseasename: selecteddisease,
    };
    console.log(body);

    axios
      .post("http://localhost:5000/disease/getdiseasesinfo", body)
      .then((res) => {
        console.log(res.data.data);
        setDiseasestable(res.data.data);
        //  let dates= res.data.data[0].dos_date.split('T');
        // console.log(dates);
        setDisease([]);
      });
  };
  return (
    <Container>
      <Row>
        {" "}
        <Col sm={12}>
          <div style={{ backgroundColor: "#292B2C", color: "white" }}>
            <center>
              <h1>
                Find Common Diseases&nbsp;
                <FontAwesomeIcon icon="search" />
              </h1>
            </center>
          </div>
        </Col>
      </Row>

      <Form className="container my-4" onSubmit={getdiseasesinfo}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                setSelectedcategory(e.target.value);
                getDistinctdiseases(e.target.value);
              }}
            >
              <option>choose...</option>
              {category.map((category) => {
                return <option>{category}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Diseases</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setSelecteddisease(e.target.value);
                }}
              >
                <option>choose...</option>
                {disease.map((disease) => {
                  return <option>{disease}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <br />
        <center>
          <Button
            variant="outline-dark"
            className="pl-4 pr-4"
            type="submit"
            size="lg"
          >
            Fetch
          </Button>
        </center>
      </Form>
      <br />
      <Table striped bordered hover variant="light">
        <thead className="bg-dark text-light">
          <tr>
            <th>Symptoms</th>
            <th>Recommendations</th>
            <th>Suggestions</th>
            <th>DOS</th>
            <th>Contact</th>
          </tr>
        </thead>
        {/* </Table> */}
        <tbody>
          {diseasestable.map((med) => {
            let dos = med.dos_date.split("T");
            return (
              <tr>
                <td>{med.symptoms}</td>
                <td>{med.recommendations}</td>
                <td>{med.suggestions}</td>
                <td>{dos[0]}</td>
                <td>
                  {med.contact === "Yes" ? <Button>Contact</Button> : <p></p>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default CommonDisease;
