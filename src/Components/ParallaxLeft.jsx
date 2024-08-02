/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGlassMartini, FaMagic, FaTachometerAlt} from 'react-icons/fa'
import { FaBullseye, FaMusic, FaPencil, } from 'react-icons/fa6'

const ParallaxLeft = () => {
  return (
    <div className=' md:w-[60%] lg:w-[50%]  font-lato  flex flex-col justify-between md:p-5 lg:p-1 h-full px-2 relative  ' >
       <div className='h-16 md:px-0 px-[5px] lg:px-0 ' >
       <h1 className='text-3xl text-white font-bubblegum  '>Play As You Learn</h1>
       </div>
        <div className='w-full  flex flex-wrap lg:gap-0     text-white md:gap-2  '>  
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2  lg:h-32 flex flex-col gap-2 md:gap-1 lg:gap-1  '>  
            <div className='flex md:gap-2 gap-5 lg:gap-4 items-center ' > 
              <div className='md:h-12 h-12 w-12 md:w-16 lg:h-12 lg:w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaGlassMartini className='md:text-md'/>
                </div> 
              <h1 className='text-xl font-bubblegum'>English Summer Camp</h1> </div>
              <p className=' leading-2 tracking-wide  md:text-[12px] lg:text-sm' >
Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2  lg:h-32 flex flex-col gap-3 md:gap-1 lg:gap-1 '>
            <div className='flex gap-4 items-center ' > 
              <div className='h-12 w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaMagic/>
                </div> 
              <h1 className='text-xl font-bubblegum'>Personalizing</h1> </div>
              <p className=' leading-2 tracking-wide md:text-[11px] lg:text-sm ' >Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2  lg:h-32 flex flex-col gap-3 md:gap-1 lg:gap-1 '>
            <div className='flex gap-5 items-center ' > 
              <div className='h-12 w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaTachometerAlt/>
                </div> 
              <h1 className='text-xl font-bubblegum'>Sports Camp</h1> </div>
              <p className=' leading-2 tracking-wide md:text-[11px] lg:text-sm' >Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2 lg:h-32 flex flex-col gap-3 md:gap-1 lg:gap-1 '>
            <div className='flex gap-5 items-center ' > 
              <div className='h-12 w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaBullseye/>
                </div> 
              <h1 className='text-xl font-bubblegum'>Swimming Camp</h1> </div>
              <p className=' leading-2 tracking-wide md:text-[11px] lg:text-sm ' >Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2  lg:h-32 flex flex-col gap-3 md:gap-1 lg:gap-1 '>
            <div className='flex gap-5 md:gap-3 items-center ' > 
              <div className='h-12 w-14 lg:w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaPencil/>
                </div> 
              <h1 className='text-xl font-bubblegum'>Drawing and Painting</h1> </div>
              <p className='leading-2 tracking-wide md:text-[11px] lg:text-sm' >Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>
          <div className='px-[5px] lg:px-0 md:px-0 md:w-[45%] lg:w-1/2  lg:h-32 flex flex-col gap-3 md:gap-1 lg:gap-1 '>
            <div className='flex gap-5 items-center ' > 
              <div className='h-12 w-12 rounded-full text-[#5C5C5C] bg-white flex items-center justify-center'>
                <FaMusic/>
                </div> 
              <h1 className='text-xl font-bubblegum'>sing & Dance</h1> </div>
            <p className=' leading-2 tracking-wide md:text-[11px] lg:text-sm' >Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
          </div>  
       
        </div>
    </div>
  )
}

export default ParallaxLeft