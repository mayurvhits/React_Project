import React, {useState, useEffect} from 'react';
import { useAuth } from '../context/AuthContext';
import ApplicantsForm from './ApplicantsForm';
import Firstnavbar from './Firstnavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Particlebackground from './Particlebackground';
library.add(
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLocationDot,
  faPhone,
  faEnvelope
);
const Home = () => {
  const { user } = useAuth();
  console.log(user);
  
  // const [showHome, setShowHome] = useState(true);

  // useEffect(() => {
  //  const data = window.localStorage.getItem('no_refresh')
  //  setShowHome(JSON.parse(data))
  // }, []);

  // useEffect(() => {
  //  window.localStorage.setItem('no_refresh', JSON.stringify(showHome))
  // }, [showHome]);

  return (
    
    <>
      {/* <Particlebackground /> */}
      <Firstnavbar />
      
      <div className="div5">
        <p>
          <h3>Welcome</h3>
        </p>
        <hr style={{ width: '700px' }} />
        <ul className="div6">
          <li>
            <span style={{ fontSize: '20px' }}></span> {user.email}
          </li>
        </ul>
      </div>
      <div className="div5">
        <p>
          <h3>Submit your information below for further process</h3>
        </p>
        <hr style={{ width: '700px' }} />
      </div>
      <ApplicantsForm />
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
    </>
  );
};

export default Home;
