import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMotorcycle, faSignOutAlt);

function Firstnavbar() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = async () => {
    try {
      localStorage.clear();
      await logOut();
      navigate('/home');
      toast.success('Logged out successfully');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <FontAwesomeIcon className="fa" icon="fa-solid fa-motorcycle" />
        <Container>
          <div className="navlink">
            <Link className="welcome" to="/home">
              <h4 className="h11 buzz-out-on-hover">Home</h4>
            </Link>
            <Link className="link buzz-out-on-hover" to="/About">
              About us
            </Link>

            <Link className="link buzz-out-on-hover" to="/usertable">
              User info
            </Link>

            <Link className="link buzz-out-on-hover" to="/query">
              Query
            </Link>



            {localStorage.getItem('id') === 'SDkaYztRCyNDNoB7AMnDhzyPvF22' ? (
              <Link className="link buzz-out-on-hover" to="/admintable">
                Admin
              </Link>
            ) : null}
          </div>
        </Container>
        <span className="span">
          <div className="logout2">
            <Button className="logout1 buzz-out-on-hover" onClick={handleLogOut}>
              Log out <FontAwesomeIcon icon="fas fa-sign-out-alt" />
            </Button>
          </div>
        </span>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
