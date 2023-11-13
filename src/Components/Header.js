import React from 'react'
import logo from '../Images/Netflix_Logo_PMS.png';
import { signOut } from "firebase/auth";
import {auth} from '../Utils/FireBase';
import { useDispatch } from 'react-redux';
import {removeUser} from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import avatar from '../Images/avatar.png'
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      
    });
  }
  return (
    <div className='flex justify-between px-6 bg h-screen'>
      <div style={{color:'#e50914'}} className=''>
        <img
          className='w-[200px]'
          src={logo}
          alt='logo'
        />
        </div>
        <div className='flex mt-6'>
            <img src={avatar} alt='avatar' className='mx-4 w-10 h-10 rounded-lg'/>
          <button className='w-28 h-8 text-white font-bold rounded' style={{backgroundColor:'#e50914'}} 
          onClick={()=>handleClick()}
          >
            Sign out
            </button>
        </div>
    </div>
  )
}

export default Header