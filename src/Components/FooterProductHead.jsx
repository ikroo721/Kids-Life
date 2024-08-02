/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const FooterProductHead = ({bg}) => {
    console.log(bg)
  return (
    <div className='h-16  flex flex-col  justify-center relative ' >
      <h2  className={`text-2xl    font-bubblegum`}  >{bg.name}</h2>
<div style={{backgroundColor: `${bg.bgcolor}`}}  className='h-5 w-full  bg-[url("https://kidslifedev.wpengine.com/wp-content/themes/kidslife/images/footer_title_bg.png")] bg-no-repeat bg-cover  ' >

</div>
    </div>  
  )
}

export default FooterProductHead