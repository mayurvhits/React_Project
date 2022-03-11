import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMotorcycle)

function Firstnavbar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <FontAwesomeIcon className="fa" icon="fa-solid fa-motorcycle" />
        <Container>
          {/* <Navbar.Brand className="navbrand" href="#home">
            Welcome
          </Navbar.Brand> */}

          <div className="navlink">
            <Link className='welcome' to="/">
              <h4 className="h11">Home</h4>
            </Link>
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

            <Link className="link" to="/admintable">
              Agents
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
