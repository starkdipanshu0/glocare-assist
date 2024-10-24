import React from 'react'
import Header from './Header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className=''>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout