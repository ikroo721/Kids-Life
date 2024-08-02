/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const LongCardHead = ({children}) => {
  return (
    <div className="h-16 flex items-center  " >
    <h1 className="text-xl font-bubblegum" >{children}</h1>
  </div>
  )
}

export default LongCardHead