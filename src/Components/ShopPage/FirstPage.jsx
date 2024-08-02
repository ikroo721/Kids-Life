/* eslint-disable no-unused-vars */
import React from 'react'
import SingleProduct from '../SingleProduct'
import { Link } from 'react-router-dom'

const FirstPage = () => {
    const ProductArr=[
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
          name:"Ellants Grade",
          price:"234.00"
        },
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product9.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
            name:"Its trendy",
            price:"300.00"
        }, 
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product3.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product2.jpg",
            name:"My Style",
            price:"180.00",
            discount:"200.00"
        },
       
         {
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product6.jpg",
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product5.jpg",
            name:"Stripe Colors",
            price:"180.00"
        },
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product8.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product11.jpg",
            name:"Its trendy",
            price:"300.00"
        }, 
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product2.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product5.jpg",
            name:"My Style",
            price:"180.00",
            discount:"200.00"
        },
       
         {
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product6.jpg",
            name:"Stripe Colors",
            price:"180.00"
        },
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product11.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product2.jpg",
            name:"Its trendy",
            price:"300.00"
        }, 
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product7.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product8.jpg",
            name:"My Style",
            price:"180.00",
            discount:"200.00"
        },
        {
            top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
            bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
          name:"Ellants Grade",
          price:"234.00"
        },
    ]
  return (
    <div className='min-h-screen w-full  '>
        <div className="w-full  md:w-full lg:justify-start justify-center md:items-start lg:w-[100%]  lg:min-h-screen flex flex-wrap gap-5">
        {
ProductArr.map((e,i)=>(
  <SingleProduct key={i} item={e}/>
))
        } 
      </div>
      <div className='flex items-start gap-2 mb-10 ' >
        <Link to={"../"}  className='z-[99] px-3  py-1 border-[1px] border-[#5c5c5c] rounded-md text-[#5c5c5c] text-sm' >1</Link>
        <Link to={"/shop/1"} className='z-[99] px-3  py-1 border-[1px] border-[#008C99] text-[#008C99] rounded-md text-sm'  >2</Link>
        <Link to={"/shop/1"}  className='z-[99] px-3  py-1 border-[1px] border-[#008C99] text-[#008C99] rounded-md text-sm' >Next</Link>
      </div>
    </div>
  )
}

export default FirstPage