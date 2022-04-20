import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Firstnavbar from './Firstnavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEllipsisV, faEdit, faFacebookSquare, faTwitter, faInstagram);

const UserTable = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fireDb
      .child('contact')
      .orderByChild('id')
      .equalTo(localStorage.getItem('id'))
      .on('value', (snapshot) => {
        if (snapshot.val() !== null) {
          console.log(snapshot.val());
          setData({ ...snapshot.val() });
          console.log('hi1');
        } else {
          setData({});
          console.log('hi2');
        }
      });

    return () => {
      setData({});
      console.log('hi3');
    };
  }, []);

  const deleteUser = (id) => {
    if (
      window.confirm('Are you sure that you wanted to delete that contact?')
    ) {
      fireDb.child(`contact/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success('Contact deleted successfully');
        }
      });
    }
  };

  const editUser = (id) => {
    navigate(`/editinfo/${id}`);
  };

  // const viewUser = (id) => {
  //   navigate(`/viewinfo/${id}`);
  // };

  return (
    <>
      <Firstnavbar />

      <div className="view-b">
        <h4>
          <p className="home3">User information :</p>
        </h4>
        <hr className="home3" />
        <div className="table1">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Applicants Name</th>
                <th>Phone number</th>
                <th>City</th>
                <th>Documents</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].phone}</td>
                    <td>{data[id].city}</td>
                    <td>{data[id].file}</td>
                    <td>
                      <div>
                        <button onClick={() => editUser(id)}>
                          <FontAwesomeIcon
                            className="fonticon buzz-out-on-hover"
                            icon="fas fa-edit"
                          />
                        </button>
                        <button
                          className="home3"
                          onClick={() => deleteUser(id)}
                        >
                          <FontAwesomeIcon
                            className="fonticon buzz-out-on-hover"
                            icon="fa-solid fa-trash"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <div class="footer-dark down ">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col item social ">
                <a href="https://www.facebook.com/login/" target="_blank">
                <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-facebook-square" />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-twitter" />
                </a>
                
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon className="fonticon1 buzz-out-on-hover" icon="fa-brands fa-instagram"/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UserTable;
