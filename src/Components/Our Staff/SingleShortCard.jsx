/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
const SingleShortCard = ({children}) => {
  return (
    <div className="mt-20 sm:mt-20 md:mt-20 w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[23vw] bg-white text-center h-44 md:h-60 lg:h-44  flex flex-col justify-center items-center relative gap-2  ">      
{
children
}
 <p className=" text-gray-500 md:w-[90%] text-sm  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus sollicitudin nunc nec rhoncus.</p>
</div>
  )
}

export default SingleShortCard