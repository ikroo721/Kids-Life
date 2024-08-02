/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const ReviewRightBtn = (props) => {
    const {onClick} = props
  return (
    <div 
    onClick={onClick}
    className='h-5 w-5 rounded-full border-[1px] border-[#AFB0B0] -top-28 md:-top-12 lg:-top-12 right-0  flex items-center justify-center text-[#AFB0B0] absolute hover:bg-[#AFB0B0] hover:text-white' ><FaChevronRight className='text-[12px]' /></div>
  )
}

export default ReviewRightBtn