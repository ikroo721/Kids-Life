/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6';

const NextArrow = (props) => {
    const {onClick} = props
    return (
      <div
       className=' h-32 w-5 absolute right-0 cursor-pointer'
        onClick={onClick}
      >
        <FaChevronRight className='h-32 w-5 text-white mr-2'  />
      </div>
    );
}

export default NextArrow