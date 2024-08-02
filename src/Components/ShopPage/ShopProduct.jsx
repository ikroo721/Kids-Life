/* eslint-disable no-unused-vars */
import React from 'react'
import SingleProduct from '../SingleProduct'
import { Link } from 'react-router-dom'

const ShopProduct = () => {
    const ProductArr=[
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product10.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product5.jpg",
          name:"Ellants Grade",
          price:"234.00"
        },
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product12.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product7.jpg",
            name:"Its trendy",
            price:"300.00"
        }, 
    ]
  return (
    <div className='min-h-80 w-full  '>
    <div className="w-full  md:w-full lg:w-[100%]  lg:min-h-10 flex flex-wrap gap-5">
    {
ProductArr.map((e,i)=>(
<SingleProduct key={i} item={e}/>
))
    }
  
     
  </div>
  <div className='flex items-start gap-2 mb-10' >
    <Link to={"../"}  className='px-3  py-1 border-[1px] border-[#008C99] text-[#008C99] rounded-md text-sm' >Prev</Link>
    <Link to={"../"} className='px-3  py-1 border-[1px] border-[#008C99] text-[#008C99] rounded-md text-sm'  >1</Link>
    <Link to={"/shop/1"}  className='px-3  py-1 border-[1px] border-[#5c5c5c] rounded-md text-[#5c5c5c] text-sm' >2</Link>
  </div>
</div>
  )
}

export default ShopProduct