import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Firstnavbar from './Firstnavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEye } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEllipsisV, faEye);

const AdminTable = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fireDb.child('contact').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        // console.log(snapshot.val());
        setData({ ...snapshot.val() });
        // console.log('hi1');
      } else {
        setData({});
        // console.log('hi2');
      }
    });

    return () => {
      setData({});
      // console.log('hi3');
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

  const viewUser = (id) => {
    navigate(`/viewinfo/${id}`);
  };

  return (
    <>
      <Firstnavbar />
      <div className="tableButton">
        <div>
          <button className="button btn btn-primary buzz-out-on-hover">
            Applicants Info
          </button>
        </div>
        <Link to={'/querytable'}>
          <button className="button5 btn btn-primary buzz-out-on-hover">
            Query Info
          </button>
        </Link>
      </div>
      <h4>
        <p className="home3">Applicants information :</p>
      </h4>
      <hr />
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
                      <button className="" onClick={() => viewUser(id)}>
                        <FontAwesomeIcon
                          className="fonticon buzz-out-on-hover"
                          icon="fa-solid fa-eye"
                        />
                      </button>
                      <button className="home3 " onClick={() => editUser(id)}>
                        <FontAwesomeIcon
                          className="fonticon buzz-out-on-hover"
                          icon="fas fa-edit"
                        />
                      </button>
                      <button className="home3" onClick={() => deleteUser(id)}>
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
    </>
  );
};

export default AdminTable;
