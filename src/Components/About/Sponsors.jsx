/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import SponsorSlider from './SponsorSlider'
export const Left= (props)=>{
  const {onClick} = props
  return <div
  onClick={onClick}
  className=' rounded-full absolute right-4 cursor-pointer  -top-[45%] flex items-center justify-center text-[#AFB0B0]' ><FaChevronLeft className='text-[25px]  ' /></div>
}
export const Right=(props)=>{
  const {onClick} = props
  return <div
  onClick={onClick}
  className=' rounded-full absolute right-0 cursor-pointer -top-[45%] flex items-center justify-center text-[#AFB0B0]' ><FaChevronRight className='text-[25px]  ' /></div>
}
const Sponsors = () => {
  return (
    <div className='' >
          <div className='h-[40vh]  w-full bg-[#F0F3F3] flex items-center justify-center' >
      <div className='h-[50vh] w-full md:w-[100%] lg:w-[75%]   flex items-center flex-col justify-center gap-5 ' >
               <div className='flex w-full justify-between px-2' >
               <h1 className='font-bubblegum text-3xl text-[#2F2F2F]'>Our Sponsors</h1>
               <div className='flex gap-1 relative'>
               {/* <Left/>
              <Right/> */}
               </div>
               </div>
               <div className='h-32 w-full bg-blue-200 '>
                    <SponsorSlider/>        
               </div>
      </div>
    </div>
    </div>
  )
}

export default Sponsors