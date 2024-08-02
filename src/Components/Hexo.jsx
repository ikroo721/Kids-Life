/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import HexoOverlay from './HexoOverlay'
import OverLayHeading from './OverlayHeading'

const Hexo = ({children}) => {
    const [Active, setActive] = useState(false)
    const [Two, setTwo] = useState(false)
    const Handlemove=()=>{
        setActive(true)
    }
    const HandleLeave=()=>{
        setActive(false)
    }
  return (
    <div onMouseMove={Handlemove} onMouseLeave={HandleLeave} className='h-full w-full clip-your-hexagon ' >
        <img className='h-full w-full object-cover' src={children.img} alt="" />
    {
                    Active && <HexoOverlay item="three" >
                        <OverLayHeading>Our Creation</OverLayHeading>
                    </HexoOverlay>
   }
     </div>
  )
}

export default Hexo