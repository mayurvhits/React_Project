import React, {useState, useEffect} from 'react'
import fireDb from "../firebase"
import { useParams, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fireDb.child(`contact/${id}`).get().then((snapshot) => {
            if(snapshot.exists()){
                setUser({...snapshot.val()})
            }else{
                setUser({})
            }
        })
    }, [id]);

    console.log("users", user);
  return (
      <>
    {/* <div className='show' >
        <Link>
        </Link>
        <h1 className='display-2'>User Id: {id}</h1>
        <hr />
        <ul className='list-group w-50'>
            <li className='list-group-item'>Name: {user.name}</li>
            <li className='list-group-item'>Phone: {user.email}</li>
            <li className='list-group-item'>City: {user.contact}</li>
            <Link to="/table">
                <Button className='btn btn-edit'>
                    Go back
                </Button>
            </Link>
        </ul>
    </div> */}
    <div style={{marginTop: "150px"}}>
       <div className='op1'>
        <div className='op2'>
           <p className='p1'>User contact details</p>
        </div>
        <div className='op3'>
          <strong>Id:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to="/table">
          <Button className='btn btn-edit'>Go back</Button>
          </Link>
        </div>
       </div>
    </div>
    </>
  )
}

export default View