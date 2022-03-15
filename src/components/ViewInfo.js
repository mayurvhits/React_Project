import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

const ViewInfo = () => {

    const [userRegistraion, setuserRegistraion] = useState({
        name: '',
        phone: '',
        city: '',
        file: ''
    });

    const {id} = useParams();

    useEffect(() => {
       loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/posts/${id}`);
        setuserRegistraion(res.data);
    };

  return (
    <div className='show' >
        <Link>
        </Link>
        <h1 className='display-2'>User Id: {id}</h1>
        <hr />
        <ul className='list-group w-50'>
            <li className='list-group-item'>Name: {userRegistraion.name}</li>
            <li className='list-group-item'>Phone: {userRegistraion.phone}</li>
            <li className='list-group-item'>City: {userRegistraion.city}</li>
        </ul>
    </div>
  )
}

export default ViewInfo