/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const OverLayHeading = ({children}) => {
  return (
    <div className='h-1/2 w-full flex items-end pb-4 justify-center' >
      <h1 className='uppercase text-xl font-bold'>{children}</h1>
    </div>
  )
}

export default OverLayHeading