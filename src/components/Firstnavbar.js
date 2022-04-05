import React from 'react';
import { Navbar, Container, Dropdown } from 'react-bootstrap';
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

            {/* <Link className="link" to="/form">
              form
            </Link> */}

            {/* <Link className="link" to="/addedit">
              AddEdit
            </Link> */}

            {/* <Link className="link" to="/table">
              Table
            </Link> */}

<Link className="link" to="/home">
              Home
            </Link>

            
          </div>
        </Container>
        <span className='span'>
        <>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Users
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark" align="end"  id="dropdown-menu-align-end">
      {/* <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item> */}
      <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
      {/* <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item> */}
    </Dropdown.Menu>
  </Dropdown>


</>
        </span>
      </Navbar>
    </div>
  );
}

export default Firstnavbar;
