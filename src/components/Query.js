import React from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

function Query() {
  return (
    <div>
      <>
        <div>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <h1>Query</h1>
              </Form.Label>
              <Form.Control type="text" placeholder="Full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mail" />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Ask your queries here"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button className="button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    </div>
  );
}

export default Query;
