import React, {Component} from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

class Query extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       email:'',
       text:'',
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    alert(`${this.state.name} ${this.state.email} ${this.state.text}`)
  }
 
  render(){
  return (
    <div>
      <>
        <div>
          <Form className="form" onSubmit={this.handleSubmit}> 
            <h1>Query Section</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Name
              </Form.Label>
              
              <Form.Control 
              type="text" 
              placeholder="Full name" 
              value={this.state.name}
              onChange={this.handleNameChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email ID</Form.Label>
              <Form.Control 
              type="tel" 
              placeholder="Enter your mail" 
              value={this.state.email}
              onChange={this.handleEmailChange}/>
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Ask your queries here"
              className="mb-3"
            >
              <Form.Control 
              type="textarea" 
              placeholder="Leave a comment here"
              value={this.state.text}
              onChange={this.handleTextChange} />
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
}

export default Query;
