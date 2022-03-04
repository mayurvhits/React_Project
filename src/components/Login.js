import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {
  
  return (
    <div>
      <>
        <div>
        <Form className="form">
        <Form.Label>
                <h1>Applicants Data</h1>
              </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Applicants full Name</Form.Label>
            <Form.Control type="text" placeholder="First Name   Middle Name   Last Name" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="(+91) 1234567890" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city name" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button className='button' variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
        </div>
      </>
    </div>
  );
}

export default Login;
