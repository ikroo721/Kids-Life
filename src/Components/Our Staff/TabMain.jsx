/* eslint-disable no-unused-vars */
import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import TabPage from './TabPage'

const TabMain = () => {
  return (
    <div className='md:min-h-[60vh] lg:min-h-[60vh] w-full bg-[#F0F3F3] flex justify-center items-center' >
  <div className='md:w-full  lg:w-[75%] md:h-[55vh] lg:h-[50vh] lg:flex-nowrap md:flex-nowrap flex-wrap flex gap-5 justify-center  ' >
  <div className='w-[90%] md:w-[45vw] lg:w-[36vw] h-full ' >
    <div>
    <div className="flex   h-16 items-center ">
      <h1 className='text-3xl font-bubblegum' >School Experience</h1>
    </div>
    <div className={`  w-full block }  tab-content flex flex-col gap-2 `}>
        <p className='font-lato text-[14px] tracking-tight' >
        Praesent pulvinar massa nec augue malsuada in aliquam odio interdum. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante malesuada arca Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus. Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.
        </p>
        <div className='lg:h-[15vh] '>
          <ul className='flex flex-col md:justify-start lg:justify-center  gap-1 h-full w-full text-[14px]' >
            <li className='flex lg:items-center gap-2 md:items-start ' ><FaRegThumbsUp className='text-[#868686] md:ml-1 md:mt-1' /> Lorem ipsum dolor sit euismod diam pulvinar massa nec augue</li>
            <li className='flex lg:items-center gap-2 md:items-start ' ><FaRegThumbsUp className='text-[#868686] md:ml-1 md:mt-1' />Praesent convallis nibh ollicitudin sit amet massa nec augue</li>
            <li className='flex lg:items-center gap-2 md:items-start ' ><FaRegThumbsUp className='text-[#868686] md:ml-1 md:mt-1' />Nullam ac sapien sit ac malesuada arca in aliquam odio inter</li>
            <li className='flex lg:items-center gap-2 md:items-start ' ><FaRegThumbsUp className='text-[#868686] md:ml-1 md:mt-1' />Phasellus auctor augue adipiscing lobortis ligula lacinia sceler estas</li>
         </ul>
        </div>
      </div>
    </div>
  </div>
  <TabPage/>
  </div>
      
</div>
  )
}

export default TabMain