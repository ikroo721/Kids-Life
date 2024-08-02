/* eslint-disable no-unused-vars */
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const DayList = () => {
  return (
    <div className='w-full flex items-center justify-center font-lato' >
       <div className='w-[80%] md:w-[90%] lg:w-[75%] flex flex-col gap-5 items-start' >
       <div className='flex items-center justify-between w-full' >
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' ><FaChevronLeft/> Previous Day</button>
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' > Next Day <FaChevronRight/></button>
        </div>
        <div className='w-full h-8 flex items-center  bg-[#EEEEEE]'>
            <h2 className='text-lg font-bubblegum' >December 2021</h2>
        </div>
        <div className='md:bg-white lg:bg-transparent md:w-full md:h-32 ' >
          <h2 className='text-xl font-bubblegum' >Play with Colors</h2>
          <h3 className='md:border-b-[2px] lg:border-b-0 md:pb-2' ><span className='md:inline-block lg:inline-block block text-black leading-1 font-semibold' >December 18, 2021 @ 8:00 am -</span> 
          <span  className='md:inline-block lg:inline-block block text-black leading-1 font-semibold'  >December 18, 2024 @ 5:00 pm</span>
          <span className='md:block lg:inline-block' >|Recurring Event <a href="" className='text-[#008C99]  ' >(See all)</a></span></h3>
        </div>
        <div className='flex gap-5 lg:flex-nowrap md:flex-nowrap flex-wrap' >
            <div className='h-28 w-28 md:h-52 md:w-52 lg:h-96 lg:w-96 bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/play_with_colors-300x300.jpg")] bg-cover bg-center'>

            </div>
            <div className='w-3/4 ' >
                <p className='md:text-md' >Nunc eleifend leo urna. In vestibulum lobortis massa id tincidunt. Sed nec nibh sit amet odio viverra dictum. Donec vestibulum, ipsum non mollis aliquet, risus lectus cursus libero, et vehicula sapien ipsum in risus. Mauris posuere volutpat ipsum, quis sagittis tellus rutrum a. Aliquam erat volutpat. Suspendisse bibendum molestie lectus, quis semper sapien rutrum et. Aenean eget risus ultricies, semper ante eu, ultricies est. In accumsan sem quis ante condimentum faucibus. Nullam tristique lectus ut magna tincidunt, nec volutpat est…</p>
                <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center' >Find out More <FaChevronRight className='text-[10px]'/></button>
            </div>
        </div>
        <div className='flex items-center justify-between w-full' >
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' ><FaChevronLeft/> Previous Day</button>
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' > Next Day <FaChevronRight/></button>
        </div>
       </div>
    </div>
  )
}

export default DayList