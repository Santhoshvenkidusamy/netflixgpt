import React from 'react'
import logo from '../Images/Netflix_Logo_PMS.png';
import { signOut } from "firebase/auth";
import {auth} from '../Utils/FireBase';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import avatar from '../Images/avatar.png'
import { TbLogout } from "react-icons/tb";
import { useEffect } from 'react';
import { toogleGptSearch } from '../Utils/GptSlice';
import { LANG } from '../Utils/constants';
import { changeLang } from '../Utils/configSlice';
const Header = () => {
  const user = useSelector((store) =>store.user);
  const showGptSearch = useSelector(store =>store.gpt.showGptSearch);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      
    });
  }
  const handleSelect = (e) =>{
    console.log(e.target.value);
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className='fixed top-0  w-screen flex justify-between px-6 bg-gradient-to-b from-black z-50'>
      <div style={{color:'#e50914'}} className=''>
        <img
          className='w-[200px] cursor-pointer'
          src={logo}
          alt='logo'
          onClick={()=>navigate('/')}
        />
        </div>
        <div className='flex'>
        {user &&
        <>
         <div>
          {showGptSearch &&(
          <select className='mx-2 p-1 rounded-lg bg-white-400 text-black' onChange={(e)=>handleSelect(e)}>
            {LANG.map((lang)=>{
              return <option key={lang} className='bg-white text-black' >{lang}</option>
            })}
          </select>
          )}
          <button
           className='text-white bg-blue-600  rounded-lg mt-5 p-2 px-2 '
           onClick={()=>dispatch(toogleGptSearch())}
           >GPT Search</button>
          </div>
            <img src={avatar} alt='avatar' className='mx-4 w-8 h-8 mt-6 rounded-lg'/>
           <TbLogout  className='text-gray-100 w-8 h-8 cursor-pointer mt-6' onClick={()=>handleClick()}/>
            </>
}</div>
    </div>
  )
}

export default Header