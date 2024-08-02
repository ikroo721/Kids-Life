/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// export const Prev=(props) => {
//   const {onClick} = props
// return (
//     <div
//     className=' z-[40] h-32 w-5 absolute left-0 cursor-pointer'
//      onClick={onClick} >
//     <FaChevronLeft className='h-32 w-5 text-white ml-2' />
//    </div>
// );
// }
// export const Next=(props) => {
//   const {onClick} = props
// return (
//     <div
//     className=' z-[40] h-32 w-5 absolute right-0 mr-3 cursor-pointer'
//      onClick={onClick}  >
//     <FaChevronRight className='h-32 w-5 text-white ml-2' />
//    </div>
// );
// }
const LeisureSlider = () => {
const Arr=[
  {img:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/about-slider3.jpg"},
  {
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/about-slider1.jpg",
},{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/about-slider2.jpg"
},]


  const settings = {
    className: "flex items-center justify-center lg:mt-0 md:mt-0  h-[25vh] w-[80vw]  md:w-[50vw]   lg:w-[38vw] lg:h-[40vh]  ",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // nextArrow: <Next />,
    // prevArrow: <Prev/>
  };
  return (  
    <div className='h-[25vh] mt-2 lg:mt-0 md:mt-0 md:h-[30vh] lg:h-[35vh] lg:w-[36vw]    flex items-center justify-center relative overflow-hidden' >
      <div className="slider-container">
      <Slider {...settings}>
      {Arr.map((e,i)=>
        (
         <div key={i} className="h-[25vh] md:h-[41vh] lg:h-[41vh] w-full ">
         <img className="h-full w-full object-cover" src={e.img} alt="" />
         </div>
      ))
      }
      </Slider>
    </div>
    </div>
  )
}

export default LeisureSlider