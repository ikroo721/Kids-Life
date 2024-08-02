/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from './Navigation'
import Social from './Social'

const NavBtm = () => { 
  return (
    <div>
        <div className='h-[70px] w-full font-lato  flex justify-center flex-col items-center px-3' >
            <div className='md:w-full lg:w-3/4 h-full '>
            <div className='w-full h-full flex' >
              <div className=' w-full absolute h-[5px] bg-[#EBEBEB] left-0' ></div>
            <Navigation/>
            <Social/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NavBtm