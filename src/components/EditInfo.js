
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";

const EditInfo = () => {

    let history = useHistory();
    const {id} = useParams();
    // alert(id)
    const [userRegistraion, setuserRegistraion] = useState({
        name: '',
        phone: '',
        city: '',
        file: ''
    });
  
    const [records, setRecords] = useState([]);
  
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      console.log(name, value);
  
      setuserRegistraion({ ...userRegistraion, [name]: value });
    };

    useEffect(() => {
       loadUser();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/posts/${id}`, userRegistraion);
      history.push('/admintable');  // to reidrect to applicants table after submiting the form
  
      const newRecord = {
        ...userRegistraion,
        id: new Date().getTime().toString(),
      };
      // console.log(records);
  
      setRecords([...records, newRecord]);
      // console.log(records);
  
      alert(
        `${userRegistraion.name} ${userRegistraion.phone} ${userRegistraion.city} ${userRegistraion.file}`
      );
  
      // e.form.reset();
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/posts/${id}`);
        console.log(result)
        setuserRegistraion(result.data);
    } 
  return (
    <div>
      <>
        <div className='div1'>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          {console.log('Mayur', records)}
            <Form.Label>
              <h1 className="login">Update info</h1>
            </Form.Label>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userRegistraion.name}
                onChange={handleInput}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Control
                type="phone"
                placeholder="(+91) 1234567890 "
                value={userRegistraion.phone}
                onChange={handleInput}
                name="phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Control
                type="text"
                placeholder="Enter your city name"
                value={userRegistraion.city}
                onChange={handleInput}
                name="city"
              />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload document</Form.Label>
                <Form.Control type="file" 
                    value={userRegistraion.email}
                    onChange={handleInput}
                    name="file"
                multiple />             
                </Form.Group>

          

            <Button className="button" variant="primary" type="submit">
              Update
            </Button>

            
          </Form>
        </div>
      </>
    </div>
  )
}

export default EditInfo