import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import axios from 'axios';

const AdminTable = () => {

  const [users, setUser] = useState([]);

  useEffect(() => {
     loadUsers();
  }, []);

  const loadUsers = async () => {
      const result = await axios.get("http://localhost:5000/posts");
      setUser(result.data);
      // setUser(result.data.reverse());            //  to reverse the order of apllicants list
  };

  const deleteUser = async (id) => {
     await axios.delete(`http://localhost:5000/posts/${id}`);
     loadUsers();
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
          {
            users.map((user, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>{user.file}</td>
              <td>
                <div>
                <Link className="btn btn-primary hey" to={`viewinfo/${user.id}`} >View</Link>
                <Link className="btn btn-outline-primary hey " to={`editinfo/${user.id}`}>Edit</Link> 
                <Link className="btn btn-danger " onClick={() => deleteUser(user.id)}>Delete</Link>
               </div>
              </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default AdminTable;
