import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
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

  const [userRegistraion, setuserRegistraion] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        isChecked: true
});

const [records, setRecords] = useState([]);


const handleInput = (e) => {
  const name= e.target.name;
  const value= e.target.value;

  console.log(name, value);

  setuserRegistraion({...userRegistraion, [name]: value})
}

const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...userRegistraion, id: new Date().getTime().toString()}
    // console.log(records);  

    setRecords([...records, newRecord]);
    console.log(records);
}

  
    return (
      <div>
        <>
          <div>
            <Form
              className="form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Form.Label>
                <h1 className="login">User Registration</h1>
              </Form.Label>
              <Form.Group className="mb-3" controlId="fname">
               
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={userRegistraion.fname}
                  onChange={handleInput}
                  name="fname"              />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lname">
              
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={userRegistraion.lname}
            onChange={handleInput}
            name="lname"              />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
               
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={userRegistraion.email}
                  onChange={handleInput}
                  name="email"              />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
             
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={userRegistraion.password}
                  onChange={handleInput}
                  name="password" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={userRegistraion.confirmPassword}
            onChange={handleInput}
            name="confirmPassword" 
                />
              </Form.Group>

              <Button className="button" variant="primary" type="submit">
                Sign up
              </Button>

              <div className='checkbox'>
                    
                <label className='lable'>Register as a agent
                  <Link  to="/Adminregistration">
                  <input
                    className='checkbox1'
                    type="checkbox"
                    // defaultChecked
                    // onChange={handleInput}
                  />
                  </Link>
                </label>
              </div>
            </Form>
          </div>
        </>
      </div>
    );
  }


export default Registration;
