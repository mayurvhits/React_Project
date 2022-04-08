import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import {toast} from "react-toastify"
import { Button, Form } from 'react-bootstrap';
import Firstnavbar from './Firstnavbar';

const initialState = {
  name: '',
  phone: '',
  city: '',
  file: ''
};

const EditInfo = () => {
  const [state, setstate] = useState(initialState);
  const [data, setData] = useState({});

  const { name, phone, city, file } = state;

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    fireDb.child('contact').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
        console.log('hi1');
      } else {
        setData({});
        console.log('hi2');
      }
    });

    return  () => {
    setData({});
    console.log("hi3");
    };
  }, [id]);

  useEffect(() => {
     if(id){
         setstate({...data[id]})
     }else{
         setstate({...initialState})
     }

     return () => {
         setstate({...initialState})
     }
  }, [id, data])

  const handleInputChange = (e) => {
        const{name, value} = e.target;
        setstate({...state, [name]: value});
  }

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    if(!name || !phone || !city){
        toast.error("Please provide value in each input field")
    }else{
        if(!id){

            fireDb.child("contact").push(state, (err) => {
                if(err){
                    toast.error(err);
                }else{
                    toast.success("Contact added successfully")
                }
            });
        }else{
            fireDb.child(`contact/${id}`).set(state, (err) => {
                if(err){
                    toast.error(err);
                }else{
                    toast.success("Contact updated successfully")
                }
            });
        }
        setTimeout(() => navigate("/usertable"), 500)
    }
  }
  return (
    <div>
      <>
      <Firstnavbar />
        <div className='div1'>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          {console.log('Mayur', data)}
            <Form.Label>
              <h1 className="login">Update your info</h1>
            </Form.Label>
            <Form.Group className="mb-3" >
              <Form.Control
                id='name'
                type="text"
                placeholder="Enter your name"
                value={name || ""}
                onChange={handleInputChange}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control
                id='phone'
                type="phone"
                placeholder="(+91) 1234567890 "
                value={phone || ""}
                onChange={handleInputChange}
                name="phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control
                id='city'
                type="text"
                placeholder="Enter your city name"
                value={city || ""}
                onChange={handleInputChange}
                name="city"
              />
            </Form.Group>

            {/* <Form.Group controlId="file" className="mb-3">
                <Form.Label>Upload document</Form.Label>
                <Form.Control 
                id='file'
                type="file" 
                    value={file || ""}
                    onChange={handleInputChange}
                    name="file"
                multiple />             
                </Form.Group> */}

          

            <Button className="button" variant="primary" type="submit"  value={id ? "Update" : "Save"}>
              Submit
            </Button>

            
          </Form>
        </div>
      </>
    </div>
  )
}

export default EditInfo