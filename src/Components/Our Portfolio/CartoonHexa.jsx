/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaLink } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa";
const CartoonHexa = ({img,color}) => {
  const [Active, setActive] = useState(false);
  const handleMove = () => {
    setActive(true);
  };
  const handlLeave = () => {
    setActive(false);
  };
  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handlLeave}
      className='md:h-[20vw] md:w-[23vw] lg:h-[15.2vw] lg:w-[17.5vw]   bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/hexagon.png")] bg-cover flex items-center justify-center  overflow-hidden relative after:contents-[""] after:h-full after:w-full after:absolute after:bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/hexagon.png")]  after:bg-cover '
    >
      <div className="md:h-[20vw] md:w-[23vw] lg:h-[15.2vw] lg:w-[17.5vw]   clip-your-hexagon overflow-hidden  ">
        <img

          className="h-full w-full object-cover  "
          src={img}
          alt=""
        />
        {Active && (
          <div style={{backgroundColor:color}} className="absolute h-full bg-red-300 bg-opacity-75 w-full clip-your-hexagon z-1 top-0 flex flex-col ">
            <div className="h-full w-full flex flex-col items-center   justify-center gap-2">
              <div className=" w-full flex ">
              <div className="h-full w-1/2  flex items-center justify-end px-5">
                <div className="h-12 w-12 clip-your-hexagon flex items-center justify-center bg-white "><FaLink className={`text-[${color}]`} /></div>
              </div>
              <div className="h-full w-1/2  flex items-center justify-start px-5">
                <div className="h-12 w-12 clip-your-hexagon flex items-center justify-center bg-white "><FaSearch className={`text-[${color}]`} /></div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartoonHexa;
