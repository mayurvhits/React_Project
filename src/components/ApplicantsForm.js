import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import axios from 'axios';
import { useHistory } from "react-router-dom";


const ApplicantsForm = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     fname: '',
  //     lname: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //   };
  // }

  // handleFnameChange = (event) => {
  //   this.setState({
  //     fname: event.target.value,
  //   });
  // };

  // handleLnameChange = (event) => {
  //   this.setState({
  //     lname: event.target.value,
  //   });
  // };

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // };

  // handleConfirmpasswordChange = (event) => {
  //   this.setState({
  //     confirmPassword: event.target.value,
  //   });
  // };

  // handleSubmit = () => {
  //   alert(
  //     `${this.state.fname} ${this.state.lname} ${this.state.email} ${this.state.password} ${this.state.confirmPassword}`
  //   );
  // };

  let history = useHistory();
  const [userRegistraion, setuserRegistraion] = useState({
      name: '',
      phone: '',
      city: '',
      file: ''
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setuserRegistraion({ ...userRegistraion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", userRegistraion);
    // history.push('/admintable');  // to reidrect to applicants table after submiting the form

    const newRecord = {
      ...userRegistraion,
      id: new Date().getTime().toString(),
    };
    // console.log(records);

    setRecords([...records, newRecord]);
    // console.log(records);

    alert(
      `${userRegistraion.name} ${userRegistraion.phone} ${userRegistraion.city} ${userRegistraion.file}`
    );

    // e.form.reset();
  };

  return (
    <div>
      <>
        <div>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          {console.log('Mayur', records)}
            <Form.Label>
              <h1 className="login">Fill up your info</h1>
            </Form.Label>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userRegistraion.name}
                onChange={handleInput}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Control
                type="phone"
                placeholder="(+91) 1234567890 "
                value={userRegistraion.phone}
                onChange={handleInput}
                name="phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Control
                type="text"
                placeholder="Enter your city name"
                value={userRegistraion.city}
                onChange={handleInput}
                name="city"
              />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload document</Form.Label>
                <Form.Control type="file" 
                    value={userRegistraion.file}
                    onChange={handleInput}
                    name="file"
                multiple />             
                </Form.Group>

          

            <Button className="button" variant="primary" type="submit" disabled={!userRegistraion.phone}>
              Submit
            </Button>

            
          </Form>
        </div>
      </>
    </div>
  );
};

export default ApplicantsForm;
