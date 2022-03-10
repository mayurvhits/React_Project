import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNo: '',
      city: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePhoneNoChange = (event) => {
    this.setState({
      phoneNo: event.target.value,
    });
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(`${this.state.name} ${this.state.phoneNo} ${this.state.city}`)
  }

  render() {
    return (
      <div>
        <>
          <div>
            <Form className="form" onSubmit={this.handleSubmit}>
              <Form.Label>
                <h1>Fill this form</h1>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Applicants full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="(+91) 1234567890"
                  value={this.state.phoneNo}
                  onChange={this.handlePhoneNoChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city name"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload document</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Button className="button" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </>
      </div>
    );
  }
}

export default Login;
