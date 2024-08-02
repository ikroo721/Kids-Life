/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const MapPage = () => {
    const [active, setactive] = useState(false)
    const Handler=()=>{
      setactive(true)
    }
    const LeaveHandler=()=>{
      setactive(false)
    }
  return (
    <div className='min-h-[30vh] mt-5 w-full bg-[#F0F3F3] flex items-center justify-center flex-col gap-10' >
        <div onMouseEnter={Handler} onMouseLeave={LeaveHandler}  className='md:w-[95%] lg:w-[75.8%] h-[64.7%] relative ' >
      <iframe  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56617.007843279906!2d152.97375290897563!3d-27.513963306114192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x6b915a82de0a1c91%3A0x1c02a35e27d73730!2sYeronga%20QLD%204104%2C%20Australia!3m2!1d-27.514045499999998!2d153.0149526!5e0!3m2!1sen!2s!4v1722348957390!5m2!1sen!2s" className='w-full h-[64vh]'
      style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      { !active && <div className='h-full w-full bg-[#515152b6] absolute top-0' ></div>  }
      </div>
    </div>
  )
}

export default MapPage