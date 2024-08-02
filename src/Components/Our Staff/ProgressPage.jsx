/* eslint-disable no-unused-vars */
import React from 'react'
import HeadingWithStar from '../HeadingWithStar'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const ProgressPage = () => {
    const Arr={bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png",
        color:"#008c99"
      }
      const ProgressBar=[
        {
        value:"65",
        color:"#d6d6d6",
        year:"2012"
        },
        {
         value:"85",
        color:"#DE84B9",
        year:"2014"
        },
        {
         value:"55",
        color:"#ACC158",
        year:"2013"
        },
        {
        value:"70",
        color:"#FCE485",
        year:"2015"
        }
      
        ]
  return (
    <div className=' md:min-h-[60vh] lg:min-h-[60vh] w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/fullwidth-parallax-image.png")]  bg-[#515152] bg-fixed flex items-center justify-center '>
<div className='lg:mt-0 md:mt-0 mt-5 md:h-[60vh] lg:h-[60vh] w-full flex items-center justify-center gap-5' >
<div className='h-full lg:w-[75%] flex items-center justify-center flex-col gap-7' >
  <div className=' flex w-full items-center justify-center flex-col gap-2'>
    
   <h1 className='font-bubblegum text-3xl text-white '>Our Statistics</h1>
   <div style={{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat'}} className='h-[15px] 
   w-36 bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg.png")]' ></div>
    {/* <HeadingWithStar bg={Arr} >Our Statisitcs</HeadingWithStar> */}
  </div>
  <div className='flex justify-evenly w-full lg:flex-nowrap md:flex-nowrap flex-wrap  font-lato md:gap-4' >
  {
    ProgressBar.map((e,i)=>(
      <div key={i} className='flex items-center justify-center flex-col gap-2' >
  <div className='h-52 w-52 md:h-40 md:w-40 lg:h-52 lg:w-52 ' >
<CircularProgressbar
  value={e.value}
  text={`${e.value}%`}
  strokeWidth={3}
  styles={buildStyles({
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: `${e.color}`,
    textColor: '#ffff',
    trailColor: '#ffff',
    backgroundColor: '#3e98c7',
  })}
/>
</div>
<h3 className='text-2xl text-white font-bubblegum' >{e.year}</h3>
  </div>
    ))
  }
  </div>
</div>
</div>
    </div>
  )
}

export default ProgressPage