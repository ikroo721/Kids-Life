/* eslint-disable no-unused-vars */
import React from 'react'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'

const NavTop = () => {
  return (
    <div className='flex h-[110px] lg:h-[100px] px-3 w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/header_bg.png")]  items-center justify-center '>
      <div className='w-3/4 h-2/3   flex sm:justify-center  lg:justify-between items-center sm:flex-wrap'>
        <div className="logo ">
            <img src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/logo.png" alt="" />
        </div>
        <div className='flex flex-col item-center ' >
            <a className=' text-[13px] tracking-wide lg:text-right flex items-center gap-1   text-[#5c5c5c] justify-end'>admin@kidslife.com <FaUser className='text-[11px] text-black' /></a>
            <p className='text-sm  lg:text-right flex items-center gap-1 text-[#5c5c5c] justify-end'>+91 1234567890 <FaPhoneAlt className='text-[11px] text-black' /></p>
        </div>
      </div>
    </div> 
  )
}

export default NavTop
