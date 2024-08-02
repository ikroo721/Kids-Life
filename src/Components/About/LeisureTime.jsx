/* eslint-disable no-unused-vars */
import React from 'react'
import LeisureSlider from './LeisureSlider'
import LeisureRightContent from './LeisureRightContent'

const LeisureTime = () => {
  return (
    <div className=' md:min-h-[50vh] lg:min-h-[50vh] w-full bg-[#F0F3F3] flex items-center justify-center'>
      <div className='md:min-h-[50vh] lg:min-h-[50vh] md:w-full flex-wrap  lg:w-[75%]  flex items-center justify-center gap-5' >
     <LeisureSlider/>
     <LeisureRightContent/>
      </div>
    </div>
  )
}

export default LeisureTime