import React, { useState, useRef } from 'react';
import logo from '../Images/Netflix_Logo_PMS.png';
import LoginFooter from './LoginFooter';
import {checkValidData} from '../Utils/Validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../Utils/FireBase'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [signIn,setSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null);
  const navigate = useNavigate();
  const handleClick =()=>{
    setSignIn(!signIn);
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message);
    if(message) return;

    if(!signIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
         const user = userCredential.user;
         updateProfile(user, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        }).catch((error) => {
         setErrorMessage(error)
        });
        navigate('/body')
      })
  
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/body');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });
    }
  }
  return (
    <div className='bg'>
      <div style={{color:'#e50914'}} >
        <img
          className='w-[300px]'
          src={logo}
          alt='logo'
        />
      </div>
      <div className='flex justify-center '>
      <div className='flex justify-center w-96 bg-black opacity-90 text-white rounded-lg'>
      <div className='px-10'>
        <div className='text-3xl my-4 pt-20'>{signIn?'Sign Up':'Sign In'}</div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        {!signIn &&
        <div className=''>
          <input
          ref={name}
            className=' py-2 px-3 w-72  rounded'
            style={{backgroundColor:'#333333'}}
            type='text'
            placeholder='Full Name'
          />
        </div>
}
        <div className='mb-4 my-4'>
          <input
          ref={email}
            className=' py-2 px-3 w-72  rounded'
            style={{backgroundColor:'#333333'}}
            type='text'
            placeholder='Email or Phone Number'
          />
        </div>
        <div className='mb-4 my-4'>
          <input
          ref={password}
            className='py-2 px-3 w-72 rounded'
            style={{backgroundColor:'#333333'}}
            type='password'
            placeholder='Password'
          />
        </div>
        <span className='text-red-700 font-bold'>{errorMessage}</span>
        <button className='w-72 my-6  text-white font-bold py-2 px-4 rounded' style={{backgroundColor:'#e50914'}}>
        {signIn?'Sign Up':'Sign In'}
        </button>
        </form>
        <div className='my-10 text-gray-400 text-md'>{signIn?'New To Netflix?':'Already have an account?'} <span  onClick={handleClick} className='text-white cursor-pointer'>{signIn?'Sign up now.':'Sign in'}</span></div>
        <div className='h-10'></div>
      </div>
      </div>
      </div>
      <div className=''>
      <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
