import React from 'react';
import { useAuth } from '../context/AuthContext';
import ApplicantsForm from './ApplicantsForm';

import Firstnavbar from './Firstnavbar';
const Home = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Firstnavbar />
      <div className="div5">
        <p>
          <h3>Welcome to Home page</h3>
        </p>
        <hr style={{ width: '700px' }} />
        <ul className="div6">
          <li>
            <span style={{ fontSize: '20px' }}> Email:</span> {user.email}
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
      
    </>
  );
};

export default Home;
