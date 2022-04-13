import React from 'react';
import { Navbar, Container, Dropdown, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMotorcycle, faSignOutAlt);

function Firstnavbar() {

  const {user, logOut} = useAuth();
  const   navigate = useNavigate();
  console.log(user); 

  const handleLogOut = async () => {

    try{
      localStorage.clear();
      // console.log("ho gaya log out");
         await logOut();
         navigate('/home')
    }catch (err){
      console.log(err.message);
    }
  }
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <FontAwesomeIcon className="fa" icon="fa-solid fa-motorcycle" />
        <Container>
          {/* <Navbar.Brand className="navbrand" href="#home">
            Welcome
          </Navbar.Brand> */}

          <div className="navlink">
            <Link className="welcome" to="/home">
              <h4 className="h11">Home</h4>
            </Link>
            <Link className="link" to="/About">
              About us
            </Link>

            <Link className="link" to="/usertable">
              User info
            </Link>

            {/* <Link className="link" to="/Applicants">
              Applicants
            </Link> */}

            {/* <Link className="link" to="/About">
                Upload
              </Link> */}

            <Link className="link" to="/query">
              Query
            </Link>

            {localStorage.getItem('id') === 'RXF5NQCnbjRV4LXQxN2H52fPIAU2' ? (
              <Link className="link" to="/admintable">
                Agents
              </Link>
            ) : null}

            {/* <Link className="link" to="/form">
              form
            </Link> */}

            {/* <Link className="link" to="/addedit">
              AddEdit
            </Link> */}

            {/* <Link className="link" to="/table">
              Table
            </Link> */}

            {/* <Link className="link" to="/home">
              Home
            </Link> */}
          </div>
        </Container>
        <span className="span">
          <div className="logout2">
            <Button className="logout1" onClick={handleLogOut}>
              Log out <FontAwesomeIcon icon="fas fa-sign-out-alt" />
            </Button>
          </div>
        </span>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
