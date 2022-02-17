import './App.css';
import { Button, Form } from 'react-bootstrap';
import img1 from './assets/loginMainImg.png';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-around flex-fill">
        <img src={img1} alt="No Img" width="400" height="400" />

        <Form className="form">
          <h1 className="h1">Sign in Gilly</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your email</Form.Label>
            <Form.Control
              className="placeholder"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="placeholder"
              type="password"
              placeholder="Enter the Password"
            />
          </Form.Group>
          <Form.Group
            className="d-flex justify-content-between "
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Check me out" />
            <p className="p2">Lost password?</p>
          </Form.Group>

          <Button className="button" variant="primary" type="submit">
            Create account
          </Button>
          <fieldset className="d-flex">
            <p className="p ">Not registered? </p>
            <p className="p1 ">Creat contact </p>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}

export default App;
