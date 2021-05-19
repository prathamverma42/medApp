import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container, lg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function CompleteProfile(props) {
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
  
  const fetchUserProfile= ()=> {
    console.log("hello");
    axios
      .get(`http://localhost:5000/profile/${props.userid}`)
      .then((res) => {
        // console.log('hi',res.data); 
        // console.log("abx");
        let dob = res.data[0].dob.split('T');
        // console.log('bye',dob);
        setName(res.data[0].name);
        setGender(res.data[0].gender);
        setAdress(res.data[0].address);
        setCity(res.data[0].city);
        setState(res.data[0].state);
        setPin(res.data[0].pin);
        setacard(res.data[0].acard);
        setEmail(res.data[0].email);
        setDob(dob[0]);
      });
  }
  const updateUserProfile = (e) => {
    e.preventDefault();
    const body = {
      user: props.userid,
      name: name,
      gender: gender,
      adress: adress,
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
        alert("Profile Updated");
      }
    });
  };
  useEffect(() => {
    //   console.log('Signup',props.userid);
    axios
      .post(`http://localhost:5000/users/getuser/${props.userid}`)
      .then((res) => {
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
  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();

  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }
  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const onSelectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }
  //   setSelectedFile(e.target.files[0]);
  // };

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
      <Form className="container my-4" onSubmit={updateUserProfile}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Uid"
              disabled
              value={userid}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Button variant="info" size="sm" className="mt-4 col-5" onClick={fetchUserProfile}>
              Fetch
            </Button>
          </Form.Group>
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
              <option value="Punjab">Punjab</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
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
        <center>
          {" "}
          <Button variant="success" className="pl-4 pr-4" type="submit">
            Update
          </Button>
          {/* <Route
            render={({ history }) => (
              <Button
                className="col-2"
                variant="success"
                onClick={() => {
                  saveUserProfile();
                  saveprofile === true ? history.push(`/Dashboard`) : <p></p>;
                }}
              >
                Save
              </Button>
            )}
          /> */}
        </center>
      </Form>
    </div>
  );
}

export default CompleteProfile;
