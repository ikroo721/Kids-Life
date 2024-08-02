/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'


const ServiceCard = ({item}) => {
  const [hover, sethover] = useState(false)
  const HoverHandler=()=>{
    sethover(true)
  }
  const leaveHandler=()=>{
    sethover(false)
  }
  return (
    <div className='h-full md:w-32 lg:w-68  flex flex-col justify-evenly items-center font-lato  ' >
      <div className='md:h-2/5 lg:h-2/5 w-full flex items-center justify-center   ' >
      <div onMouseLeave={leaveHandler} onMouseEnter={HoverHandler}  className='h-32 w-32  rounded-full overflow-hidden border-4 border-white hover:border-[#008C99] relative' >
        { hover && <div className={`absolute h-full w-full  flex items-center justify-center scale-0 ${hover && "scale-100"} transition-all `} >
           <div className='w-[6vw] h-[6vw] rounded-full  bg-[#008C99CC] flex items-center justify-center' >
            <div className={`h-10 w-10 bg-white rounded-full flex items-center  justify-center 
              ${hover && "rotate-90"}`} >
              <FaLink className='text-sm text-[#008C99CC]'/>
            </div>
           </div>
        </div> }
        <img src={`${item.s}`} className='h-full w-full object-cover' alt="" />
      </div>
      </div>
      <h1 className='md:text-lg lg:text-2xl font-bubblegum lg:mt-2 text-nowrap text-[#2f2f2f] hover:text-[#008C99]' >{item.class}</h1>
      <p className='  text-[#5C5C5C] text-center w-[70%] md:text-[11px] lg:text-sm lg:w-64  ' >{item.p}</p>
    </div>
  )
}

export default ServiceCard