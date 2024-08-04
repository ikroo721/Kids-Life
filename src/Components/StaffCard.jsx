/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainHexaStaffWala from './MainHexaStaffWala'
import Hexo from './Hexo'

const StaffCard = ({arr}) => {
  // const Arr={
  //   img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team1.jpg"
  // }
  return (
    <div className='w-full sm:w-full md:w-1/4 lg:w-1/4 h-full  flex items-center flex-col gap-4 text-center ' >
           <MainHexaStaffWala>
            <Hexo>
             {arr}
            </Hexo>
           </MainHexaStaffWala>
          <div className=''>
            <h1 className='text-xl text-[#252525] text-center font-bubblegum hover:text-[] '  >{arr.name}</h1>
            <h2 className='text-md text-[#808080] text-center font-lato'  >{arr.position}</h2>
          </div>
          <p className='font-lato text-sm mt-2 md:w-full lg:w-fit w-4/5 text-[#808080]' >Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.</p>
        </div>
  )
}

export default StaffCard