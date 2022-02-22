import img2 from './assets/profile.jpeg';
import './FormClass.css';
import React from 'react';
import Sidebar from './Sidebar';
import {
  Navbar,
  Container,
  InputGroup,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGhost,
  faMagnifyingGlass,
  faBell,
  faUserAstronaut,
  faTv,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faGhost,
  faMagnifyingGlass,
  faBell,
  faUserAstronaut,
  faTv,
  faSliders
);

const Formclass = () => {

  
  return (
    <>
        
        <Navbar className="navbar1">
          <div className="d-flex">
            <div className="d-flex hey2 ">
              <div className="icon-div">
                 <button onClick="w3_open()"><FontAwesomeIcon className="icon1" icon="fa-solid fa-ghost" /></button>
              </div>
              <InputGroup className="yoo">
                <FormControl
                  className="me-2"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="d-flex justify-content-around yoo21 ">
              <div className="astronaut">
                <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />
                <a className="b" href="">
                  Gilly Video
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-tv" />
                <a className="b" href="">
                  Video Q / A <span></span>
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-sliders" />
                <a className="b" href="">
                  My Account
                </a>
              </div>
              <div>
                <button className="user">Usrers</button>
              </div>
            </div>
          </div>
          <div className="d-flex p">
            <FontAwesomeIcon className="po" icon="fa-solid fa-bell" />
            <img
              className="img1"
              src={img2}
              alt="No Img"
              width="40"
              height="40"
            />
          </div>
        </Navbar>

        <Container className=" mt-5 mr">
          <div className="d-flex justify-content-around h1">
            <div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="hi"> First Name</Form.Label>
                <Form.Control className="hi" type="text" placeholder="jese" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="hi">Last Name</Form.Label>
                <Form.Control className="hi" type="text" placeholder="leos" />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex justify-content-around  h1">
            <div>
              <Form.Group className="mb-3">
                <Form.Label className="hi">Email</Form.Label>
                <Form.Control
                  className="hi"
                  type="text"
                  placeholder="example@company.com"
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="hi">Phone number</Form.Label>
                <Form.Control
                  className="hi"
                  type="text"
                  placeholder="+(123) 456 7890"
                />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex justify-content-around  h1">
            <div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="hi">Role</Form.Label>
                <NavDropdown
                  className="h9"
                  title="Select your role"
                ></NavDropdown>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="hi">Status</Form.Label>
                <NavDropdown
                  className="h9"
                  title="Select your status"
                ></NavDropdown>
              </Form.Group>
            </div>
          </div>
          <div className="button1">
            <button className="button2">Save</button>
          </div>
        </Container>
      
    </>
  );
};

export default Formclass;
