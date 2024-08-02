/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6'

const ReviewLeftBtn = (props) => {
    const {onClick} = props
  return (
    <div
    onClick={onClick}
    className='h-5 w-5 rounded-full border-[1px] absolute -top-28 md:-top-12 lg:-top-12 right-6 border-[#AFB0B0]  flex items-center justify-center text-[#AFB0B0] hover:bg-[#AFB0B0] hover:text-white' ><FaChevronLeft className='text-[12px]' /></div>
  )
}

export default ReviewLeftBtn