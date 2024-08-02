/* eslint-disable no-unused-vars */
import React from 'react'

const LeisureRightContent = () => {
  return (
    <div className='lg:h-[35vh]  w-[80%]   md:w-[43vw] lg:w-[36vw]  font-lato flex flex-col justify-between lg:gap-0 md:gap-0 gap-4  ' >
        <h1 className='font-bubblegum text-3xl'>Our Leisure Time</h1>
        <p className='md:text-[12px] text-[13px] lg:text-[14px]' >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        <div className='w-full  md:h-[20vh] lg:h-[20vh] flex items-center justify-between flex-wrap lg:gap-0 md:gap-0 gap-4'>
             <div className='h-12 w-full md:w-[21vw] lg:h-12 lg:w-[17vw] hover:border-[#F27C7E] border-[#FFFFFF] border-[2px] flex items-center px-3 rounded-md gap-3'>
                <div className='h-5 w-5 md:h-7 md:w-12 lg:h-6 lg:w-6 text-sm font-semibold rounded-full bg-[#F27C7E]  flex items-center justify-center text-white' >1</div>
                <h2 className=' lg:text-md font-semibold text-[#F27C7E]' >Guitar Music Planning</h2>

             </div>
             <div className='h-12 w-full md:w-[21vw] lg:h-12 lg:w-[17vw] border-[#FFFFFF] hover:border-[#EA9D5F] border-[2px] flex items-center px-3 rounded-md gap-3'>
                <div className='h-5 w-5 md:h-7 md:w-9 lg:h-6 lg:w-6 text-sm font-semibold rounded-full bg-[#EA9D5F] flex items-center justify-center text-white' >1</div>
                <h2 className='text-md font-semibold text-[#EA9D5F]' >Outdoor Games</h2>
             </div>
             <div className='h-12 w-full md:w-[21vw] lg:h-12 lg:w-[17vw] border-[#FFFFFF] hover:border-[#ACC158] border-[2px] flex items-center px-3 rounded-md gap-3'>
                <div className='h-5 w-5 md:h-7 md:w-11 lg:h-6 lg:w-6 text-sm font-semibold rounded-full bg-[#ACC158] flex items-center justify-center text-white' >1</div>
                <h2 className='text-md font-semibold text-[#ACC158]' >Knowledge Sharing</h2>

             </div>
             <div className='h-12 w-full md:w-[21vw] md:h-12 lg:h-12 lg:w-[17vw] border-[#FFFFFF] hover:border-[#4CBCD4] border-[2px] flex items-center px-3 rounded-md gap-3'>
                <div className='h-5 w-5 md:h-7 md:w-7 lg:h-6 lg:w-6 text-sm font-semibold rounded-full bg-[#4CBCD4] flex items-center justify-center text-white' >1</div>
                <h2 className='text-md font-semibold text-[#4CBCD4]' >Singing Class</h2>

             </div>
        </div>
    </div>
  )
}

export default LeisureRightContent