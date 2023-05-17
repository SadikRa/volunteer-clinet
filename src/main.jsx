import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import RegisterV from './Component/RegisterV/RegisterV';
import VolunteerList from './Component/VolunteerList/VolunteerList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/newVolunteer')
      },
      {
        path: '/registerv',
        element: <RegisterV></RegisterV>
      },
      {
        path: '/volunteerList',
        element: <VolunteerList></VolunteerList>,
        loader: () => fetch('http://localhost:5000/newVolunteer')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
