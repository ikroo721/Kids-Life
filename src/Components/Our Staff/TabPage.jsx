/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaMusic, FaRegSmile, FaStar } from 'react-icons/fa';
import TabButton from './TabButton';
import TabContent from './TabContent';
import TabPara from './TabPara';
import TabIcon from './TabIcon';

const TabPage = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const showTab = (tabId) => {
      setActiveTab(tabId);
    };
    const Tab=["tab1","tab2","tab3"]
    const TabArr=[
        {
        tab:"tab1",
        icon:<FaRegSmile className='text-[#F4C44E]' />,
        content: "Tab 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet",
        },
        {
        tab:"tab2",
        icon:<FaMusic className='text-[#CF571B]' />,
        content:"Tab 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },
        {
        tab:"tab3",
        icon:<FaStar className='text-[#DE81B8]' />,
        content: "Tab 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        }
        ]
  return (
    <div className='w-[90%] md:w-1/2 lg:w-[36vw] h-full ' >
  <div className="w-full h-full ">
      <div className=" flex items-end justify-start  h-12">
        
        <div className="flex  gap-[1px]">
          {Tab.map((e,i)=>(
            <TabButton key={i} active={activeTab} showTab={showTab} >{e}</TabButton>
          ))}
        </div>
      </div>
    {
        TabArr.map((e,i)=>(
            <TabContent key={i} active={activeTab} tab={e.tab} >
                <TabPara>{e.content}</TabPara>
                <TabIcon>{e.icon}</TabIcon>
            </TabContent>
        ))
    }
    </div>
  </div>
  )
}
export default TabPage