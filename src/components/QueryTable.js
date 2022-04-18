import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Firstnavbar from './Firstnavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrash);

const QueryTable = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fireDb.child('query').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
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
    if (window.confirm('Are you sure that you wanted to delete that query?')) {
      fireDb.child(`query/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success('Contact deleted successfully');
        }
      });
    }
  };

  //   const editUser = (id) => {
  //       navigate(`/editinfo/${id}`)
  //   }

  //   const viewUser = (id) => {
  //     navigate(`/viewinfo/${id}`)
  // }

  return (
    <>
      <Firstnavbar />
      <div className="tableButton">
        <div>
          <button
            className="button5 btn btn-primary buzz-out-on-hover"
            onClick={() => navigate('/admintable')}
          >
            Applicants Info
          </button>
        </div>
        <div>
          <button className="button5 btn btn-primary buzz-out-on-hover">Query Info</button>
        </div>
      </div>
      <h4>
        <p className="home3">Query information :</p>
      </h4>
      <hr />
      <div className="table1">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Applicants Name</th>
              <th>Email</th>
              <th>Query</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].query}</td>
                  <td>
                    <div className="danger">
                      <button onClick={() => deleteUser(id)}>
                        <FontAwesomeIcon className="fonticon buzz-out-on-hover" icon="fa-solid fa-trash" />
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

export default QueryTable;
