/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const FooterProductHandler = ({children}) => {
  return (
    <div className='min-h-[20vh]  w-[80%] sm:h-[50vh] md:h-[60vh] lg:h-[45vh] sm:w-[80vw]  
    md:w-[22vw] lg:w-[17.3vw]  flex flex-col gap-6  ' >
          {children}
    </div>
  )
}

export default FooterProductHandler