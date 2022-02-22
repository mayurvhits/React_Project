import './App.css';
import { Button, Form } from 'react-bootstrap';
import img1 from './assets/loginMainImg.png';

 function App() {
   


  return (
    <div className="App">
    
      <div className="d-flex justify-content-around flex-fill">
        <img src={img1} alt="No Img" width="400" height="400" />

        <Form className="form" >
          <h1 className="h1">Sign in Gilly</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your email</Form.Label>
            <Form.Control
              className="placeholder"
              type="text"
              
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="placeholder"
              type="text"
              
              placeholder="Enter the Password"
            />
          </Form.Group>
          <Form.Group
            className="d-flex justify-content-between "
            controlId="formBasicCheckbox"
          >
            <Form.Check className="check" type="checkbox" label="Check me out" />
            <a className="p2">Lost password?</a>
          </Form.Group>

          <Button className="button" variant="primary" type="submit" >
            Create account
          </Button>
          <fieldset className="d-flex justify-content-between ">
            <p className="p ">Not registered? </p>
            <a className="p1 ">Creat contact </a>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}

export default App;


// ---------------------------SECOND FORM STARTS HERE--------------------------------------------------


// import React from "react";
// import {  FormGroup, FormControl, FormText } from 'react-bootstrap';

// class FormExample extends React.Component {
//   constructor(props, context) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       value: ''
//     };
//   }

//   getValidationState() {
//     const length = this.state.value.length;
//     if (length > 10) return 'success';
//     if (length > 5) return 'warning';
//     if (length > 0) return 'error';
//     return null;
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   render() {
//     return (
//       <form>
//         <FormGroup
//           controlId="formBasicText"
//           validationState={this.getValidationState()}
//         >
//           <FormText>Working example with validation</FormText>
//           <FormControl
//             type="text"
//             value={this.state.value}
//             placeholder="Enter text"
//             onChange={this.handleChange}
//           />
//           <FormControl.Feedback />
//           <FormText>Validation is based on string length.</FormText>
//         </FormGroup>
//       </form>
//     );
//   }
// }

// export default FormExample


// -----------------------------THIRD PAGE STARTS HERE--------------------------------------------------

// import './App.css';
// import { Button, Form } from 'react-bootstrap';
// import img1 from './assets/loginMainImg.png';

//  function App() {
   


//   return (
//     <div className="App">
    
//       <div className="d-flex justify-content-around flex-fill">
//         <img src={img1} alt="No Img" width="400" height="400" />

//         <Form className="form" >
//           <h1 className="h1">Sign in Gilly</h1>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Your email</Form.Label>
//             <Form.Control
//               className="placeholder"
//               type="text"
              
//               placeholder="name@example.com"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               className="placeholder"
//               type="text"
              
//               placeholder="Enter the Password"
//             />
//           </Form.Group>
//           <Form.Group
//             className="d-flex justify-content-between "
//             controlId="formBasicCheckbox"
//           >
//             <Form.Check className="check" type="checkbox" label="Check me out" />
//             <a className="p2">Lost password?</a>
//           </Form.Group>

//           <Button className="button" variant="primary" type="submit" >
//             Create account
//           </Button>
//           <fieldset className="d-flex justify-content-between ">
//             <p className="p ">Not registered? </p>
//             <a className="p1 ">Creat contact </a>
//           </fieldset>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default App;


// --------------------------------FOURTH STARTS HERE------------------------------------------------









