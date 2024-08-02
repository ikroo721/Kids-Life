/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCog, FaRegSmile, FaRegSun } from 'react-icons/fa'
import SingleShortCard from './SingleShortCard'
import ShortCardIcon from './ShortCardIcon'
import ShortIconHead from './ShortIconHead'

const ShortCard = () => {
     
 const Arr=[
    {
        head:"Outdoor Play",
        icon:<FaRegSun className='text-4xl text-white' />,
    },
    {
        head:"Group Activity",
        icon:<FaRegSmile className='text-4xl text-white' />
    },
    {
        head:"Creative Writing",
        icon:<FaCog className='text-4xl text-white' />
    }
 ]
  return (
    <div className='min-h-[50vh]  lg:h-[50vh] w-full flex items-center justify-center bg-[#F0F3F3]' >
    <div className="flex items-center justify-center md:w-full lg:w-3/4   gap-5 flex-wrap">
{
    Arr.map((e,i)=>(
        <SingleShortCard key={i} >
            <ShortCardIcon>{e.icon}</ShortCardIcon>
            <ShortIconHead>{e.head}</ShortIconHead>
        </SingleShortCard>
    ))
}
</div>
</div>
  )
}

export default ShortCard