import React  from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './Components/Login'
import Body from './Components/Body'
import Browse from './Components/Browse'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    children:[
      {
        path:'/',
        element: <Login />
      },
      {
        path:'/browse',
        element: <Browse />
      }
    ]
  },
 ])
const App = () => {
  console.log(process.env)
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App