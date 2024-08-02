/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Home = () => {
  return (
    <>
   <div className='font-lato' >
   <Navbar/>
   <Outlet/>
    <Footer/>
   </div>
    </>
  )
}

export default Home