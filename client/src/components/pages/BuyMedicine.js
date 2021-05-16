import React, { useState, useEffect } from "react";
import {
  Form,
  Col,
  Button,
  Row,
  Container,
  lg,
  Card,
  Table,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function BuyMedicine() {
  const [availablemed, setavailablemed] = useState([
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
    {
      medname: "dolo",
      company: "abc",
      expdate: new Date().toDateString(),
      available_quantity: 10,
    },
  ]);

  const [distinctCity, setDistinctCity] = useState([]);
  const [distinctMedicine, setDistinctMedicine] = useState([]);
  const [count, setCount] = useState(0);
  let cities = [];
  // useEffect(() => {
  //   if (count === 0) {
  //     axios
  //       .get("http://localhost:5000/medicine/get-distinct-city")
  //       .then((res) => {
  //         {
  //           res.data.data.map(async (user, i) => {
  //             await axios
  //               .post("http://localhost:5000/profile/getDistinctCityById", {
  //                 id: user,
  //               })
  //               .then((res) => {
  //                 cities.push(res.data.data[0].city);
  //                 console.log("after push", cities);
  //               });
  //           });
  //         }
  //       });
  //     setCount(1);
  //     setDistinctCity(cities);
  //   }
  //   console.log(distinctCity);
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/medicine/getDistinctCity_BuyMedicine")
      .then((res) => {
        console.log(res.data);
        setDistinctCity(res.data.data);
      });
  }, []);

  // const getcity = () => {
  //   let cities = [];
  //   axios
  //     .get("http://localhost:5000/medicine/get-distinct-city")
  //     .then((res) => {
  //       {
  //         res.data.data.map(async (user, i) => {
  //           await axios
  //             .post("http://localhost:5000/profile/getDistinctCityById", {
  //               id: user,
  //             })
  //             .then((res) => {
  //               cities.push(res.data.data[0].city);
  //               // setDistinctCity()
  //               console.log("after push", cities);
  //             });
  //         });
  //       }
  //     });
  //   setDistinctCity(cities);
  // };
  const getmedicines = (city) => {
    // console.log(city);
    axios.post("http://localhost:5000/medicine/getDistinctMedicine_BuyMedicine",{city:city})
    .then(res=>{
      console.log(res.data.data[0]);
      // setDistinctMedicine(res.data.data[0].city);

    })
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
      <Form className="container my-4">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Select City</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                if (e.target.value !== "") {
                  getmedicines(e.target.value);
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
          <Form.Group as={Col} controlId="formGridEmail">
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Group as={Col}>
              <Form.Label>Select Medicine</Form.Label>
              <Form.Control as="select" id="male">
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
                      <br />

                      <p>{med.available_quantity}</p>
                      <br />

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
