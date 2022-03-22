import React from 'react';
import profile from '../assets/download.jpg';

const About = () => {
  return (
    <div>
      <div className="main">
        <div className="left">
          <img className="download" src={profile} alt="Logo" />
        </div>
        <div className="right">
          <div className="aboutus">
            <h4>About us</h4>
            <h3>Welcome to RTO consultancy</h3>
            <p>
              We provide all types of RTO service in all Gujart state.
              Service types- Driving licence, Duplicate RC book, Hypothecation
              deletion (HP) New registration of vehicle, No objection
              certificate (NOC), international Driving License service &
              Ownership transfer. Payment of road tax & all types registration
              of vehicle
            </p>
          </div>
        </div>
      </div>
      {/* <div className="footer">hi</div> */}
    </div>
  );
};

export default About;
