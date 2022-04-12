import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import ApplicantsForm from './ApplicantsForm';
// import { useNavigate } from 'react-router-dom';
import Firstnavbar from './Firstnavbar';
import UserTable from './UserTable';

const Home = () => {
  // const navigate = useNavigate();
  const {user, logOut} = useAuth();
  console.log(user); 

  const handleLogOut = async () => {

    try{
      console.log("Logged out successfully");
      localStorage.clear();
         await logOut();
    }catch (err){
      console.log(err.message);
    }
  }
  return (
    <>
    <Firstnavbar />
    <div className='div5'>
      {/* <div className="p-4 box mt-3 text-center">Hello welcome</div> */}
      <p><h3>Hello welcome</h3></p>
      <hr style={{width: "700px"}}/>
       <ul className='div6'>
         <li ><span style={{fontSize: "20px"}}> Email:</span> { user.email}</li>
         {/* <li ><span style={{fontSize: "20px"}}> User Id:</span> { user.uid}</li> */}
       </ul>
    </div>
    <div  className='div5'>
      <p><h3>Submit your information below for further process</h3></p>
      <hr style={{width: "700px"}}/>

    </div>
      <ApplicantsForm />
      {/* <UserTable /> */}
      {/* <div className="logout2">
        <Button className='logout1' variant="primary" onClick={handleLogOut}>Log out</Button>
      </div> */}
      
    </>
  );
};

export default Home;
