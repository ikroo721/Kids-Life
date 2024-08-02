/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {  FaChevronLeft } from 'react-icons/fa6';

const PrevArrow = (props) => {
      const {onClick} = props
    return (
        <div
        className=' z-[40] h-32 w-5 absolute left-0 cursor-pointer'
         onClick={onClick}
       >
        <FaChevronLeft className='h-32 w-5 text-white ml-2' />
       </div>
    );
}

export default PrevArrow