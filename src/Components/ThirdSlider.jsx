/* eslint-disable no-unused-vars */
import React from 'react'

const ThirdSlider = () => {
  return (
    <div className='h-[25vh] md:h-[50vh] lg:h-[90vh] w-full bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/black-board.jpg")] bg-cover flex items-center justify-center pt-5 px-3'  >
        
        <div className='h-full w-2/3  flex flex-col justify-center items-end '>
            <div className='flex w-3/4'>
                 <div className='md:block lg:block hidden' >
                    <img className='lg:block md:block  hidden' src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/b-game.png" alt="" />
                 </div>
                 
            </div>
            <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/b-comment.png")] h-full md:h-full lg:h-2/3 md:w-4/5 lg:w-3/4 bg-no-repeat  flex p-10 flex-col justify-between bg-cover md:py-3 lg:py-20'>
                <div>
                    <img className='md:h-9 h-3 w-12 md:w-32 ' src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/welcome-text.png" alt="" />
                </div>
                <div className='md:w-2/3 lg:w-2/3 text-[7px] lg:block md:hidden lg:text-2xl text-[#FFFFFF]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat fuga, maiores quas vel ipsa provident ipsam aspernatur ex vitae ut quaerat eligendi itaque libero, accusamus excepturi possimus, aut praesentium?</p>
                </div>
                <div>
                    <img className='h-5' src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/purchase-theme.png" alt="" />
                </div>
            </div>
            <div className='flex w-2/3 justify-between' >
            <div>
                    <img className='md:w-5 w-2 ' src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/b-bulb.png" alt="" />
                 </div>
            <div>
                <img className='md:w-5 w-2' src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/b-glass.png" alt="" /></div>     
            </div>
        </div>
        <div className='h-full w-1/3 flex items-end'>
           <div className='h-full flex items-end'>
            <img src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/school-kid.png" alt="" />
           </div>
           <div className='h-full py-12'>
            <img src="https://kidslifedev.wpengine.com/wp-content/uploads/layerslider/KidsLife-Slider/b-cloud.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default ThirdSlider