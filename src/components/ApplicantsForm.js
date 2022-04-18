import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

const initialState = {
  name: '',
  phone: '',
  id: '',
  city: '',
  file: '',
};

const ApplicantsForm = () => {
  const [state, setstate] = useState(initialState);
  const [imageUpload, setImageUpload] = useState(null);

  const [data, setData] = useState({});

  const { name, phone, city, file } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child('contact').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
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
    if (!name || !phone || !city) {
      toast.error('Please provide value in each input field');
    } else {
      fireDb
        .child('contact')
        .push({ ...state, id: localStorage.getItem('id') }, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success('Contact added successfully');
          }
        });
      setTimeout(() => navigate('/usertable'), 500);
    }

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      toast.success('File uploaded successfully');
      });
  };

  // const uploadFile = () => {
    
  // };

//   const handleChange = (e) => {
//     if(e.target.files[0]){
//       setImage(e.target.files[0])
//     }
//   }

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`image/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {},
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage.ref("images").child(image.name).getDownloadURL().then(url => {});
//       }
//     )
//   }

//  console.log("image", image);

  return (
    <>
      <div className="div5">
        <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          <Form.Label>
            <h1 className="login">Fill up your info</h1>
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

          <Form.Group className="mb-3">
            <Form.Control
              id="phone"
              type="phone"
              placeholder="(+91) 1234567890 "
              value={phone || ''}
              onChange={handleInputChange}
              name="phone"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              id="city"
              type="text"
              placeholder="Enter your city name"
              value={city || ''}
              onChange={handleInputChange}
              name="city"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload document</Form.Label>
            <Form.Control
              id="file"  
              type="file"
              value={file || ''}
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              name="file"
              multiple
            />
          </Form.Group>

          {/* <input type="file" onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />
          <button onClick={uploadFile}>upload</button> */}

          <Button
            className="button"
            variant="primary"
            type="submit"
            disabled={!city}
            value="save"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ApplicantsForm;
