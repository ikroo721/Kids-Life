/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CartoonHexa from './CartoonHexa'
import { IoGift } from 'react-icons/io5'
import Category from './Category'

const MainPortfolioSection = () => {
  const [Data, setData] = useState("All")
  const ButtonsData=["All","Bliss","Blow","Fun","joy","Learn"]
const gift= [
  {
  name:"active",
  btmcolor:"#ae4612",
  bg:"#cf571b"
},
{
  name:"nonActive",
  btmcolor:"#02747f",
  bg:"#008c99"
}
]
   let CartoonArr=[
    {
      img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon1.jpg",
     category:"Fun",
     tag:"cool",
     name:"Art & Craft",
     color:"#F27C7EE6"
   },
   {
    img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon3.jpg",
   category:"Joy",
   tag:"Enjoy",
   name:"Swim Lesson",
   color:"#4CBCD4E6"
 },
 {
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon5.jpg",
 category:"Learn",
 tag:"Lead",
 name:"Actie Learning",
 color:"#5F8789E6" 
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon6.jpg",
 category:"Relax",
 tag:"Blow",
 name:"Our Approach",
 color:"#AB998FE6"
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon8.jpg",
 category:"Fun",
 tag:"Enjoy",
 name:"Our School",
 color:"#1ABC9CE6"
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon7.jpg",
 category:"Bliss",
 tag:"Slick",
 name:"Karate Kid",
 color:"#9B59B6E6"
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon9.jpg",
 category:"Blow",
 tag:"Enjoy",
 name:"Play Time",
 color:"#EA9D5FE6"
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon6.jpg",
 category:"Fun",
 tag:"Joy",
 name:"Your Innovations",
 color:"#CF571BE6"
},
{
  img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/cartoon1.jpg",
 category:"Bliss",
 tag:"Enjoy",
 name:"Music Hour",
 color:"#4ECAF2E6"
},
  
  ]
  const Handler=(e)=>{
    setData(e)
  }
  let NewArr=[];
  if(Data !== "All"){
   NewArr= CartoonArr.filter((e)=>{
    return e.category == Data
   })
  }
  if(NewArr.length>0){
    CartoonArr =NewArr
  }


  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[#F0F3F3]' >
        <div className='md:w-[90%] lg:w-[75%] min-h-screen lg:flex-nowrap md:flex-nowrap flex-wrap  flex pt-20 lg:justify-normal md:justify-normal justify-center'>
           <div className='w-[90%]   md:w-[60%] lg:w-[75%] md:min-h-screem lg:min-h-screen  '>
            <div className='h-20 w-full flex  items-center justify-center  ' >
               <div className='h-full flex md:items-end lg:items-end gap-2 pb-1 text-white sm:flex-wrap sm:gap-1 sm:w-[80%] lg:flex-nowrap md:flex-nowrap flex-wrap md:justify-start lg:justify-start px-5 justify-center items-center '>
                {
                  ButtonsData.map((e,i)=>(
                    <button key={e} onClick={()=>{
                      Handler(e)
                    }} className={`px-[22px] lg:px-[22px] md:px-[14px] py-[8px] rounded-tl-xl rounded-br-xl ${Data==e ? "bg-[#cf571b]" :"bg-[#008c99]"} relative overflow-hidden`} >{e}
                    <span className={`w-20 left-0 absolute block bottom-0 h-1 ${Data == e ? "bg-[#ae4612]":"bg-[#02747f] " }`} ></span>
                    </button>
                  ))
                }
               </div>
            </div>
            <div className='min-h-screen w-full flex flex-wrap gap-5 pt-10' >
               {
                CartoonArr.map((e,i)=>(
                  <div key={e.name} className='flex flex-col items-center  gap-2'>
                    <CartoonHexa img={e.img} color={e.color}  />
                    <h2 className='text-xl text-[#5c5c5c] font-bubblegum'>{e.name}</h2>
                    <p className='text-[#0E929E] flex gap-1 items-center' ><IoGift className='text-[#5c5c5c]' /> {e.tag},{e.category}</p>
               </div>
                ))
               }
            </div>
           </div>
           <div className='w-[80%] md:w-[25%] lg:w-[25%] min-h-screen ' >
            <Category/>
           </div>
        </div>
    </div>
  )
}

export default MainPortfolioSection