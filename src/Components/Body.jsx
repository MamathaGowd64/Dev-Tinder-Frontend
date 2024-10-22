import React from 'react'
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='bg-slate-500'>
          <NavBar />
          <Outlet />
          <Footer/>
    </div>
  )
}

export default Body