import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import {toast} from "react-toastify"

const NewTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child('contact').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
        console.log('hi1');
      } else {
        setData({});
        console.log('hi2');
      }
    });

    return  () => {
    setData({});
    console.log("hi3");
    };
  }, []);

  const deleteUser = (id) => {
    if(window.confirm("Are you sure that you wanted to delete that contact?")){
        fireDb.child(`contact/${id}`).remove((err) => {
            if(err){
                toast.error(err)
            }else{
                toast.success("Contact deleted successfully")
            }
        })
    }
  }
  return (
      <>
      <div className="table1">
        
        <Table striped bordered hover>
          <thead>
        <div className='clientTitle'><h1>Client list</h1></div>
            {/* <caption >Client list</caption> */}
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>10</td>
              <td>roy</td>
              <td>Larry</td>
              <td>@twitter</td>
            </tr> */}
           {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                <Link className="btn btn-primary hey" to={`view/${id}`} >View</Link>
                <Link className="btn btn-outline-primary hey " to={`update/${id}`}>Edit</Link> 
                <button className="btn btn-danger " onClick={() => deleteUser(id)}>Delete</button>
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

export default NewTable;
