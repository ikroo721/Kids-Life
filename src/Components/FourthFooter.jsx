/* eslint-disable no-unused-vars */
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

const FourthFooter = () => {
  return (
    <>
    <ul className='font-lato flex flex-col gap-3'>
                    <li className='flex items-start  gap-3 text-sm'> <FaMapMarkerAlt className='text-[15px] text-[#008C99] mt-[5px] ml-[5px]'/> 121 King St, Melbourne VIC 3000, Australia</li>
                    <li className='flex items-center gap-2 ml-[5px] text-sm'><FaPhoneAlt  className='text-[15px] text-[#008C99]'/>(000) 233 - 3236</li>
                    <li className='flex items-center gap-2 ml-[5px] text-sm'> <FaEnvelope className='text-[15px] text-[#008C99]' /> 
                    kidslife@somemail.com</li>               
                </ul>
                <div className='font-lato flex flex-col mt-10 gap-2'>
                    <h3 className='text-sm font-semibold ' >WE’RE SOCIAL</h3>
                    <form className='flex items-start md:flex-col  md:gap-2 lg:gap-0 lg:flex-row' >
                        <div className='h-12 w-full relative' >
                        <input type="text" className='h-12 w-full  pl-7 border-[1px]  rounded-l-md text-sm' placeholder={` Enter Email Address`} />
                            <FaRegEnvelope className='md:text-lg lg:text-xl top-1/2 left-2 -translate-y-1/2 text-[#008C99] absolute' />
                        </div>
                        <button className='p-[10px] h-full md:rounded-l-md lg:rounded-l-none lg:rounded-r-md   text-sm tracking-tighter md:px-[18px] md:py-[12px] lg:px-[15px] bg-[#008C99] text-white' >Signup</button>
                    </form>
                </div>
    </>
  )
}

export default FourthFooter