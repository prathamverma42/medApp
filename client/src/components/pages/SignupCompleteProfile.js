import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import axios from "axios";

function SignupCompleteProfile(props) {
  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();

  useEffect(() => {
    //   console.log('Signup',props.userid);
    axios.post(`http://localhost:5000/users/getuser/${props.userid}`).then((res) => {
      console.log(res.data);
      setUserid(res.data.data.uid);
      setContact(res.data.data.mobile);
    });
    // if (!selectedFile) {
    //   setPreview(undefined);
    //   return;
    // }
    // const objectUrl = URL.createObjectURL(selectedFile);
    // setPreview(objectUrl);
    // return () => URL.revokeObjectURL(objectUrl);
  }, []);

  // const onSelectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }
  //   setSelectedFile(e.target.files[0]);
  // };
  const [userid, setUserid] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [acard, setacard] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  const [saveprofile, setSaveprofile] = useState(false);
  const saveUserProfile = () => {
    const body = {
      user: props.userid,
      name: name,
      gender: gender,
      address: adress,
      city: city,
      state: state,
      pin: pin,
      acard: acard,
      dob: dob,
      email: email,
    };
    console.log(props.userid);
    console.log(body);
    axios.post("http://localhost:5000/profile", body).then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        setSaveprofile(true);
      }
    });
  };
  // useEffect(() => {
  //     console.log(saveprofile);
  // }, [saveprofile])

  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "orange" }}>
              <center>
                <h2>
                  Personal Information &nbsp;
                  <FontAwesomeIcon icon="user-plus" />
                </h2>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <Form className="container my-4">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              disabled
              value={userid}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          {/* <Form.Group as={Col} controlId="formGridPassword">
            <Button variant="info" size="sm" className="pl-5 pr-5 pb-2 mt-4">
              &emsp;Fetch&emsp;
            </Button>
          </Form.Group> */}
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Mobile/Contact</Form.Label>
            <Form.Control
              placeholder="Enter your contact details"
              disabled
              value={contact}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Punjab"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Punjab</option>
              <option>Delhi</option>
              <option>Haryana</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Pin</Form.Label>
            <Form.Control
              placeholder="Your Pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {" "}
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Aadhar Card Number</Form.Label>
            <Form.Control
              placeholder="Enter aadhar Card (12-digits)"
              value={acard}
              onChange={(e) => setacard(e.target.value)}
            />{" "}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {" "}
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter you email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </Form.Group>
        </Form.Row>

{/* ======================================================= */}
{/* IMG UPLOAD */}
        {/* <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Upload Pic</Form.Label>
            <br />
            <center>
              <input type="file" onChange={onSelectFile} />
              <div className="my-3">
                {" "}
                {selectedFile && (
                  <img
                    src={preview}
                    style={{ width: "19rem", border: "1px dotted black" }}
                  />
                )}
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px solid red",
                }}
                ondrop={(e) => console.log(e)}
                ondragover={(e) => console.log(e)}
              ></div>
            </center>
          </Form.Group>
        </Form.Row> */}
        {/* ======================================================= */}

        <center>
          {" "}
          <Route
            render={({ history }) => (
              <Button
                className="col-2"
                variant="success"
                onClick={() => {
                  saveUserProfile();
                  saveprofile === true ? (
                    history.push(`/Dashboard`)
                  ) : (
                    <p></p>
                  );
                }}
              >
                Save
              </Button>
            )}
          />
          {/* <Button variant="success" className="pl-4 pr-4" type="submit">
            Save
          </Button> */}
        </center>
      </Form>
    </div>
  );
}

export default SignupCompleteProfile;
