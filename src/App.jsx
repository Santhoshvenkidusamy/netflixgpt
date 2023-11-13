import React , {useEffect} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './Components/Login'
import Body from './Components/Body'
import appStore from './Utils/store';
import { onAuthStateChanged } from "firebase/auth";
import {Provider} from 'react-redux';
import {auth } from './Utils/FireBase';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addUser, removeUser } from './Utils/userSlice'
const appRouter = createBrowserRouter([
  {
    path:'',
    element: <Login />
  },
  {
    path:'/body',
    element: <Body />
  }
])
const App = () => {
  const dispatch = useDispatch();
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName } = user;
      dispatch(addUser({ uid:uid,email:email,displayName:displayName }))
      
    } else {
      dispatch(removeUser());
    }
  });

 },[])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App