/* eslint-disable no-unused-vars */
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
const Photos = () => {
  return (
    <div className='flex items-center justify-center lg:mt-10 font-lato mt-5'>
       <div className=' md:w-[90%] w-[95%] lg:w-[75%] ' >
           <div className=' w-72  md:w-52 lg:w-96   ' >
        <div className='bg-white flex items-center flex-col lg:pb-7 md:pb-3 pb-5 lg:gap-2 md:gap-1 gap-1 ' >
        <div className='h-72 w-72 md:h-52 md:w-52 lg:h-96 lg:w-96 bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/play_with_colors-300x300.jpg")] bg-cover bg-center'>
</div>
<div className='lg:w-[90%] md:w-[95%] w-[97%] lg:text-md ' >
<h2 className='text-xl font-bubblegum' >Play with Colors</h2>
          <h3 className='md:border-b-[2px] lg:border-b-0 md:pb-2' ><span className='md:inline-block lg:inline-block block text-[#5c5c5c] leading-1 font-semibold text-sm' >December 18, 2021 @ 8:00 am -</span> 
          <span  className='md:inline-block lg:inline-block block text-[#5c5c5c] leading-1 font-semibold text-sm'  >December 18, 2024 @ 5:00 pm</span>
          <span className='md:block text-md lg:mt-2 text-[#5c5c5c]' >Recurring Event <a href="" className='text-[#008C99] ' >(See all)</a></span></h3>
</div>
<div className='lg:w-[90%] md:w-[95%] w-[97%] lg:text-md ' >
<p className='md:text-md lg:text-[15px]' >Nunc eleifend leo urna. In vestibulum lobortis massa id tincidunt. Sed nec nibh sit amet odio viverra dictum. Donec vestibulum, ipsum non mollis aliquet, risus lectus cursus libero, et vehicula sapien ipsum in risus. Mauris posuere volutpat ipsum, quis sagittis tellus rutrum a. Aliquam erat volutpat. Suspendisse bibendum molestie lectus, quis semper sapien rutrum et. Aenean eget risus ultricies, semper ante eu, ultricies est. In accumsan sem quis ante condimentum faucibus. Nullam tristique lectus ut magna tincidunt, nec volutpat est…</p>

</div>
        </div>
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center' >Find out More <FaChevronRight className='text-[10px]'/></button>
           </div>
       </div>
    </div>
  )
}

export default Photos