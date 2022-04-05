import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import {toast} from "react-toastify"

const initialState = {
  name: '',
  email: '',
  contact: '',
};



const AddEdit = () => {
    
  const [state, setstate] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact } = state;

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
    if(!name || !email || !contact){
        toast.error("Please provide value in each input field")
    }else{
        fireDb.child("contact").push(state, (err) => {
            if(err){
                toast.error(err);
            }else{
                toast.success("Contact added successfully")
            }
        });
        setTimeout(() => navigate("/table"), 500)
    }
  }
  return (
    <div style={{marginTop:"200px"}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name.."
          value={name || ""}
          onChange={handleInputChange}
        />
          <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
          value={email || ""}
          onChange={handleInputChange}
        />
          <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact.."
          value={contact || ""}
          onChange={handleInputChange}
        />
        
        <input type="submit" value='save' />
      </form>
    </div>
  );
};

export default AddEdit;
