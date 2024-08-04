/* eslint-disable no-unused-vars */
import React from 'react'
import HexagonPage from './HexagonPage'
import HeadingWithStar from './HeadingWithStar'
import { FaChevronRight } from 'react-icons/fa'

const PortfolioPage = () => {
  const Arr={bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png",
    color:"#008c99"
  }
  return (
    <div className='md:min-h-[10vh] lg:min-h-[10vh] bg-[#F0F3F3] w-full flex flex-col items-center justify-center gap-19 pt-10 font-lato md:pb-7 lg:pb-16' >
         <HeadingWithStar bg={Arr} >
          Our Portfolio
        </HeadingWithStar>
        <div className='w-3/4   md:min-h-[10vh] lg:min-h-[10vh]' >
           <HexagonPage/>
        </div>
        <div className='w-3/4 mb-5 lg:mb-0 md:mb-0  lg:h-20 flex items-center justify-center md:mt-0 lg:mt-10' >
            <button className='px-[20px] py-[14px] text-[15px] tracking-wide bg-[#df9b00] rounded-sm text-white flex items-center gap-1 hover:bg-[#2F2F2F]'>Hit here to view all <span className='h-3 w-3  rounded-full bg-white flex items-center justify-center'><FaChevronRight className='text-[#df9b00] text-[10px]'/></span> </button>
        </div>
    </div>
  )
}

export default PortfolioPage