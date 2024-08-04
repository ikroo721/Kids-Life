/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PortFolioHexa from './PortFolioHexa'

const HexagonPage = () => {
    const [Active, setActive] = useState(false)
    const HexaGon = [
        {
           color:"#EA9D5FE6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image1.jpg",
           content:"Leisure Time",
        },
        {
           color:"#DE81B8E6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image2.jpg",
           content:"With Friends"
        },
        {
           color:"#F27C7EE6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image3.jpg",
           content:"Toddler Style",
        },
        {
           color:"#BC5393E6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image4.jpg",
           content:"GET ToGETHER"
        },
        {
           color:"#4CBCD4E6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image5.jpg",
           content:"Park Games"
        },
        {
           color:"#CF571BE6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image6.jpg",
           content:"Guitar Music"
        },
        {
           color:"#4C7296E6",
           img:"https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image7.jpg",
           content:"My Creation"
        }
     ]
  return (
<div className='lg:min-h-[10vh] w-full  pt-10 bg-[#F0F3F3]' >
        <div className=' w-full  flex items-center justify-center g ' >
  <PortFolioHexa  color="#EA9D5FE6" img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image1.jpg" >
  Leisure Time
    </PortFolioHexa>       
        </div> 
        <div className=' w-full   flex items-center justify-center 
        lg:gap-[12vw] md:gap-[12vw] lg:-mt-[10.9vw] md:-mt-[10.9vw] flex-wrap' >
            <PortFolioHexa color="#DE81B8E6" img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image2.jpg" >
            With Friends
            </PortFolioHexa>
            <PortFolioHexa color="#F27C7EE6" img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image3.jpg" >
            Toddler Style
            </PortFolioHexa>

            
        </div> 
        <div className=' w-full lg:-mt-[11.5vw] md:-mt-[11.5vw]  flex items-center justify-center ' >
            <PortFolioHexa img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image4.jpg" color="#BC5393E6" >
            GET ToGETHER
            </PortFolioHexa>

            
        </div> 
        <div className=' w-full   flex items-center justify-center 
        lg:gap-[12vw] md:gap-[12vw] lg:-mt-[10.9vw] md:-mt-[10.9vw] flex-wrap' >
           <PortFolioHexa color="#4CBCD4E6" img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image5.jpg">
           Park Games
           </PortFolioHexa>
            <PortFolioHexa color="#CF571BE6" img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image6.jpg" >
            Guitar Music
            </PortFolioHexa>

            
        </div>  
        <div className='w-full md:-mt-[11.5vw] lg:-mt-[11.5vw]  flex items-center justify-center ' >
       
            <PortFolioHexa img="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/image7.jpg" color="#4C7296E6" >
            My Creation
            </PortFolioHexa>
            
        </div> 
    </div>
  )
}

export default HexagonPage