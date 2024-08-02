/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const LongTopLine = ({children,btm}) => {
  return (
    <div style={{backgroundColor:children}} className={`line ${btm=="btm" ? "absolute bottom-0" :""} z-[2]  h-1 w-full `}></div>
  )
}

export default LongTopLine