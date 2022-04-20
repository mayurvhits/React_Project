import React from 'react';
import profile from '../assets/download.jpg';
import Firstnavbar from './Firstnavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookSquare, faTwitter, faInstagram );
const About = () => {
  return (
    <>
    <div>
      <Firstnavbar/>
      <div className="main">
        <div className="left">
          <img className="download" src={profile} alt="Logo" />
        </div>
        <div className="right">
          <div className="aboutus">
            <h4>About us</h4>
            <h3>Welcome to RTO consultancy</h3>
            <p>
              We provide all types of RTO service in all Gujart state. Service
              types- Driving licence, Duplicate RC book, Hypothecation deletion
              (HP) New registration of vehicle, No objection certificate (NOC),
              international Driving License service & Ownership transfer.
              Payment of road tax & all types registration of vehicle
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-dark ">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col item social ">
                <a href="https://www.facebook.com/login/" target="_blank">
                <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-facebook-square" />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-twitter" />
                </a>
                
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-instagram"/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
