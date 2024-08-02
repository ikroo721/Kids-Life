/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MonthEvent from './MonthEvent'
import SubNav from '../About/SubNav'
import Search from './Search'
import DayList from './DayList'
import Photos from './Photos'
import MapPage from './MapPage'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const EventPage = () => {
  const [DataToShow, setDataToShow] = useState("Day")
  const [Map, setMap] = useState(false)
  return (
    <div className='bg-[#F0F3F3] pb-10'>
     <SubNav>
      Upcoming Event
     </SubNav>
     {Map && <MapPage/>}
     <div className='flex items-center justify-center h-12 lg:mt-20' >
     <h1 className='text-2xl font-bubblegum text-[#333333]' >Upcoming Events</h1>
     </div>
     <Search Data={DataToShow} MapChange={setMap} Fnc={setDataToShow} />
     {DataToShow == "Day" && <DayList/>}
     {DataToShow == "Photo" && <Photos/>}
     {DataToShow == "Month" && <>
     <div className='flex items-center justify-center'>
     <div className='flex items-center justify-between w-[68%]' >
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' ><FaChevronLeft/>July</button>
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' > Sepetember <FaChevronRight/></button>
        </div>
     </div>
       <MonthEvent/> 
       <div className='flex items-center justify-center'>
     <div className='flex items-center justify-between w-[68%]' >
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' ><FaChevronLeft/>July</button>
        <button className='px-[12px] py-[8px] bg-[#008C99] text-white mt-5 flex items-center ' > Sepetember <FaChevronRight/></button>
        </div>
     </div>
     </>}
     {DataToShow == "Map" && <>
      <DayList/>
     </>}
    </div>
  )
}

export default EventPage