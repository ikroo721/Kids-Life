/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa6';

const RightAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };
  const accordionItems = [
    {
      id: 1,
      heading: "Who we are?",
      content: (
        <>
         
          <p className="text-gray-500 dark:text-gray-400">
          Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
          </p>
        </>
      ),
    },
    {
      id: 2,
      heading: "What we do in academics?",
      content: (
        <>
          <p className="text-gray-500 dark:text-gray-400">
          Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
          </p>
        </>
      ),
    },
    {
      id: 3,
      heading: "How do we work for stategic plans?",
      content: (
        <>
           <p className="text-gray-500 dark:text-gray-400">
          Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
          </p>
        </>
      ),
    },
    {
        id: 4,
        heading: "Our overall action towards target?",
        content: (
          <>
             <p className="text-gray-500 dark:text-gray-400">
            Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
            </p>
          </>
        ),
      },
      {
        id: 5,
        heading: "The outcome of performance?",
        content: (
          <>
             <p className="text-gray-500 dark:text-gray-400">
            Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
            </p>
          </>
        ),
      },
      {
        id: 6,
        heading: "What is the purpose of Registration?",
        content: (
          <>
             <p className="text-gray-500 dark:text-gray-400">
            Consectetur adipiscing elit. Praesent pulvinar massa nec augue malsuada in aliquam odio interdum.
            </p>
          </>
        ),
      },
  ];

  return (
  <div className='w-[90%]  md:w-1/2 lg:h-[45vh]  lg:w-1/2 relative' >
      <div className="max-w-screen-md mx-auto px-4 pt-5 dark:bg-gray-800">
      <div id="accordion-collapse" className='flex flex-col  lg:h-[40vh] justify-evenly w-full'>
        {accordionItems.map(({ id, heading, content }) => (
          <div key={id}>
            <h2 id={`accordion-collapse-heading-${id}`}>
              <button
                type="button"
                className={`flex items-center  justify-between w-full p-5  py-1 px-1 font-medium         gap-3 `}
                onClick={() => toggleAccordion(id)}
                aria-expanded={activeIndex === id}
                aria-controls={`accordion-collapse-body-${id}`}
              >
                <span className={`flex  lg:items-center lg:justify-center md:gap-2 lg:gap-3 font-semibold ${activeIndex === id ? 'text-[#008C99] dark:bg-gray-700' : 'text-[#333334]'}`} ><div className={`h-7 w-7 md:h-7 md:w-7 lg:h-6 lg:w-6 rounded-full  flex items-center justify-center ${activeIndex === id ? 'bg-[#008C99] dark:bg-gray-700' : 'bg-[#333334]'}`}><FaQuestion className='text-[12px] text-white'/></div>{heading}</span>
              </button>
            </h2>
            <div id={`accordion-collapse-body-${id}`} className={`transition-max-height  ${activeIndex === id ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`} aria-labelledby={`accordion-collapse-heading-${id}`}>
              <div className="p-5 px-10 text-sm  ">
                {content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default RightAccordion;
