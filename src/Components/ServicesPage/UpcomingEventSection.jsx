/* eslint-disable no-unused-vars */
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {  FaRegCalendarDays } from 'react-icons/fa6'
import SoundCloudPlayer from '../404/Sound'

const UpcomingEventSection = () => {
    const UpcomingEvent=[
        {
            img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image8.jpg",
        time:" Apr 2021 @ 12 am - Aug 2022 @ 11 pm",
        head:"Tour Time",
        place:"Ram",
        country:"India",
        para:"Nunc eleifend leo urna. In vestibulum lobortis massa id tincidunt. Sed nec nibh sit..."
    },
    {
        img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/birthday_celebration.jpg",
    time:"Nov 2021 @ 12 am - Jan 2022 @ 11 pm",
    head:"Birthday Celebration",
    place:"Hogwarts",
    country:"Australia",
    para:"Curabitur adipiscing, tellus ac molestie suscipit, urna risus fringilla felis, tempor malesuada odio nulla..."
},
{
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/play_with_colors.jpg",
time:" Dec 2021 @ 08 am - Dec 2024 @ 05 pm",

head:"Play with Colors",
place:"",
country:"",
para:"Nunc eleifend leo urna. In vestibulum lobortis massa id tincidunt. Sed nec nibh sit..."
},
{
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/birthday_celebration.jpg",
time:"Jan 2023 @ 12 am - Mar 2023 @ 11 pm",
head:"Birthday Celebration",
place:"Hogwarts",
country:"Australia",
para:"Curabitur adipiscing, tellus ac molestie suscipit, urna risus fringilla felis, tempor malesuada odio nulla..."
},

]
  return (
    <div className='min-h-screen w-full  flex items-center justify-center pt-16'>
        <div className='md:w-[95%]  lg:w-[75%] min-h-screen flex lg:flex-nowrap md:flex-nowrap flex-wrap' >
        <div className='w-full md:w-1/2 lg:w-1/2  lg:min-h-[110vh]  flex flex-col gap-5 ' >
         <div className='  flex items-center justify-center' >
            <h1 className='text-3xl font-bubblegum md:w-full lg:w-full w-[80%]' >Upcoming Events</h1>
         </div>
         <div> 
           {
         UpcomingEvent.map((e,i)=>(

            <div key={e.time} className='md:min-h-48 lg:min-h-48 w-full  border border-b-[2px] border-t-0 border-r-0 border-l-0 flex items-center justify-center' >
            <div className='flex gap-3 lg:items-start md:items-start md:justify-start lg:justify-start items-center justify-center lg:flex-nowrap md:flex-nowrap lg:mt-0 md:mt-0 mt-5 flex-wrap ' >
                    <div style={{
                        background:`url(${e.img})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center"
                    }} className={` h-72 w-72 lg:min-h-36 lg:w-36 md:h-28 md:w-28  `} ></div>
                    <div className='md:min-h-28 lg:min-h-36 w-[80%] flex lg:flex-nowrap md:flex-wrap flex-col gap-3 lg:mb-0 md:mb-0 mb-5 md:gap-1 lg:gap-1 ' >
                        <p className='flex gap-1 text-[15px] lg:text-[17px] md:text-sm' ><FaRegCalendarDays/> {e.time}</p>
                        <h2 className='md:text-[15px] lg:text-lg font-bubblegum'>{e.head}</h2>
                        <p className='text-sm flex gap-1  ' ><FaMapMarkerAlt/><a className='text-[#008C99]'>{e.place}</a>,{e.country}<a className='text-[#008C99]'>+Google Map</a></p>
                        <p className='text-sm ' >{e.para}</p>
                    </div>
                    </div>
            </div>
         ))

           }
           
            
         </div>
         </div>
         <div className='w-full lg:px-5 justify-center md:w-1/2   lg:w-1/2 
         md:h-[80vh] 
         lg:h-[80vh]  flex flex-col gap-5' >
            <SoundCloudPlayer/>
            <SoundCloudPlayer/>
            <SoundCloudPlayer/>
            <SoundCloudPlayer/>
         </div>
        </div>
    </div>
  )
}

export default UpcomingEventSection