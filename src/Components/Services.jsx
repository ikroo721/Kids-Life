/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const Arr=[{s:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service2.jpg",class:"Music Class",p:"Decor ostdcaer urabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, invest tibulum nisl ligula"},
        {s:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service1.jpg",class:"Active Learning",p:"Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl ligula"},
      {  s:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service3.jpg",class:"Yoga Class",p:"Rabitur ultrices posuere mattis. Nam ullamcorper, diam sit  euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl gedretu osterftra ligula"}, 
        {s:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/service4.jpg",class:"Kung fu Class",p:"Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl ligula"}]
  return (
    <div className='lg:min-h-[55vh] w-full bg-[#F0F3F3] flex items-center justify-center ' >
        <div className='md:w-full lg:w-[75%] h-3/4 flex-wrap flex items-center justify-evenly gap-5'>
          {
            Arr.map((e,i)=>(
                <ServiceCard key={i} item={e} />
            ))
          }
        </div>
    </div>
  )
}

export default Services