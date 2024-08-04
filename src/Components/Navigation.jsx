/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import "flowbite"

const Navigation = () => {
  const LinksToNavigate = [
    { name: "home", bg: "#F27C7E" , },
    { name: "aboutus", bg: "#F7C44E" , },
    { name: "Our staffs",bg: "#ACC158" , },
    { name: "services", bg: "#FCE485" , },
    { name: "events", bg: "#EA9D5F" , },
    { name: "portfolio", bg: "#4CBCD4" , },
    { name: "pages", bg: "#4C7296" , },
    { name: "blog", bg: "#B0B6FB" , },
    { name: "shop", bg: "#BC5393" , },
    { name: "contact us", bg: "#DE81B8" , },
  ];
const [Toggle, setToggle] = useState(false)
const Toggler=()=>{
  setToggle(!Toggle)
}
  return (
    <>
      <div className="md:w-full hidden sm:hidden lg:w-3/4 xl:w-[85%] xlg:w-full h-full md:flex  lg:flex items-center overflow-hidden  ">

        {LinksToNavigate.map((e, i) => (
          <div key={i} className={` relative h-full  flex items-center justify-center text-nowrap z-10 
            ${
              e.name == "home" && " "
            } 
            w-fit
            md:px-1
            xlg:px-[8px]
            lg:px-[14.5px] 
           `} > 
          <div className={`absolute h-1/2 w-[2px] bg-[#F5F5F5] 
          ${
              i == 9 && "-left-[2px]"
          }  
          right-0`} ></div>
            <NavLink
            to={ i==0 ? "../" : i==9 ? "/contact" : i==2 ? "/staff" :"/"+e.name }
            className={
              ` font-lato
               uppercase md:text-[11px] lg:text-sm xlg:text-[12.7px] `
            }
            style={({ isActive }) => ({
              color: isActive ? e.bg : "",
            })}
          >
            {e.name}  
          </NavLink>
          <span
          style={{backgroundColor:e.bg}}
            className={`h-full w-full absolute top-[-87%] left-0 `}
          ></span>
          </div>
        ))}
      </div>
      <div className="md:hidden lg:hidden w-[100%] z-[99]" >
      <div onClick={Toggler} className="w-80 h-10 mt-1 bg-[#008c99]  flex justify-between items-center px-2"> 
      <h2 className="text-2xl font-bubblegum text-white" >Menu</h2>
      <button onClick={Toggler} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-white" aria-controls="navbar-default" aria-expanded="false">
        <span  onClick={Toggler} className="sr-only">Open main menu</span>
        <svg onClick={Toggler} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      </div>
      <div className=" w-full md:block md:w-auto z-[100]" id="navbar-default">
      <ul className="font-medium flex flex-col  md:p-0  overflow-hidden border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
        {
          Toggle && LinksToNavigate.map((e, i) => (
            <div key={i} className={` relative h-9 w-full border-b-2 px-4 flex items-center justify-start z-10 
              ${
                e.name == "home" && " "
              } 
              w-fit
              md:px-1
              lg:px-[14.5px] 
             `} > 
            <div className={`absolute h-1/2 w-[2px] bg-[#F5F5F5] 
            ${
                i == 9 && "-left-[2px]"
            }  
            right-0`} ></div>
              <NavLink
              onClick={Toggler}
              to={ i==0 ? "../" : i==9 ? "/contact" : i==2 ? "/staff" :"/"+e.name }
              className={
                ` font-lato
                 uppercase text-xl focus:text-[${e.bg}]  `
              }
            >
              {e.name}  
            </NavLink>
            </div>
          ))
        }
      </ul>
    </div>
      </div>
    </>
  );
};

export default Navigation;
