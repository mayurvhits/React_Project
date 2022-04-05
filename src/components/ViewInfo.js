import React, {useState, useEffect} from 'react'
import fireDb from "../firebase"
import { useParams, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ViewInfo = () => {

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
    <div className='show' >
        
        <h3 className=''>User Id: {id}</h3>
        {console.log(id)}
        <hr />
        <ul className='list-group w-50'>
            <li className='list-group-item'>Name: {user.name}</li>
            <li className='list-group-item'>Phone: {user.phone}</li>
            <li className='list-group-item'>City: {user.city}</li>
            <li className='list-group-item'>file: {user.file}</li>
        </ul>
        <Link to="/admintable">
        <Button className="button-p" variant="primary" type="submit"  value='save'>
              Go back 
            </Button>
            </Link>
    </div>
  )
}

export default ViewInfo