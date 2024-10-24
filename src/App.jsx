import { useState } from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'


import About from './pages/About';
import Contect from './pages/Contect';
import AppLayout from './components/Layout/AppLayout';
import Notfound from './pages/Notfound';
import Home from './pages/Home/Home';

const router = createBrowserRouter([

{
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contect",
        element: <Contect/>,
      },
      {
        path: "/*",
        element: <Notfound/>,
      }

    ]
  },
  
]);

function App() {
  

  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
