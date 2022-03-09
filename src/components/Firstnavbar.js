import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Firstnavbar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand className="navbrand" href="#home">
            Welcome
          </Navbar.Brand> */}
          <div className="navlink">
            <h4 className='h11'>Welcome</h4>
            <Link className="link" to="/About">
              About us
            </Link>

            <Link className="link" to="/Applicants">
              Applicants
            </Link>

            {/* <Link className="link" to="/About">
                Upload
              </Link> */}

            <Link className="link" to="/query">
              Query
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
