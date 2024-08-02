/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

const MonthEvent = () => {
    let Arr=["29","30","31",]
    console.log(Arr)
    for(let i=0; i<31;i++ ){
        Arr=[...Arr,i]
    }
    Arr=[...Arr,1]
   
    console.log(Arr)
  return (
   <div className='flex items-center justify-center mt-10' >
     <div className='w-[75vw] flex items-center justify-center  ' >
        <div className="lg:flex lg:h-full lg:flex-col  flex items-center justify-center  ">
  <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col ">
    <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className=" uppercase md:text-[14px] text-[6px] lg:text-md font-lato">monday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">tuesday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">wednesday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">thursday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
    
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">friday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">saturday</span>
      </div>
      <div className="flex justify-center bg-[#008C99] text-white font-semibold py-2">
        <span className="uppercase md:text-[14px] text-[6px] lg:text-md font-lato">sunday</span>
      </div>
    </div>
    <div className="flex  text-xs leading-6 text-gray-700 lg:flex-auto">
      <div className="w-full grid grid-cols-7  lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
        {Arr.map((e)=>(
            <div key={e} className="relative bg-gray-50 px-3 py-1 lg:py-5 text-gray-500 border-[1px] ">
            <time dateTime="2021-12-27">{e}</time>
            <ol className="lg:mt-2 md:mt-2 lg:block md:block hidden">
              <li>
                <a href="#" className="group flex">
                  <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Play with colors</p>
                  <time dateTime="2022-01-03T10:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">10AM</time>
                </a>
              </li>
            </ol>
            <div className='h-2 w-2 lg:hidden md:hidden block rounded-full bg-[#dadada]' >

            </div>
          </div>
        ))}
        
      </div>
    </div>
  </div>
</div>

    </div>
   </div>
  )
}

export default MonthEvent