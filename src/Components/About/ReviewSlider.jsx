/* eslint-disable no-unused-vars */
import React from 'react'
import { FaStar } from 'react-icons/fa6'
const ReviewSlider = () => {
  return (
    <div className='flex flex-col gap-5 md:px-1' >
    <blockquote className='rounded-xl lg:h-24 md:h-40 md:rounded-lg w-full  flex items-center justify-center text-white relative bg-[#008C99] lg:rounded-md ' >
        <q className='before:font-tinos before:absolute before:left-3 relative before:top-1 before:content-["\201C"] before:text-7xl after:font-tinos after:content-["\201D"] after:text-7xl w-full h-full text-[13px]  after:absolute after:right-3 after:-bottom-8 p-10 flex items-center justify-center px-12 leading-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</q>
        <div className='w-8 h-4 tri rotate-180 absolute bg-[#008C99] md:left-7 lg:left-7 -bottom-4 ' ></div>
    </blockquote>
    <div className='lg:h-20 md:h-20  w-full flex flex-col items-center lg:flex-row md:flex-row  gap-4 font-lato ' >
        <div className='lg:h-full md:h-full h-20 w-20  bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/student.jpg")] bg-cover bg-center border-[4px] border-[#FFFFFF]' ></div>
        <div className='lg:w-4/5 md:w-4/5 h-20 md:h-full lg:h-full lg:text-start md:text-start text-center flex flex-col justify-between  ' >
        <h3 className='text-lg font-semibold text-[#000000]' >John Doe</h3>
        <h4 className='text-sm font-lato' >CEO & Founder - Dhoom Inc</h4>
        <div className='flex h-5 w-full lg:justify-start md:justify-start justify-center  items-center gap-[2px] ' >
            <FaStar className='text-[#F7C602] text-sm' />
            <FaStar className='text-[#F7C602] text-sm' />
            <FaStar className='text-[#F7C602] text-sm' />
            <FaStar className='text-[#F7C602] text-sm' />
            <FaStar className='text-[#FFFFFF] text-sm'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ReviewSlider