/* eslint-disable react/prop-types */
import SmallHexagon from './SmallHexagon'
import {  FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import SmallHexa from './SmallHexa'
const HexoOverlay = ({children,item}) => {
    const text="text-[#5c5c5c]"
  return (
    <div className='absolute h-full bg-[#1897A3E6] bg-opacity-75 w-full clip-your-hexagon z-1 top-0 flex flex-col'>
 <>
   {item =="two" && children}  
<div className={`${item=="two" ? "h-1/2" : "h-full"} w-full flex items-center justify-center gap-2 `} >
{
    item=="two"?<>
      <SmallHexa>
     <SmallHexagon>
        <FaFacebookF className={`${text} text-sm texr-[]`} >
        </FaFacebookF>
      </SmallHexagon>
     </SmallHexa>
      <SmallHexa>
     <SmallHexagon>
        <FaFacebookF className={`${text} text-sm texr-[]`} >
        </FaFacebookF>
      </SmallHexagon>
      </SmallHexa> 
    </> :
    <>
     <SmallHexa>
     <SmallHexagon>
        <FaFacebookF className={`${text} text-sm texr-[]`} >
        </FaFacebookF>
      </SmallHexagon>
     </SmallHexa>
    <SmallHexa>
    <SmallHexagon>
      <FaLinkedinIn className={`${text} text-sm texr-[]`} ></FaLinkedinIn>
      </SmallHexagon>
    </SmallHexa>
    <SmallHexa>
    <SmallHexagon>
      <FaTwitter className={`${text} text-sm texr-[]`} ></FaTwitter>
      </SmallHexagon>
    </SmallHexa>
    </>
}
  </div>
    </> 
   
</div>
  )
}

export default HexoOverlay