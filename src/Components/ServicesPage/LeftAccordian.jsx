/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'flowbite';
import { LuChevronsUpDown } from 'react-icons/lu';
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className='w-[90%] md:w-1/2 lg:w-1/2 min-h-[40vh] ' >
        <div className="max-w-screen-md h-full mx-auto px-4 pt-5  ">
      <div id="accordion-flush" data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400">
        
        <h3 id="accordion-flush-heading-1">
          <button type="button"
            className={`flex items-center justify-between w-full py-2   font-medium text-left    ${activeIndex === 1 ? 'hidden' : 'flex'}`}
            data-accordion-target="#accordion-flush-body-1" aria-expanded={activeIndex === 1}
            aria-controls="accordion-flush-body-1"
            onClick={() => toggleAccordion(1)}>
            <span className='text-[#333334] uppercase flex text-sm' ><span className='flex flex-col gap-0' ><LuChevronsUpDown className='text-2xl' /></span> Who we are</span>
            
          </button>
        </h3>
        {activeIndex === 1 && (
          <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 bg-white p-5">
              <p className="mb-2 text-[#008C99] dark:text-gray-400 uppercase">Who we are</p>
              <p className=" text-sm " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
        )}

        <h3 id="accordion-flush-heading-2">
          <button type="button"
            className={`flex items-center justify-between w-full py-2  font-medium text-left ${activeIndex === 2 ? 'hidden' : 'flex'}`}
            data-accordion-target="#accordion-flush-body-2" aria-expanded={activeIndex === 2}
            aria-controls="accordion-flush-body-2"
            onClick={() => toggleAccordion(2)}>
            <span className='text-[#333334] uppercase flex text-sm' ><LuChevronsUpDown className='text-2xl' />Proud of what we do</span>
          </button>
        </h3>
        {activeIndex === 2 && (
          <div id="accordion-flush-body-2" aria-labelledby="accordion-flush-heading-2">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 bg-white p-5">
              <p className="mb-2 text-[#008C99] dark:text-gray-400 uppercase">Proud of what we do</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
        )}

        <h3 id="accordion-flush-heading-3">
          <button type="button"
            className={`flex items-center justify-between w-full py-2  font-medium text-left ${activeIndex === 3 ? 'hidden' : 'flex'}`}
            data-accordion-target="#accordion-flush-body-3" aria-expanded={activeIndex === 3}
            aria-controls="accordion-flush-body-3"
            onClick={() => toggleAccordion(3)}>
            <span className="text-[#333334] uppercase flex text-sm" ><LuChevronsUpDown className='text-2xl' />how we work</span>
          </button>
        </h3>
        {activeIndex === 3 && (
          <div id="accordion-flush-body-3" aria-labelledby="accordion-flush-heading-3">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 bg-white p-5 ">
              <p className="mb-2 text-[#008C99] dark:text-gray-400 uppercase">how we work</p>
              <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
        )}

        <h3 id="accordion-flush-heading-4">
          <button type="button"
            className={`flex items-center justify-between w-full py-2  font-medium text-left  ${activeIndex === 4 ? 'hidden' : 'flex'}`}
            data-accordion-target="#accordion-flush-body-4" aria-expanded={activeIndex === 4}
            aria-controls="accordion-flush-body-4"
            onClick={() => toggleAccordion(4)}>
            <span className='uppercase text-[#333334] flex text-sm' ><LuChevronsUpDown className='text-2xl' />why we do it</span>
          </button>
        </h3>
        {activeIndex === 4 && (
          <div id="accordion-flush-body-4" aria-labelledby="accordion-flush-heading-4">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 bg-white p-5">
              <p className="mb-2 text-[#008C99] dark:text-gray-400 uppercase">why we do it</p>
              <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
             
            </div>
          </div>
        )}

<h3 id="accordion-flush-heading-5">
          <button type="button"
            className={`flex items-center justify-between w-full py-2  font-medium text-left ${activeIndex === 5 ? 'hidden' : 'flex'}`}
            data-accordion-target="#accordion-flush-body-4" aria-expanded={activeIndex === 5}
            aria-controls="accordion-flush-body-4"
            onClick={() => toggleAccordion(5)}>
            <span className='uppercase text-[#333334] flex text-sm' ><LuChevronsUpDown className='text-2xl font-semibold' />what is the result?</span>
          </button>
        </h3>
        {activeIndex === 5 && (
          <div id="accordion-flush-body-4" aria-labelledby="accordion-flush-heading-4">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 bg-white">
              <p className="mb-2 text-[#008C99] dark:text-gray-400 uppercase">what is the result?</p>
              <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
             
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Accordion;
