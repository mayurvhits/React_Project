import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AgentRegistration = () => {
  const [userRegistraion, setuserRegistraion] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setuserRegistraion({ ...userRegistraion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistraion,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
  };

  return (
    <div>
      <>
        <div className="div1">
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
            {console.log('Mayur', records)}
            <Form.Label>
              <h1 className="login">Agent Registration</h1>
            </Form.Label>
            <Form.Group className="mb-3" controlId="fname">
              <Form.Control
                type="text"
                placeholder="First name"
                value={userRegistraion.fname}
                onChange={handleInput}
                name="fname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lname">
              <Form.Control
                type="text"
                placeholder="Last name"
                value={userRegistraion.lname}
                onChange={handleInput}
                name="lname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={userRegistraion.email}
                onChange={handleInput}
                name="email"
              />
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

            <div className="checkbox">
              <label className="lable">
                Register as a agent
                <input className="checkbox1" type="checkbox" defaultChecked />
              </label>
            </div>
          </Form>
        </div>
      </>
    </div>
  );
};

export default AgentRegistration;
