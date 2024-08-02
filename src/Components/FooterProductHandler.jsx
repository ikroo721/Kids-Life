/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const FooterProductHandler = ({children}) => {
  return (
    <div className='h-[90vh]  sm:h-[80vh] md:h-[80vh] lg:h-[45vh] w-[70vw] sm:w-3/4 md:w-3/4 lg:w-[17.3vw]  flex flex-col gap-6  ' >
          {children}
    </div>
  )
}

export default FooterProductHandler