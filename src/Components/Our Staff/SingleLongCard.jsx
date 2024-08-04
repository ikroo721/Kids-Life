/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SingleLongCard = ({children,bg}) => {
  return (
    <div style={{backgroundColor:bg}} className={`w-[80%] sm:w-[70%] lg:w-[17vw] sm:h-[65vh]  flex flex-col items-center justify-start rounded-md  overflow-hidden relative`} >
          {children}
         </div>
  )
}

export default SingleLongCard