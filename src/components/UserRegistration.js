import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class UserRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleFnameChange = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };

  handleLnameChange = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmpasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(
      `${this.state.fname} ${this.state.lname} ${this.state.email} ${this.state.password} ${this.state.confirmPassword}`
    );
  };

  render() {
    return (
      <div>
        <>
          <div>
            <Form
              className="form"
              onSubmit={this.handleSubmit}
              autoComplete="off"
            >
              <Form.Label>
                <h1 className="login">User Registration</h1>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicText">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={this.state.fname}
                  onChange={this.handleFnameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={this.state.lname}
                  onChange={this.handleLnameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={this.state.confirmPassword}
                  onChange={this.handleConfirmpasswordChange}
                />
              </Form.Group>

              <Button className="button" variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </div>
        </>
      </div>
    );
  }
}

export default UserRegistration;
