// import React, { Component } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       isChecked: false,
//     };
//   }

//   handleEmailChange = (event) => {
//     this.setState({
//       email: event.target.value,
//     });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({
//       password: event.target.value,
//     });
//   };
  
//   toggleChange = () => {
//     this.setState({
//       isChecked: this.state.isChecked,
//     });
//   };
  
  
//   handleSubmit = () => {
//     alert(`${this.state.email} ${this.state.password} ${this.state.city}`);
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
//               <Form.Label>
//                 <h1 className="login">Login</h1>
//               </Form.Label>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 {/* <Form.Label>Email</Form.Label> */}
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   value={this.state.email}
//                   onChange={this.handleEmailChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 {/* <Form.Label>Password</Form.Label> */}
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={this.state.password}
//                   onChange={this.handlePasswordChange}
//                 />
//               </Form.Group>

//               <Button className="button" variant="primary" type="submit">
//                 Login
//               </Button>
//               <div className="register">
//                 <p>Don't have an account?</p>
//                 <Link className="welcome" to="/registration">
//                   <h5 className="">Sign up</h5>
//                 </Link>
//               </div>
//               {/* <div className='checkbox'>
                    
//                 <label className='lable'>Log in as a agent
//                   <Link  to="/admin">
//                   <input
//                     className='checkbox1'
//                     type="checkbox"
//                     defaultChecked={this.state.isChecked}
//                     onChange={this.toggleChange}
//                   />
//                   </Link>
//                 </label>
//               </div> */}
//             </Form>
//           </div>
//         </>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {


  const [userRegistraion, setuserRegistraion] = useState({
    email: '',
    password: '',
    
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
      `${userRegistraion.email} ${userRegistraion.password}  `
    );

    // e.form.reset();
  };

  return (
    <div>
      <>
        <div className='div1'>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          {console.log('Mayur', records)}
            <Form.Label>
              <h1 className="login">Login</h1>
            </Form.Label>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                value={userRegistraion.email}
                onChange={handleInput}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="password"
                value={userRegistraion.password}
                onChange={handleInput}
                name="password"
              />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
                 Login
               </Button>
               <div className="register">
                 <p>Don't have an account?</p>
                 <Link className="welcome" to="/registration">
                   <h5 className="">Sign up</h5>
              </Link>
               </div>

            {/* <Form.Group
            
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
              </Form.Group> */}
         

          

          
            
          </Form>
        </div>
      </>
    </div>
  );
};

export default Login;