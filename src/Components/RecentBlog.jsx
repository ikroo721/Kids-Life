/* eslint-disable no-unused-vars */
import React from 'react'

import { FaChevronLeft, FaChevronRight, FaComment, FaFolder, } from "react-icons/fa";
import { FiFile } from "react-icons/fi";

const RecentBlog = () => {
  return (
    <div className="min-h-[10vh]  w-full flex md:justify-start sm:flex-wrap  md:flex-nowrap  lg:justify-center font-lato flex-wrap pb-10 " >
          <div className="sm:w-[80vw] flex-col sm:flex-col sm:min-h-32 lg:min-h-2/3 lg:w-[40.2vw] xl:w-[45vw] flex justify-start px-10 lg:px-32 pt-12 lg:flex-row md:flex-col md:gap-2 lg:gap-0 gap-3  ">
  <div className="flex lg:min-h-96 lg:w-1 lg:justify-end md:w-4/5  ">
    <div className="lg:h-64 sm:w-64  sm:h-20 lg:w-40 md:w-16 flex sm:gap-2 gap-2 lg:flex-col items-end text-white ">
      <div className="lg:h-20 sm:h-16 lg:w-full md:h-16 flex items-center justify-center ">
        <div className="lg:h-16 h-12 w-12 lg:w-16 md:h-12 md:w-12 rounded-full border-[5px] border-[#008C99] bg-[url('https://secure.gravatar.com/avatar/050164a0ef01ccf5fbbe42b8c6a7e68c?s=96&d=mm&r=g')] bg-cover">
        </div>
      </div>
      <div className="flex lg:flex-col sm:h-16 md:h-16 md:items-center sm:items-center lg:items-end md:gap-2 lg:gap-2">
        <div className="lg:hidden md:w-52 lg:w-28 h-12 -mr-3 flex items-center md:justify-evenly lg:justify-end px-5 bg-[#008C99] clip-md-polygon relative gap-2 ">
          <div className="flex gap-1 items-center">
            <h2 className="text-2xl font-semibold">21</h2>
            <div>
              <h4 className="leading-none text-sm">Dec</h4>
              <h4 className="leading-none text-sm">2014</h4>
            </div>
          </div>
          <div className="flex items-center">
            <h3 className="text-sm font-lato mr-[2px]">0</h3>
            <FaComment />
          </div>
          <FiFile />
        </div>
        <div className="sm:hidden hidden md:hidden  h-12 lg:w-28 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative gap-2   ">
          <h2 className="text-2xl font-semibold">21</h2>
          <div>
            <h4 className="leading-none text-sm">Dec</h4>
            <h4 className="leading-none text-sm">2014</h4>
          </div>
        </div>
        <div className="sm:hidden hidden md:hidden  h-10 w-20 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative  gap-1">
          <h3 className="text-sm h-10 font-lato mr-[2px] flex items-center">0</h3>
          <FaComment />
        </div>
        <div className="sm:hidden hidden md:hidden !h-10 w-16 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative">
          <FiFile className='h-12' />
        </div>
      </div>
    </div>
  </div>
  <div className="lg:min-h-80 lg:w-1/2 md:min-h-60 flex items-start flex-col">
    <div className="lg:h-64 w-[80vw] xl:h-72 xl:w-[35vw] h-[25vh] lg:w-[28vw] md:h-52 md:w-[40vw] border-[5px] border-[#008C99] bg-[url('https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/blog_img1.jpg')] bg-cover bg-center">
    </div>
    <div className="lg:h-80 lg:w-[30vw] min-h-[10vh]w-[80vw] md:min-h-40 md:w-[40vw]  flex flex-col items-start lg:justify-between lg:pb-10 md:gap-2 lg:gap-5 pt-12 gap-5">
      <h1 className="text-2xl text-white font-bubblegum hover:text-[#008C99]">Activities Improves Mind</h1>
      <h2 className="flex gap-3 items-center text-lg md:text-md lg:text-md text-[#008C99]">
        <FaFolder className="text-white" /> Uncategorized
      </h2>
      <h3 className="md:text-sm text-lg  lg:text-md tracking-wide xl:text-lg leading-7 text-white">
        Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd consequat. Praes porr nulla sit amet dui lobortis, id venenatis nibh accums....
      </h3>
      <button className="px-[10px] py-[10px] md:py-[9px] lg:py-[7px] bg-[#008C99] rounded-sm text-white flex items-center gap-1 font-lato">
        Read More <span className="h-[14px] w-[14px] rounded-full bg-white flex items-center justify-center text-[#008C99] px-1">
          <FaChevronRight />
        </span>
      </button>
    </div>
  </div>
</div>
<div className="sm:w-[80vw] flex-col sm:flex-col sm:min-h-32 lg:min-h-2/3   lg:w-[40.2vw] xl:w-[45vw] flex justify-start px-10 lg:px-32 pt-12 lg:flex-row md:flex-col md:gap-2 lg:gap-0 gap-3  ">
  <div className="flex lg:min-h-96 lg:w-1 lg:justify-end md:w-4/5 ">
    <div className="lg:h-64 sm:w-64  sm:h-20 lg:w-40 md:w-16 flex lg:flex-col items-end text-white sm:gap-2 gap-2">
      <div className="lg:h-20 sm:h-16 lg:w-full md:h-16 flex items-center justify-center ">
        <div className="lg:h-16 h-12 w-12 lg:w-16 md:h-12 md:w-12 rounded-full border-[5px] border-[#008C99] bg-[url('https://secure.gravatar.com/avatar/050164a0ef01ccf5fbbe42b8c6a7e68c?s=96&d=mm&r=g')] bg-cover">
        </div>
      </div>
      <div className="flex lg:flex-col sm:h-16 md:h-16 md:items-center lg:items-end md:gap-2 lg:gap-2 items-center">
        <div className="lg:hidden md:w-52 lg:w-28 h-12 -mr-3 flex items-center md:justify-evenly lg:justify-end px-5 bg-[#008C99] clip-md-polygon relative gap-2 ">
          <div className="flex gap-1 items-center">
            <h2 className="text-2xl font-semibold">21</h2>
            <div>
              <h4 className="leading-none text-sm">Dec</h4>
              <h4 className="leading-none text-sm">2014</h4>
            </div>
          </div>
          <div className="flex items-center">
            <h3 className="text-sm font-lato mr-[2px]">0</h3>
            <FaComment />
          </div>
          <FiFile />
        </div>
        <div className="sm:hidden hidden md:hidden  h-12 lg:w-28 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative gap-2   ">
          <h2 className="text-2xl font-semibold">21</h2>
          <div>
            <h4 className="leading-none text-sm">Dec</h4>
            <h4 className="leading-none text-sm">2014</h4>
          </div>
        </div>
        <div className="sm:hidden hidden md:hidden  h-10 w-20 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative  gap-1">
          <h3 className="text-sm h-10 font-lato mr-[2px] flex items-center">0</h3>
          <FaComment />
        </div>
        <div className="sm:hidden hidden md:hidden !h-10 w-16 -mr-3 lg:flex items-center justify-end px-5 bg-[#008C99] clip-your-needful-style relative">
          <FiFile className='h-12' />
        </div>
      </div>
    </div>
  </div>
  <div className="lg:min-h-80 lg:w-1/2 md:min-h-60 flex items-start flex-col">
    <div className="lg:h-64 w-[80vw] xl:h-72 xl:w-[35vw] h-[25vh] lg:w-[28vw] md:h-52 md:w-[40vw] border-[5px] border-[#008C99] bg-[url('https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/blog_img2.jpg')] bg-cover bg-center">
    </div>
    <div className="lg:h-80 lg:w-[30vw] min-h-[10vh]w-[80vw] md:min-h-40 md:w-[40vw]  flex flex-col items-start lg:justify-between lg:pb-10 md:gap-2 lg:gap-5 pt-12 gap-5">
      <h1 className="text-2xl text-white font-bubblegum hover:text-[#008C99]">Weekly Reader Zone</h1>
      <h2 className="flex gap-3 items-center text-lg md:text-md lg:text-md text-[#008C99]">
        <FaFolder className="text-white" /> Uncategorized
      </h2>
      <h3 className="md:text-sm text-lg  lg:text-md xl:text-lg tracking-wide leading-7 text-white">
        Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd consequat. Praes porr nulla sit amet dui lobortis, id venenatis nibh accums....
      </h3>
      <button className="px-[10px] py-[10px] md:py-[9px] lg:py-[7px] bg-[#008C99] rounded-sm text-white flex items-center gap-1 font-lato">
        Read More <span className="h-[14px] w-[14px] rounded-full bg-white flex items-center justify-center text-[#008C99] px-1">
          <FaChevronRight />
        </span>
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default RecentBlog