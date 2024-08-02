/* eslint-disable no-unused-vars */
import React from 'react'
import SubNav from '../About/SubNav'
import { Outlet } from 'react-router-dom'
import Category from '../Our Portfolio/Category'

const Shop = () => {
  return (
    <div >
           <SubNav>
          Shop
        </SubNav>
    <div className='h-full w-full flex items-center justify-center bg-[#F0F3F3]' >
    <div className='lg:w-[75%] min-h-screen flex mt-16 lg:flex-nowrap md:flex-nowrap flex-wrap md:justify-normal lg:justify-normal justify-center' >
      <div className='min-h-screen w-full  md:w-full  lg:w-[75%]' >
      <Outlet/>
      </div>
      <div className='min-h-screen w-[80%] md:w-[35%] lg:w-[25%]' >
        <Category/>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Shop