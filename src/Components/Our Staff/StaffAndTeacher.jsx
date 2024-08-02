/* eslint-disable no-unused-vars */
import React from 'react'
import HeadingWithStar from '../HeadingWithStar'
import StaffCard from '../StaffCard'

const StaffAndTeacher = () => {
    const Arr={bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png",
        color:"#008c99"
      }
    const StaffData=[
        {    name:"Jack Daniels",
          position:"Senior Supervisor",
          img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team1.jpg"},
         {   name:"Linda Glendall",
          position:"Teaching Professor",
          img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team2.jpg"},
          {   name:"Kristof Slinghot",
            position:"Management",
            img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team4.jpg"},
          {   name:"Kate Dennings",
            position:"Children Diet",
            img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team3.jpg"},
    
        ]
  return (
    <div>
    <div className='min-h-[70vh] w-full bg-[#F0F3F3] flex justify-center items-center flex-col' >
    <HeadingWithStar bg={Arr} >
      Our Teachers
    </HeadingWithStar>
    <div className='min-h-[50vh] sm:w-full md:w-3/4 lg:w-3/4 flex flex-wrap ' >
     {
      StaffData.map((e,i)=>(
        <StaffCard key={i} arr={e} />
      ))
     }
    </div>
    </div>
</div>
  )
}

export default StaffAndTeacher