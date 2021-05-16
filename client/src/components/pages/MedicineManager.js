import React,{useState,useEffect} from "react";
import { Form, Col, Button, Row, Container, lg, Table } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

function MedicineManager(props) {
  const [findmed, setFindmed] = useState([
  ]);
  const [uid, setUid] = useState('');
  useEffect(() => {
    console.log(props.userid);
    axios.post(`http://localhost:5000/users/getuser/${props.userid}`).then((res) => {
      console.log(res.data);
      setUid(res.data.data.uid);
    });
  }, [])
  
  const getmedicines =()=> {
    console.log(props.userid);
    axios.post("http://localhost:5000/medicine/getmed",{id: props.userid})
    .then(res=>{
      console.log('medicine',res.data)
      setFindmed(res.data);
    })
    // axios.post("http://localhost:5000/profile/city",{id:props.userid})
    // .then(res=>{
    //   console.log('city',res.data);
    //   let find_new_med = findmed ;
    //   // console.log('old',find_new_med);
    //   find_new_med[0].city= res.data.data[0].city;
    //   console.log('new',find_new_med);
    //   setFindmed(find_new_med);
    // })
  }
  return (
    <div>
      <Container>
        <Row>
          {" "}
          <Col sm={12}>
            <div style={{ backgroundColor: "#0099FF" }}>
              <center>
                <h2>Medicine Manager page</h2>
              </center>
            </div>
          </Col>
        </Row>
        <Form.Row>
          <Form.Group as={Col} className="col-6" controlId="formGridEmail">
            <Form.Label>User id</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled  value={uid}/>
          </Form.Group>
          <Form.Group as={Col} className="col-2"></Form.Group>
          <Form.Group as={Col} className="col-3" controlId="formGridPassword">
            <Button variant="outline-dark" className="mt-4" size="block" onClick={getmedicines}>
              Fetch
            </Button>
          </Form.Group>
          <Form.Group as={Col} className="col-1"></Form.Group>
        </Form.Row>
        <Table striped bordered hover variant="light">
        <thead className="bg-dark text-light">
          <tr>
            {/* <th>Rid</th> */}
            <th>Medname</th>
            <th>Company</th>
            {/* <th>City</th> */}
            <th>Unshare</th>
            <th>Update</th>
          </tr>
          </thead>
          <tbody>
          {findmed.map(med=>{
              return(
                <tr>
                  <td>{med.medname}</td>
                  <td>{med.company}</td>
                  {/* <td>{med.city}</td> */}
                  <td><Button variant="outline-danger">Unshare</Button></td>
                  <td><Button variant="outline-info">Update</Button></td>

                </tr>
              )
          })}
    
          </tbody>
        </Table>
        
      </Container>
    </div>
  );
}

export default MedicineManager;
