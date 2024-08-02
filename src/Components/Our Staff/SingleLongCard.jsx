/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SingleLongCard = ({children,bg}) => {
  return (
    <div style={{backgroundColor:bg}} className={`w-[80%] lg:w-[17vw] h-full flex flex-col items-center justify-start rounded-md  overflow-hidden relative`} >
          {children}
         </div>
  )
}

export default SingleLongCard