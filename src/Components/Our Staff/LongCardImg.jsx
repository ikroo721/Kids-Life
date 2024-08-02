/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const LongCardImg = ({children}) => {
  return (
    <div className='h-[18vh] w-full '>
            <img className='h-full w-full object-cover' src={children} alt="" />
    </div>
  )
}

export default LongCardImg