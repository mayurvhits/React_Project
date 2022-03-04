import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Firstnavbar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='navbrand' href="#home">Welcome</Navbar.Brand>
          <div className="navlink">
            
              <Link className="link" to="/login">
                Applicants
              </Link>

              <Link className="link" to="/About">
                Upload
              </Link>

              <Link className="link" to="/help">
                About
              </Link>
            
              <Link className="link" to="/query">
                query
              </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
