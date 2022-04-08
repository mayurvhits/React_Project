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

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import { Button, Form } from 'react-bootstrap';
import Firstnavbar from './Firstnavbar';
import { toast } from 'react-toastify';


const initialState = {
  name: '',
  email: '',
  // id: localStorage.setItem("uid"),
  query: ''
};

const Query = () => {
  const [state, setstate] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, query } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child('query').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
        // console.log('hi1');
      } else {
        setData({});
        // console.log('hi2');
      }
    });

    return () => {
      setData({});
      // console.log("hi3");
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setstate({ ...data[id] });
    } else {
      setstate({ ...initialState });
    }

    return () => {
      setstate({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    if (!name || !email || !query) {
      toast.error('Please provide value in each input field');
    } else {
      fireDb.child('query').push(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success('Query added successfully');
        }
      });
      setTimeout(() => navigate('/querytable'), 500);
    }
  };

  return (
    <div>
      <>
        <Firstnavbar />
        <div className="div1">
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
            {/* {console.log('Mayur', records)} */}
            <Form.Label>
              <h1 className="login">Query section</h1>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                 id="name"
                 type="text"
                 placeholder="Enter your name"
                 value={name || ''}
                 onChange={handleInputChange}
                 name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control
                id='email'
                type="email"
                placeholder="Enter your email Id"
                value={email || ""}
                onChange={handleInputChange}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="query"
                type="textarea"
                placeholder="Ask your queries here"
                value={query || ""}
                onChange={handleInputChange}
                name="query"
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
