/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
const SmallHexagon = ({children}) => {
  return (
    <div className='h-10 w-10 clip-your-hexagon bg-white flex items-center justify-center'>
{children}
      </div>
  )
}

export default SmallHexagon