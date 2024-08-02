/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import {  FaCalendarAlt, } from 'react-icons/fa';
import {  FaCalendarDay, FaList, FaPhotoFilm } from 'react-icons/fa6';
import { FiChevronUp } from 'react-icons/fi';
const Search = ({Fnc,MapChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEvent, setIsOpenEvent] = useState(false);
    const [DropDown, setDropDown] = useState("List")

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const toggleEvent = () => {
       setIsOpenEvent(!isOpenEvent)
      };
    const ValueChange=(e)=>{
        if(e == "Map"){
            MapChange(true)
        }
        else{
            MapChange(false)
        }
        setDropDown(e)  
        setIsOpen(!isOpen);
        Fnc(e)
    }
  return (
    <div>
         <div className='lg:h-20  w-full flex items-center justify-center   '>
<div className='lg:h-full md:w-[75%] flex-col  lg:w-[75%] flex bg-[#EEEEEE] items-center lg:flex-row md:flex-col '>
<form className='h-full w-[75%] md:hidden hidden lg:flex items-center justify-evenly'>
    <div className='md:flex hidden lg:flex flex-col' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Event From</label>
        <input className='h-10 px-4 text-sm w-52 hidden z-[10]'   type="date" placeholder="2024-08-02" />
        <input className=' h-10 px-4 text-sm w-52'   type="text" placeholder="2024-08-02" />
    </div>
    <div className='md:flex hidden lg:flex flex-col' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Search</label>
        <input className=' h-10 px-4 text-sm w-52'  type="text" placeholder="Keyword"  />
    </div>
    <div className='md:flex hidden lg:flex flex-col' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Near</label>
        <input className=' h-10 px-4 text-sm w-52'  type="text" placeholder="Location"  />
    </div>
    <button className='px-[10px] py-[8px] bg-[#008C99] tracking-tight text-white mt-5 font-semibold' >FIND EVENTS</button>
</form>
<div className='lg:hidden flex md:flex  w-full ' >
<div className="relative inline-block text-left  w-full z-10 ">
      <div className='h-8 w-full  flex bg-[#EEEEEE] gap-1' >
        <button
          onClick={toggleEvent}
          type="button"
          className="inline-flex justify-between w-full  border border-gray-300 shadow-sm px-2 py-2 bg-[#E0E0E0] text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className='flex items-center gap-1' >
          <FaList/>  
          Search Event 
          </span>
        <FiChevronUp/>
        </button>
      </div>
      {
      isOpenEvent && (
    <>
      <div className='w-full  flex flex-col items-center justify-center' >
      <div className='md:flex  w-[75%] lg:flex flex-col ' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Event From</label>
        <input className='h-10 px-4 text-sm  lg:w-52 hidden z-[10]'   type="date" placeholder="2024-08-02" />
        <input className=' h-10 px-4 text-sm  lg:w-52'   type="text" placeholder="2024-08-02" />
    </div>
    <div className='md:flex hidden lg:flex flex-col w-[75%]' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Search</label>
        <input className=' h-10 px-4 text-sm md:w-full lg:w-52'  type="text" placeholder="Keyword"  />
    </div>
    <div className='md:flex hidden lg:flex flex-col w-[75%]' >
        <label className='text-md font-semibold tracking-tight font-lato'  htmlFor="EventFrom">Near</label>
        <input className=' h-10 px-4 text-sm md:w-full lg:w-52'  type="text" placeholder="Location"  />
    </div>
    <button
    onClick={toggleEvent}
     className='px-[10px] py-[8px] bg-[#008C99] tracking-tight text-white mt-5 font-semibold' >FIND EVENTS</button>
      </div>
    </>

      )
      }

</div>
</div>
<div className='h-full  flex w-full lg:w-[25%]  '>
<div className='flex flex-col h-full w-full relative justify-center lg:mt-0 mt-5' >
  
<label htmlFor="View" className='text-[#2f2f2f] text-md font-semibold'>View As</label>
<div className="relative inline-block text-left  w-full z-10">
      <div className='h-8 w-full  lg:w-3/4  flex bg-[#EEEEEE] gap-1' >
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-between w-full  border border-gray-300 shadow-sm px-2 py-2 bg-[#E0E0E0] text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className='flex items-center gap-1' >
          <FaList/>  
          {DropDown}
          </span>
        <FiChevronUp/>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0  w-full  shadow-lg bg-[#F0F3F3] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <p
            onClick={()=>{
                ValueChange("Day")
            }}
              href=""
              className="text-gray-700 cursor-pointer  px-4 py-2 text-sm hover:bg-[#CACACA] flex items-center gap-1"
              role="menuitem"
              id="menu-item-0"
            >
              <FaList/> List
            </p>
            <p
              href=""
              onClick={()=>{
                ValueChange("Day")
            }}
              className="text-gray-700 cursor-pointer  px-4 py-2 text-sm hover:bg-[#CACACA] flex items-center gap-1"
              role="menuitem"
              id="menu-item-2"
            >
              <FaCalendarDay/> Day
            </p>
            <p
              href=""
              onClick={()=>{
                ValueChange("Month")
            }}
              className="text-gray-700 cursor-pointer  px-4 py-2 text-sm hover:bg-[#CACACA] flex items-center gap-1"
              role="menuitem"
              id="menu-item-1"
            >
              <FaCalendarAlt/> Month
            </p>
            
            <p
              href=""
              onClick={()=>{
                ValueChange("Map")
            }}
              className="text-gray-700 cursor-pointer  px-4 py-2 text-sm hover:bg-[#CACACA] flex items-center gap-1"
              role="menuitem"
              id="menu-item-2"
            >
              <FaCalendarDay/> Map
            </p>
            <p
              href=""
              onClick={()=>{
                ValueChange("Photo")
            }}
              className="text-gray-700 cursor-pointer  px-4 py-2 text-sm hover:bg-[#CACACA] flex items-center gap-1"
              role="menuitem"
              id="menu-item-2"
            >
              <FaPhotoFilm/> Photos
            </p>
            
          </div>
        </div>
      )}
    </div>
    </div>
</div>
</div>
</div>
    </div>
  )
}

export default Search