import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {user, logOut} = useAuth();
  console.log(user); 

  const handleLogOut = async () => {

    try{
      console.log("ho gaya log out");
         await logOut();
    }catch (err){
      console.log(err.message);
    }
  }
  return (
    <>
      <div className="p-4 box mt-3 text-center">Hello welcome <br /> {user && user.email}</div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>Log out</Button>
      </div>
    </>
  );
};

export default Home;
