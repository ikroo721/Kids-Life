/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const ShortCardIcon = ({children}) => {

  return (
    <div        className="   flex md:h-20 md:w-20 lg:h-24 lg:w-24 h-24 w-24 absolute  left-1/2 top-0 -translate-x-1/2  md:-translate-y-12 -translate-y-16 lg:-translate-y-16 transform items-center justify-center rounded-full  bg-[#008C99] hover:bg-[#2F2F2F]">
    {children}
  </div>
  )
}

export default ShortCardIcon