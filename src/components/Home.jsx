import React from 'react'
import {useState, useEffect} from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../redux/users/userActions'

import UserPlaceHolder from './UserPlaceHolder';
import UserCard from './UserCard';
import Loader from './Loader';

function UserDetail() {
  
  const [currentUser,setCurrentUser]=useState(null);
  const [isLoading, setIsLoading]=useState(false);

  const usersFromStore = useSelector(state=>state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchUsers()); // eslint-disable-next-line
  },[]); 
  
  const handleSingleUserRequest = async (index) => {
    setIsLoading(true);
    const response = await axios.get(`https://reqres.in/api/users/${index}`);
    setIsLoading(false);
    setCurrentUser(response.data.data);
  }
  
  return (
    <div>
      {isLoading
      ?<Loader />
      :(!currentUser?<UserPlaceHolder />: <UserCard data={currentUser}/>)
      }
      <h2 className=' mt-4 ml-2 nav-header text-center'>User's</h2>
      <div className="text-center">{
        usersFromStore.map((user,id)=>{
          return <span key={id}>
            <button className='btn btn-primary user-button m-2' type='button' onClick={()=>handleSingleUserRequest(id+1)} >{id+1}</button>
          </span>
        })
      }</div> 
    </div>
  )
}

export default UserDetail;