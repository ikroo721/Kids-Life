/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProductDesc from './ProductDesc'

const SingleProduct = ({item}) => {
    const  backColor="bg-[#008C9980]";
    const [Hover, setHover] = useState(false)
    const HandleMove=()=>{
        // alert("move")
        setHover(true)
    }
    const HandleLeave=()=>{
        setHover(false)
    }
  return (
    <div onMouseLeave={HandleLeave} onMouseMove={HandleMove} className="h-[100vh] sm:h-[100vh] md:h-[40vh] lg:h-[66.6vh] w-[80vw] sm:w-[80vw] md:w-[20vw] lg:w-[17.5vw]">
          <div style={{
            background:`url(${item.bg})`,
         backgroundPosition:"center",
         backgroundSize:"cover" 
        }} className={`w-full h-[80vh] sm:h-[80vh] md:h-[30vh]
             lg:h-4/5                      bg-[url('${item.bg}')]   bg-cover flex items-center justify-center relative`}>
            <div style={{
              background:!Hover ? `url(${item.top})` : "",
              backgroundPosition:!Hover ? "center" :"",
              backgroundColor: Hover ? `${backColor}` : "",
              backgroundSize: !Hover ?"cover" :"" ,
             
            }} className={`h-full w-full absolute ${!Hover ? `bg-[url("${item.top}")] z-[10]`:        `${backColor}`  } bg-cover   `}>
              <img               className=" h-full w-full hidden object-cover"
                src="https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg"
                alt=""
              />
            </div>
            <button className="px-[10px] py-[14px] border-white border-[2px] text-white bg-transparent hover:text-black hover:bg-white z-[1]">
              Add to Cart
            </button>
          </div>
         <ProductDesc item={item} />
</div>
  )
}

export default SingleProduct