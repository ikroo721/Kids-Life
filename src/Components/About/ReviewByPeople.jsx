/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import ReviewSlider from './ReviewSlider'
import ReviewLeftBtn from './ReviewLeftBtn'
import ReviewRightBtn from './ReviewRightBtn'
import Slider from 'react-slick'
export const Prev=({prop})=>{
  return <div className='h-5 w-5 rounded-full border-[1px] border-[#AFB0B0]  flex items-center justify-center text-[#AFB0B0]' ><FaChevronLeft className='text-[12px]' /></div>
}
const ReviewByPeople = () => {
  const settings = {
    className: "flex items-center justify-center w-[90vw] md:w-[45vw]  lg:w-[36vw] h-[40vh]  ",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <ReviewRightBtn />,
    prevArrow: <ReviewLeftBtn/>
  };
  return (
    <div className='min-h-[70vh]  md:min-h-[40vh] lg:min-h-[40vh] md:w-1/2 lg:w-[36vw] flex flex-col gap-5 md:px-5 ' >
       <div className='flex w-full  items-center justify-between h-12  ' >
       <h1 className='font-bubblegum text-3xl text-[#2F2F2F]'>Meet Our Founder</h1>
        <div className='flex gap-1 bg-white' >
  <ReviewLeftBtn/>
 <ReviewRightBtn/>
        </div>
       </div>
       <div className='lg:mt-0 md:mt-0 mt-16' >
       <Slider {...settings}>
         <ReviewSlider/>
         <ReviewSlider/>
         </Slider>
       </div>
    </div>
  )
}

export default ReviewByPeople