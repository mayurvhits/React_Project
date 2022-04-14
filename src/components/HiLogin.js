import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      history.push('/Applicants');
      alert('log in successfully');
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
          <h1 className="login">Log in</h1>
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

        <Button className="button" variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;