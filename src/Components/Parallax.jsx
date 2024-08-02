/* eslint-disable no-unused-vars */
import React from 'react'
import ParallaxLeft from './ParallaxLeft'
import ParallaxRight from './ParallaxRight'

const Parallax = () => {
  return (
    <div className=' lg:h-[90vh] w-full relative  ' >
        <div className=' bg-[#008C99] h-full w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2020/03/cloud-bg1.png")] bg-center pt-10 lg:pt-0 md:pt-0  bg-fixed flex items-center justify-center' >
       <div className='lg:min-h-[82%] min-h-[70&] w-full lg:w-[75%] flex justify-center items-center md:flex-nowrap lg:flex-nowrap flex-wrap '>
       <ParallaxLeft/>
       <ParallaxRight/>
       </div>
        </div>
    </div>
  )
}

export default Parallax