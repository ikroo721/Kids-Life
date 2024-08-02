/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TabContent = ({children,active,tab}) => {
  return (
    <div className={`${active === tab ? 'bg-black  w-full block ' : 'hidden'} md:h-[40vh] lg:h-[33vh] p-4 tab-content bg-white  flex flex-col gap-5 `}>
       {children}
      </div>
  )
}

export default TabContent