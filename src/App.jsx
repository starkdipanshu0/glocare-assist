import { useState } from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";



import About from './pages/About';
import Contact from './pages/Contact';
import AppLayout from './components/Layout/AppLayout';
import Notfound from './pages/Notfound';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Blogs from './pages/Blogs';

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
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
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
