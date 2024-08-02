/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

const Contact = () => {
  const [active, setactive] = useState(false)
  const Handler=()=>{
    setactive(true)
  }
  const LeaveHandler=()=>{
    setactive(false)
  }
  return (
    // width="1200" height="500"
    <div className='min-h-screen w-full bg-[#F0F3F3] flex items-center justify-center flex-col gap-10' >
      <div onMouseEnter={Handler} onMouseLeave={LeaveHandler}  className='md:w-[95%] lg:w-[75.8%] h-[64.7%] relative ' >
      <iframe  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56617.007843279906!2d152.97375290897563!3d-27.513963306114192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x6b915a82de0a1c91%3A0x1c02a35e27d73730!2sYeronga%20QLD%204104%2C%20Australia!3m2!1d-27.514045499999998!2d153.0149526!5e0!3m2!1sen!2s!4v1722348957390!5m2!1sen!2s" className='w-full h-[64vh]'
      style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      { !active && <div className='h-full w-full bg-[#515152b6] absolute top-0' ></div>  }
      </div>
      <div className='md:w-[95%] lg:w-[75.8%]  flex md:justify-between md:flex-nowrap lg:flex-nowrap flex-wrap lg:justify-between justify-center md:gap-0 gap-5 lg:gap-0 ' >
      <div className="border-4  w-[80%] lg:w-[75%] md:w-[70%] md:h-[70vh] lg:h-[65vh] bg-white relative flex items-center justify-center"
  style={{
    borderImage: 'url(https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/contact_form_bg.jpg) 10 round',
    borderWidth: '5px',
  }}
>
  <form className='h-full w-full px-10 py-10 flex flex-col gap-5   ' >
    <h1 className='text-3xl font-bubblegum text-[#5c5c5c]' >We'd Like to Hear From You!</h1>
    <div className='flex gap-4 lg:flex-nowrap md:flex-nowrap flex-wrap'> 
      <input type="text" className='md:w-1/3 w-full lg:w-1/3 py-3 px-3 text-lg border font-bubblegum text-[#5c5c5c] bg-transparent' placeholder='Name' />
      <input type="text" className='md:w-1/3 w-full lg:w-1/3 py-3 px-3 text-lg border font-bubblegum text-[#5c5c5c] bg-transparent' placeholder='Email ID' />
      <input type="text" className='md:w-1/3 w-full lg:w-1/3 py-3 px-3 text-lg border font-bubblegum text-[#5c5c5c] bg-transparent' placeholder='Subject' />
    </div>
    <input type="text" className='w-full h-[45%] flex items-start  py-3 px-3 text-lg border font-bubblegum text-[#5c5c5c] bg-transparent placeholder-top placeholder:absolute placeholder:top-5 relative' placeholder='Message' />
    <button className='px-4  py-4 rounded-sm text-white bg-[#008C99] w-28' >Send Mail</button>
  </form>
  
      </div>
      <div className='md:w-[24%] w-[80%] h-[50vh]  lg:w-[22%] md:h-[45vh] lg:h-[43vh] flex items-center justify-center  relative'>
        <div className='w-full md:h-[43vh] h-full lg:h-[43vh] bg-white rounded-lg overflow-hidden'>
          <div className='w-full h-12 bg-[#008C99] px-3 flex items-center '>
          <h2 className='text-3xl font-bubblegum text-white'>Class Hours</h2>
          </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
         <div className='flex justify-between w-full border border-t-0 border-l-0 border-r-0 px-3 py-2 md:text-[13px] '>
         <p>Monday</p>
         <p>9pm - 3pm</p>
         </div>
        </div>
      </div>

      </div>
      <div className='md:w-[95%] lg:w-[70%]  mb-20 flex flex-col gap-1' >
        <h2 className='text-[#008C99] text-sm'>We Care <span className='text-[#5c5c5c]' >about you dearest</span></h2>
        <div className='flex gap-2'>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/picasa.png")] bg-center w-8 h-8  bg-[#8a66a3]'  >
           
           </div>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/facebook.png")] bg-center w-8 h-8  bg-[#3c5b9b]'  >
           
           </div>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/dribbble.png")] bg-center w-8 h-8  bg-[#f974a4]'  >
           
           </div>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/google_plus.png")] bg-center w-8 h-8  bg-[#ba3526]'  >
           
           </div>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/twitter.png")] bg-center w-8 h-8  bg-[#2caae1]'  >
           
           </div>
           <div className='bg-[url("https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/sociables/pinterest.png")] bg-center w-8 h-8  bg-[#ca1325]'  >
           
           </div>
        </div>
      </div>
    </div>
  )
}

export default Contact