/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DottedBorder from './DottedBorder'
import TabButton from '../Our Staff/TabButton';

const Category = () => {
    const [activeTab, setActiveTab] = useState('New');
    const showTab = (tabId) => {
      setActiveTab(tabId);
    };
    const Tab=["New","Popular"]
  return (
    <div className='min-h-screen w-full md:p-2 lg:p-5 flex flex-col gap-5'>
        <DottedBorder>
            Categories
        </DottedBorder>
         <div className='flex justify-between w-full' >
            <a href="" className='text-[#008C99] md:text-[12px]' >Uncategorized</a>
            <p className='md:text-[12px]' >12</p>
         </div>
         <DottedBorder>
           Kids Achievements
        </DottedBorder>
         <div className='flex flex-col gap-2 md:text-[11px] lg:text-sm' >
            <p>
            In lobortis rhoncus pulvinar. Pellentesque habitant morbi tristique <span className='text-[#008C99]' >senectus</span> et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
            Sed tempus ligula ac mi iaculis lobortis. Nam consectetur justo non nisi dapibus, ac commodo mi sagittis. Integer enim odio.
            </p>

         </div>
         <DottedBorder>
           Visual Guidance
        </DottedBorder>
        <div className='lg:block md:block flex items-center justify-center flex-col' >
            <p className='md:text-[12px] md:mb-5 ' >Our methods of teaching and level of quality instructors all add up to a well-rounded experience.</p>
            <div className='h-40 w-40 bg-black bg-[url("https://i.vimeocdn.com/video/427213703-6cdcb77c922baca39c06531ae87f864492a414deb21644d5e28db41036403b47-d?mw=200&mh=150")] bg-cover bg-center'>

            </div>
        </div>
        <DottedBorder>
           Kids Voices
        </DottedBorder>
        <div>
             <div className='flex gap-[1px]' >
             {
                Tab.map((e,i)=>(
                    <TabButton key={i} active={activeTab} showTab={showTab} >{e}</TabButton>
                ))
             }
             </div>
             <div>
                {activeTab == "New" ? 
                <div className='bg-white p-5 flex flex-col items-start gap-2 lg:rounded-lg justify-center lg:h-80' >
                    <h2 className='text-xl text-[#5c5c5c] font-bubblegum' >Explore your Thoughts!</h2>
                    <p className='text-sm' >Nam consectetur justo non nis dapibus, ac commodo mi sagittis. Integer enim odio.</p>
                    <h2 className='text-xl text-[#5c5c5c] font-bubblegum' >Perform Your Success!</h2>
                     <p className='text-sm' >Sed ut perspiciatis unde omi iste natus error siterrecte voluptatem accusantium doloremque laudantium.</p>
                </div>:
                <div className='bg-white p-5 flex flex-col items-start gap-2 rounded-lg justify-center lg:h-80' >
                    <h2 className='text-xl text-[#5c5c5c] font-bubblegum' >Admire and Achieve!</h2>
                    <p className='text-sm' >Sed ut perspiciatis unde omi iste natus error siterrecte voluptatem accusantium doloremque laudantium.</p>
                    <h2 className='text-xl text-[#5c5c5c] font-bubblegum' >Your Opportunity!</h2>
                     <p className='text-sm' >Nam consectetur justo non nis dapibus, ac commodo mi sagittis. Integer enim odio.</p>
                </div>} 
             </div>
             
        </div>
        <DottedBorder>
                Hit On Tags
        </DottedBorder>
        <div className='flex gap-2 text-white' >
        <button className='px-2 py-2 rounded-tl-xl rounded-br-xl lg:px-[15px] md:px-2 md:py-[5px] md:text-[12px] lg:py-[5px]  md:rounded-tl-lg lg:rounded-tl-xl md:rounded-br-lg lg:rounded-br-xl bg-[#008C99]' >Indoor Games</button>
        <button className='px-2 py-2  rounded-tl-xl rounded-br-xl lg:px-[15px] md:px-2 md:py-[5px] md:text-[12px] lg:py-[5px]  md:rounded-tl-lg lg:rounded-tl-xl md:rounded-br-lg lg:rounded-br-xl bg-[#008C99]' >Music</button>
        </div>

    </div>
  )
}

export default Category