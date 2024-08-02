/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const SubNav = ({children}) => {
  return (
    <div className='h-[100px] w-full bg-red-#008C99 flex items-center justify-center bg-[#008C99] text-white'>
     <div className='h-1/2 md:w-[95%] w-full lg:w-[75%] flex items-center md:justify-between lg:justify-between px-2 lg:flex-row md:flex-row flex-col justify-center' >
     <h1 className='font-bubblegum text-3xl  ' >{children}</h1>
      <div className='flex items-center gap-2' >
        <a href="" className='text-[13px] '>Home</a>
        <FaAngleDoubleRight className='text-[13px] ' />
        <p className='text-[13px] '>{children}</p>
      </div>
     </div>
    </div>
  )
}

export default SubNav