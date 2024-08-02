/* eslint-disable no-unused-vars */
import React from 'react'
import { FaDribbble, FaFacebookF,  FaFlickr,  } from 'react-icons/fa' 
const FooterBottom = () => {
  return (
    <div className='min-h-[55px] w-full bg-[#008C99] flex justify-center font-lato'>
    <div className='h-full md:w-[80%] lg:w-[75%] flex lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-between' >
    <div className='h-full md:w-[30vw] w-full lg:w-[30vw]  flex items-center text-white lg:text-start md:text-start text-center'>
     <p className='md:text-sm text-[12px] lg:text-sm text-nowrap ' >© 2014 Kids Life. All rights reserved. Design by <a className='' href="">Design Themes</a></p>
    </div>
    <div className='h-full md:w-[30vw] w-full lg:w-[20vw] flex items-center justify-center'>
               <p className='relative   md:text-sm lg:text-sm   text-white flex items-center gap-2' >
               Follow us
               <div >
                <img src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_arrow.png" alt="" />
               </div>
               </p>
               <ul className='flex px-5  items-center justify-evenly ' >
                 <li className='relative h-full  flex items-center justify-center' >
      <a
       href=""
       
       className={` px-2    py-2 uppercase text-sm`}
     >
      <FaFacebookF className='text-white text-sm'/> 
       
     </a>
                 </li>
                 <li className='relative h-full  flex items-center justify-center' >
       <a
       href=""
       
       className={` px-2    py-2 uppercase text-sm`}
     >
      <FaDribbble className='text-white text-sm' /> 
       
     </a>
                 </li>
                 <li className='relative h-full  flex items-center justify-center' >
                       <a
       href=""
       
       className={` px-2    py-2 uppercase text-sm`}
     >
      <FaFlickr className='text-white text-sm' /> 
       
     </a>
                 </li>
                 <li className='relative h-full  flex items-center justify-center' >
       <a
       href=""
       
       className={` px-2    py-2 uppercase text-md`}
     >
     <img src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/sociable/technorati.png" className='h-full object-cover' alt="" /> 
       
     </a>
                 </li>
                 
               </ul>
    </div>
    </div>
</div>
  )
}

export default FooterBottom