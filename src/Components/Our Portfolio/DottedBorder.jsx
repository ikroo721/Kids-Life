/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const DottedBorder = ({children}) => {
  return (
    <div className=' border-t-0 border-l-0 border-r-0 border-dotted border-[#5c5c5c] border-[2px]' >
    <h2 className='text-2xl md:text-xl lg:text-2xl text-[#5c5c5c] font-bubblegum'>{children}</h2>
 </div>
  )
}

export default DottedBorder