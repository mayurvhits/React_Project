import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function SingleData() {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCity, setNewCity] = useState('');

  const [newFile, setNewFile] = useState('');

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    console.log('enter1');
    await addDoc(usersCollectionRef, {
      name: newName,
      phone: newPhone,
      city: newCity,
      file: newFile,
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);

  return (
    <div>
      <>
        <div className="div1">
          <Form className="form" autoComplete="off">
            {console.log('Mayur', users)}
            <Form.Label>
              <h1 className="login">Fill up your info</h1>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="phone"
                placeholder="(+91) 1234567890 "
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your city name"
                onChange={(event) => {
                  setNewCity(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload document</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => {
                  setNewFile(event.target.value);
                }}
                multiple
              />
            </Form.Group>

            <Button
              className="button"
              variant="primary"
              onClick={() => createUser()}
              disabled={!(newCity && newPhone && newName)}
            >
              Submit
            </Button>
          </Form>
        </div>
        <>
          <div className="table1">
            <Table striped bordered hover>
              <thead>
                <div className="clientTitle">
                  <h1>Client list</h1>
                </div>
                <tr>
                  <th>Id</th>
                  <th>Applicants Name</th>
                  <th>Phone number</th>
                  <th>City</th>
                  <th>Documents</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                    <td>{user.file}</td>
                    <td>
                      <div>
                        <Link className="btn btn-primary hey" to={'/'}>
                          View
                        </Link>
                        <Link className="btn btn-outline-primary hey " to={'/'}>
                          Edit
                        </Link>
                        <Link className="btn btn-danger ">Delete</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      </>
    </div>
  );
}

export default SingleData;
