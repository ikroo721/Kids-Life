/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaDribbble, FaFlickr } from 'react-icons/fa6'

const Social = () => {
    const Arr=[{
        bg:"#35538F",
        name:<FaFacebookF/>
      },
      {
        bg:"#F974A4",
        name:<FaDribbble/>
      },
      {
       bg:"#E30377",
       name:<FaFlickr/>
      },
      {
        bg:"#5BB834",
        name: <img src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/sociable/header_sociable/technorati.png" alt=""/>
      }]
  return (
   <>
    
        <div className='w-1/4  h-full hidden md:flex lg:flex items-center justify-end overflow-hidden gap-[1px]' >
       { Arr.map((e,i)=>(
            <div key={i} className=" relative h-full  flex items-center justify-center" > 
               <a
               href=""
               
               className={`md:px-2 lg:px-4    lg:py-2 uppercase md:text-sm lg:text-md`}
             >
               {e.name}
               
             </a>
             <span
          style={{backgroundColor:e.bg}}
            className={`h-full w-full absolute top-[-87%] left-0 `}
          ></span>
             </div>
        ))}
       </div>
    
   </>
  )
}

export default Social