/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from 'react-slick';
import { Left, Right } from './Sponsors';

const SponsorSlider = () => {
  const settings = {
    className: "flex items-center justify-center  w-full h-full  ",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <Right />,
    prevArrow: <Left/>
  };
  return (

    <>
     <div className='w-full h-full  flex justify-evenly items-center ' >
    <Slider {...settings}>
        <div className='h-full md:w-[15vw] lg:w-[16vw] flex items-center justify-center  '>
            <img className='h-28 lg:w-40 object-cover'  src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/client-logo1.png" alt="" />
        </div>
        <div className='h-full md:w-[15vw] lg:w-[16vw] flex items-center justify-center  '>
            <img className='h-28 lg:w-40 object-cover'  src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/client-logo2.png" alt="" />
        </div>
        <div className=' h-full md:w-[15vw] lg:w-[16vw] flex items-center justify-center  '>
            <img className='h-28-cover'  src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/client-logo3.png" alt="" />
        </div>
        <div className=' h-full md:w-[15vw] lg:w-[16vw] flex items-center justify-center  '>
            <img className='h-28 lg:w-40 object-cover'  src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/client-logo4.png" alt="" />
       </div> 
    </Slider>
    </div>
    </>
  )
}

export default SponsorSlider