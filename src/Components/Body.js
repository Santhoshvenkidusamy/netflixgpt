import React, {useEffect} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth } from '../Utils/FireBase';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addUser, removeUser } from '../Utils/userSlice'
import { Outlet } from 'react-router-dom';
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       const {uid, email, displayName } = user;
       dispatch(addUser({ uid:uid,email:email,displayName:displayName }))
       navigate('/browse')
     } else {
       dispatch(removeUser());
       navigate('/')
     }
   });
  return () => unsubscribe();
  },[])
  return (
    <div className='w-screen'>
      <Outlet />
    </div>
  )
}

export default Body