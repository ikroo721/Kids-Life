/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const HeadingWithStar = ({children,bg}) => {
  return (
    <div className='w-3/4 h-20   flex items-center justify-center' >
    <h1  className={`  ${bg.text ? `text-[${bg.text}]` : "text-[#2f2f2f]"}  font-bubblegum   relative text-3xl  mb-5  `}>
        {children}
        {/* style={{background:`url(${bg.bg})`,backgroundColor:`${bg.color}`}}  */}
        <div  style={{background:`url(${bg.bg})`,backgroundColor:`${bg.color}`,backgroundSize:bg.bg ? "cover" :"",backgroundPosition:"center "}}  className='h-[15px] mt-2     '  >

        </div>
    </h1>
    </div>
  )
}

export default HeadingWithStar