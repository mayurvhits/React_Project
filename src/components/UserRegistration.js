import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { useNavigate } from '@reach/router';
const UserRegistration = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  // const navigate = useNavigate();
  console.log(useAuth(),'useAuth()useAuth()useAuth()');

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      history.push('/')
      alert('Thanks! your account has been successfully created')
      // navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="div1">
      <Form className="form" onSubmit={handleSubmit} autoComplete="off">
        {error && (
          <Alert className="hav" variant="danger">
            {error}
          </Alert>
        )}
        <Form.Label>
          <h1 className="login">User Registration</h1>
        </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email addresss "
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="button" variant="primary" type="submit">
          Sign up
        </Button>

        <div className="checkbox">
          <label className="lable">
            Register as a agent
            <Link to="/Adminregistration">
              <input
                className="checkbox1"
                type="checkbox"
                // defaultChecked
                // onChange={handleInput}
              />
            </Link>
          </label>
        </div>
      </Form>
    </div>
  );
};

export default UserRegistration;
