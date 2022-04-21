import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import { Button, Form } from 'react-bootstrap';
import Firstnavbar from './Firstnavbar';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookSquare, faTwitter, faInstagram );

const initialState = {
  name: '',
  email: '',
  // id: localStorage.setItem("uid"),
  query: '',
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
    if (!name || !email || !query) {
      toast.error('Please provide value in each input field');
    } else {
      fireDb.child('query').push(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success('Query submitted successfully');
        }
      });
      setTimeout(() => navigate('/home'), 500);
    }
  };

  return (
    <div>
      <>
        <Firstnavbar />
        <div className="div5">
          <p>
            <h3>Ask your Queries below</h3>
          </p>
          <hr style={{ width: '700px' }} />
        </div>
        <div className="div5">
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

            <Form.Group className="mb-3">
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter your email Id"
                value={email || ''}
                onChange={handleInputChange}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="query"
                as="textarea"
                rows={2}
                placeholder="Ask your queries here"
                value={query || ''}
                onChange={handleInputChange}
                name="query"
              />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div class="footer-dark ">
        <div class="footer-dark ">
        <footer className="footer2">
          <div className="contact1">
            <div className="contact2">
              <FontAwesomeIcon
                className="buzz-out-on-hover"
                icon="fa-solid fa-location-dot "
              />
              <span className="span2">Ahmedabad, Gujarat</span>
            </div>
            <div className="contact2">
              <FontAwesomeIcon
                className="buzz-out-on-hover"
                icon="fa-solid fa-phone"
              />
              <span className="span2">+91-896547123</span>
            </div>
            <div className="contact2">
              <FontAwesomeIcon
                className="buzz-out-on-hover"
                icon="fa-solid fa-envelope"
              />
              <span className="span2">mayur@mayur.com</span>
            </div>
            <hr style={{ width: '100%' }} />
            <div class="contact3 ">
              <div className="contact2">
                <a href="https://www.facebook.com/login/" target="_blank">
                  <FontAwesomeIcon
                    className="fonticon1 buzz-out-on-hover fa-2x social3"
                    icon="fa-brands fa-facebook-square"
                  />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                  <FontAwesomeIcon
                    className="fonticon1 buzz-out-on-hover margin-left fa-2x social4"
                    icon="fa-brands fa-twitter"
                  />
                </a>

                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="fonticon1 buzz-out-on-hover margin-left fa-2x social5"
                    icon="fa-brands fa-instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
      </>
    </div>
  );
};

export default Query;
