/* eslint-disable no-unused-vars */
import React from 'react'
import HeadingWithStar from '../HeadingWithStar'
import SingleLongCard from './SingleLongCard'
import LongTopLine from './LongTopLine'
import LongCardHead from './LongCardHead'
import LongCardImg from './LongCardImg'
import LongCardPara from './LongCardPara'

const LongCard = () => {
    const Arr={bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png",
        color:"#008c99"
      }
const LongCard=[
    {
    bg:"#F7C44E",
    line:"#E5B138",
    heading:"Creative Writing",
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/activity1.jpg"
    },
    {
    bg:"#ACC158",
    line:"#879B37",
    heading:"Arts & Craft",
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/activity2.jpg"
    },
    {
    bg:"#DE81B8",
    line:"#C95F9E",
    heading:"Music Unplugged",
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/activity3.jpg"
    },
    {
    bg:"#4CBCD4",
    line:"#2CA0B9",
    heading:"Swimming Hour",
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/activity4.jpg"
    }
    ]
  return (
    // bg-[#F0F3F3]
    <div className='min-h-screen  md:min-h-[90vh] lg:min-h-[80vh] bg-[#F0F3F3] w-full  sm:pt-5 flex items-center justify-center flex-col gap-6'>
    <div className=' w-3/4 flex  items-center justify-center flex-col'>

   <h1 className='font-bubblegum text-3xl '>Activities for Children</h1>
   <div style={{backgroundColor:"#008c99",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat'}} className='h-[15px]
   w-36 bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png")]' ></div>
    </div>
    <div className='md:w-full lg:w-[75%] min-h-[65vh]  md:min-h-[70%] pb-5  lg:min-h-[70%] flex gap-5 font-lato px-2 lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-start md:justify-start justify-center'>
         { LongCard.map((e,i)=>(
            <SingleLongCard key={i} bg={e.bg} >
            <LongTopLine btm="" >{e.line}</LongTopLine>
            <LongCardHead>{e.heading}</LongCardHead>
            <LongCardImg>{e.img}</LongCardImg>
            <LongCardPara></LongCardPara>
            <LongTopLine btm="btm" >{e.line}</LongTopLine>
            </SingleLongCard>
         )) }
    </div>
    </div>
  )
}

export default LongCard