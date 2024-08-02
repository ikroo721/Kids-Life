/* eslint-disable no-unused-vars */
import React from "react";
import HeadingWithStar from "./HeadingWithStar";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const Arr={
    bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg_white.png",

  }
  const ProductArr=[
    {
        top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
        bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
      name:"Ellants Grade",
      price:"234.00"
    },
    {
        top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
        bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
        name:"My Style",
        price:"180.00",
        discount:"200.00"
    },
    {
        top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
        bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
        name:"Its trendy",
        price:"300.00"
    }, 
     {
        bg:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product1.jpg",
        top:"https://kidslifedev.wpengine.com/wp-content/uploads/2015/01/product4.jpg",
        name:"Stripe Colors",
        price:"180.00"
    },
]
  return (
    <div className='min-h-screen w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/product_bg.png")] bg-cover bg-fixed bg-[#D2D2D2] flex items-center justify-center flex-col'>
      <HeadingWithStar bg={Arr} >
        Recent Products
      </HeadingWithStar>
      <div className="w-full  md:w-full lg:w-[75%]  lg:h-2/3 flex items-center justify-center gap-5 flex-wrap">
        {
ProductArr.map((e,i)=>(
  <SingleProduct key={i} item={e}/>
))
        }
      
         
      </div>
    </div>
  );
};

export default Products;
