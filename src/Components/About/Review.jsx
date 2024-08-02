/* eslint-disable no-unused-vars */
import React from 'react'
import ReviewByPeople from './ReviewByPeople'

const Review = () => {
  return (
    <div className='min-h-[55vh]  md:min-h-[50vh] lg:min-h-[50vh]  w-full bg-[#F0F3F3] flex items-center justify-center' >
      <div className='min-h-[55vh] mt-10 lg:mt-0 md:mt-0 md:min-h-[50vh] mb-10 lg:mb-0 md:mb-0 lg:min-h-[50vh]  md:w-full  lg:w-[75%]   flex items-center justify-center gap-5 lg:flex-nowrap md:flex-nowrap flex-wrap' >
       <ReviewByPeople/>
       <ReviewByPeople/>
      </div>
    </div>
  )
}

export default Review