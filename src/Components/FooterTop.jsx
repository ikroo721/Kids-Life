/* eslint-disable no-unused-vars */
import React from 'react'
import FooterLine from './FooterLine'
import FooterProductHandler from './FooterProductHandler'
import FooterProductHead from './FooterProductHead.jsx'
import FirstFooter from './FirstFooter'
import SecondFooter from './SecondFooter'
import ThirdFooter from './ThirdFooter'
import FourthFooter from './FourthFooter'
const FooterTop = () => {
    const FooterPage=[
        {
           name:"About Kids Life",
           bgcolor:"#F27C7E",
        },
        {
            name:"Recent Products",
           bgcolor:"#ADC058",
        },{
           bgcolor:"#FCE385",
           name:"Twitter Feeds"
        },
        {
           bgcolor:"#4D7295",
           name:"Contact Us"
        }
       ]
    //    after:w-full after:h-16 after:-top-16 after:absolute after:bg-cover after:bg-repeat after:-bg-left after:bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_top_bg.png")]
  return (
    <div className='min-h-[45vh] lg:h-[60vh] w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_bg.png")]  bg-top bg-white bg-cover before:contents-[""]
        flex  justify-between pt-20 items-center flex-col'  >
         <div className='absolute w-full overflow-hidden h-16 -top-16 z-10 flex justify-between flex-nowrap ' >
            <div className='-ml-96' >
            <img className='h-16 object-cover' src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_top_bg.png" alt="" />
            </div>
            <div>
            <img className='h-16 object-cover' src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_top_bg.png" alt="" />
            </div>
            <div className='-mr-96' >
            <img className='h-16 object-cover' src="https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_top_bg.png" alt="" />
            </div>
           
           </div>
            <div className='min-h-[45vh] xl:bg-red-500 xlg:bg-green-500 lg:bg-blue-500 md:bg-yellow-500 sm:bg-teal-500 bg-purple-500 sm:w-[90%] md:w-full   lg:w-[75%] xl:w-[80%] 
            xlg:w-[90%]  flex items-center md:justify-center justify-center lg:justify-start  flex-wrap gap-2 lg:gap-6    '>
                {
                    FooterPage.map((e,i)=>(
                    <FooterProductHandler key={e} >
                     <FooterProductHead bg={e} >

                     </FooterProductHead>
                     {i == 0 && <FirstFooter></FirstFooter> }
                     {i == 1 && <SecondFooter></SecondFooter> }
                     {i == 2 && <ThirdFooter></ThirdFooter> }
                     {i == 3 && <FourthFooter></FourthFooter> }
                    </FooterProductHandler>
                    ))

                }
            </div>
            <FooterLine/> 
        </div>
  )
}

export default FooterTop