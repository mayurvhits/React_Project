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
//                   <inputs
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
import { Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import Particlebackground from './Particlebackground';
import Particle from "react-tsparticles";
import particlesConfig from '../config/particlesConfig.json'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // console.log('Logged in Successfully');
      const userObject = await logIn(email, password);
      toast.success('Logged in successfully');
      console.log(userObject);
      // console.log(userObject.user.email);
      // console.log(userObject.user.accessToken);
      localStorage.setItem('id', userObject.user.uid);
      sessionStorage.setItem('id1', userObject.user.accessToken);

      if (userObject.user.email === 'mayurbhalgama2419@gmail.com') {
        navigate('/admintable');
      } else {
        navigate('/home');
      }
    } catch (err) {
      toast.error('Invalid email/password'); // Custom error
      // setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
      console.log('hhhhhhhhhh');
    } catch (err) {
      setError(err.message);
      console.log('aaaaaaaaaaa');
    }
  };

  return (
    <div>
      <>
      {/* <Particle params={particlesConfig} className="App-particles__container" /> */}
      {/* <Particlebackground /> */}
        <h2>
          <p className="div7">Welcome to RTO consultancy </p>
        </h2>
        <hr />
        <div className="div7">
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
            {error && (
              <Alert className="hav" variant="danger">
                {error}
              </Alert>
            )}
            <Form.Label>
              <h1 className="login">Login</h1>
            </Form.Label>

            <Form.Label>
              Email address
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter you email address "
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Label>
              Password
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter your Password "
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
              Login
            </Button>
            {/* <hr /> */}
            <div className="register">
              <p>Don't have an account?</p>
              <Link className="welcome1" to="/registration">
                <h5 className="">Sign up</h5>
              </Link>
            </div>
            {/* <hr /> */}
            <div className="separator">or</div>
            <div className="register1">
              <GoogleButton
                className="button7"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
          </Form>
        </div>
      </>
    </div>
  );
};

export default Login;
