/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const ProductDesc = ({item}) => {
  return (
    <div className="w-full h-[10vh] sm:h-[10vh] md:h-[10vh] lg:h-[8vh] bg-white border border-l-0 border-r-0 border-b-0 border-t-[1px] flex items-center justify-center px-5 ">          
    <div className="flex items-center md:justify-center lg:justify-between  lg:gap-5 w-full lg:flex-row md:flex-col ">
    <h1 className="md:text-[21px] lg:text-[20px] font-bubblegum" >{item.name}</h1>
    <p className="text-[#008C99] lg:text-sm font-semibold" >{item.discount ? <span className='line-through text-[#5c5c5c] font-normal'>${item.discount}</span> :"" }${item.price}</p>
    </div>
    </div>
  )
}

export default ProductDesc