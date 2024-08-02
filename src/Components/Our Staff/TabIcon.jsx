/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TabIcon = ({children}) => {
  return (
    <div className='lg:h-[12vh]  '>
          <ul className='flex flex-col  justify-center gap-1 h-full w-full' >
            <li className='flex items-center gap-2 text-sm' >{children} Lorem ipsum dolor sit
            </li>
            <li className='flex items-center gap-2 text-sm' >{children} Praesent convallis nibh
            </li>
            <li className='flex items-center gap-2 text-sm' >{children} Nullam ac sapien sit
            </li>
            <li className='flex items-center gap-2 text-sm' >{children} Phasellus auctor augue
            </li>
         </ul>
    </div>
  )
}

export default TabIcon