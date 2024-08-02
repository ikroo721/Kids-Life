/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import FirstCarousel from "./FirstCarousel";
import SecondSlide from "./SecondSlide";
import ThirdSlider from "./ThirdSlider";
function SimpleSlider() {
  const settings = {
    className: "flex items-center justify-center lg:h-[80vh] w-full",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
<div className=" w-full overflow-hidden">
<div className="slider-container ">
      <Slider className=" " {...settings}>
     <div className="h-full w-full" >
       <FirstCarousel/>
     </div>
     <div className="h-full w-full" >
        <SecondSlide/>
     </div>
     <div className="h-full w-full" >
        <ThirdSlider/>
     </div>
      </Slider>
    </div>
</div>
  );
}

export default SimpleSlider;