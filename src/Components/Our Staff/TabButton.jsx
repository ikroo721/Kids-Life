/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TabButton = ({children,active,showTab}) => {
  return (
    <button
    className={`px-5 py-2 lg:px-5 md:px-3 md:py-1 lg:py-2 text-white  font-semibold rounded-t-lg capitalize  ${
      active === children ? 'bg-[#CF571B] ' : ' bg-[#008C99]'
    }`}
    onClick={() => showTab(children)}
  >
    {children}
  </button>
  )
}

export default TabButton