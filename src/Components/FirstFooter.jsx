/* eslint-disable no-unused-vars */
import React from 'react'
import { BiCheck } from 'react-icons/bi'

const FirstFooter = () => {
  return (
   <>
    <p className='text-sm tracking-wide font-lato'>Happy <span className='text-[#2D8D99] font-semibold'>Kids Life</span> comes with powerful theme options, which empowers you to quickly and easily build incredible store.</p>
                <ul className='font-lato flex flex-col gap-3'>
                    <li className='flex items-center gap-1 text-sm'> <BiCheck className='stroke-2 w-5 h-5 stroke-[#008C99]'/> English Gramer Class</li>
                    <li className='flex items-center gap-1 text-sm'><BiCheck className='stroke-2 w-5 h-5 stroke-[#008C99]'/>Music Class</li>
                    <li className='flex items-center gap-1 text-sm'><BiCheck className='stroke-2 w-5 h-5 stroke-[#008C99]'/>Swimming Karate</li>
                    <li className='flex items-center gap-1 text-sm'><BiCheck className='stroke-2 w-5 h-8 stroke-[#008C99]'/>Lot of HTML Styles</li>
                    <li className='flex items-center gap-1 text-sm'><BiCheck className='stroke-2 w-5 h-5 stroke-[#008C99]'/>Unique News Page Design</li>
                </ul>
   </>
  )
}

export default FirstFooter