// import React, { Component } from 'react';
// import { Button, Form, FloatingLabel } from 'react-bootstrap';

// class Query extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       email: '',
//       text: '',
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleEmailChange = (event) => {
//     this.setState({
//       email: event.target.value,
//     });
//   };

//   handleTextChange = (event) => {
//     this.setState({
//       text: event.target.value,
//     });
//   };

//   handleSubmit = () => {
//     alert(`${this.state.name} ${this.state.email} ${this.state.text}`);
//   };

//   render() {
//     return (
//       <div>
//         <>
//           <div>
//             <Form
//               className="form"
//               onSubmit={this.handleSubmit}
//               autoComplete="off"
//             >
//               <h1>Query Section</h1>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Name</Form.Label>

//                 <Form.Control
//                   type="text"
//                   placeholder="Full name"
//                   value={this.state.name}
//                   onChange={this.handleNameChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Email ID</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter your mail"
//                   value={this.state.email}
//                   onChange={this.handleEmailChange}
//                 />
//               </Form.Group>
//               <FloatingLabel
//                 controlId="floatingTextarea"
//                 label="Ask your queries here"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="textarea"
//                   placeholder="Leave a comment here"
//                   value={this.state.text}
//                   onChange={this.handleTextChange}
//                 />
//               </FloatingLabel>
//               {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group> */}
//               <Button className="button" variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         </>
//       </div>
//     );
//   }
// }

// export default Query;

import React, { useState } from 'react';
import { Button, Form, } from 'react-bootstrap';


const Query = () => {


  const [userRegistraion, setuserRegistraion] = useState({
      name: '',
      email: '',
      textarea: ''
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
    // console.log(records);

    setRecords([...records, newRecord]);
    // console.log(records);

    alert(
      `${userRegistraion.name} ${userRegistraion.email} ${userRegistraion.textarea} `
    );

    // e.form.reset();
  };

  return (
    <div>
      <>
        <div>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          {console.log('Mayur', records)}
            <Form.Label>
              <h1 className="login">Query section</h1>
            </Form.Label>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Full name"
                value={userRegistraion.name}
                onChange={handleInput}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter your mail"
                value={userRegistraion.email}
                onChange={handleInput}
                name="email"
              />
            </Form.Group>

            <Form.Group
            
                controlId="Textarea"
                
                className="mb-3"
              >
                <Form.Control
                 type="textarea"
                 placeholder="Ask your queries here"
                 value={userRegistraion.textarea}
                 onChange={handleInput}
                 name="textarea"
                />
              </Form.Group>
         

          

            <Button className="button" variant="primary" type="submit">
              Submit
            </Button>

            
          </Form>
        </div>
      </>
    </div>
  );
};

export default Query;
