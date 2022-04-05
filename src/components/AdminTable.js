import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import {toast} from "react-toastify"
import { Button } from 'bootstrap';



const AdminTable = () => {
  const [data, setData] = useState({});
const navigate = useNavigate();
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

  const editUser = (id) => {
      navigate(`/editinfo/${id}`)
  }

  const viewUser = (id) => {
    navigate(`/viewinfo/${id}`)
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
            <th>Applicants Name</th>
            <th>Phone number</th>
            <th>City</th>
            <th>Documents</th>
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
                <th scope='row'>{index + 1}</th>
              <td>{data[id].name}</td>
              <td>{data[id].phone}</td>
              <td>{data[id].city}</td>
              <td>{data[id].file}</td>
              <td>
                <div>
                <button className="btn btn-primary hey" onClick={() => viewUser(id)} >View</button> 
                <button className="btn btn-outline-primary hey " onClick={() => editUser(id)}>Edit</button> 
                <button className="btn btn-danger " onClick={() => deleteUser(id)}>Delete</button>
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
}

export default AdminTable;
