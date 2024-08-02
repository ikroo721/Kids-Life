/* eslint-disable no-unused-vars */
import React from 'react'
import HeadingWithStar from '../HeadingWithStar'
import LeftAccordian from './LeftAccordian'
import RightAccordian from './RightAccordian'

const ServiceAccordianPage = () => {
    const Arr={bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png",
        color:"#008c99"
      }
  return (
    <div className='md:min-h-[70vh] lg:min-h-[70vh] w-full bg-[#F0F3F3] flex items-center justify-center'>
        <div className='md:min-h-[60vh] lg:min-h-[50vh] md:w-full lg:w-[75%] '>
          <div className='flex items-center justify-center'>
          <HeadingWithStar bg={Arr} >
          Course Overview
        </HeadingWithStar>
          </div>
          <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap' >
            <LeftAccordian/> 
            <RightAccordian/>
          </div>
        </div>
    </div>
  )
}

export default ServiceAccordianPage