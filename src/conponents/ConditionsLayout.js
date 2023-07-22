import React from 'react'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { Outlet } from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import { PiBookOpenTextBold } from "react-icons/pi";
import { GoLaw, GoOrganization } from 'react-icons/go';
import { GiProcessor } from 'react-icons/gi';

const ConditionsLayout = () => {
  return (
    <>
    {/* <Processes />
    <legalIssues/> */}
      <div className="hidden md:flex  w-full  flex flex-col ">
        
      <div className=" flex w-full mt-10 justify-center items-center ">
        <input
          className="border-2  border-[#468B97] w-[90%] rounded-3xl relative text-right p-2 focus:outline-none "
          placeholder="جستجو"
        />
        <button className="absolute w-12 h-12 left-9 rounded justify-center items-center ">
          <AiOutlineSearch size={20} style={{ color: "blue" }} />
        </button>
        </div>
        <div className=" m-2 rtl ">
     <Outlet/>
        </div>
          
    <div className=" p-2 w-full h-16 bg-[#DDE6ED] flex justify-between items-center rounded-lg">
            
          <HiMenu size={30} style={{color:"#1F6E8C"}} />
          <GoLaw size={30}  style={{color:"#FFF"}}/>
          <AiFillHome size={30} style={{color:"#FFF"}}/>
          <GoOrganization size={30}  style={{color:"#FFF"}}/>
          <GiProcessor size={30} style={{color:"#FFF"}}/>
      </div>



      </div>
      

{/* mobile screen */}

    <div className="md:hidden  w-full  flex flex-col ">
    <div className=" flex w-full mt-10 justify-center items-center ">
        <input
          className="border-2  border-[#468B97] w-[90%] rounded-3xl relative text-right p-2 focus:outline-none "
          placeholder="جستجو"
        />
        <button className="absolute w-12 h-12 left-9 rounded justify-center items-center ">
          <AiOutlineSearch size={20} style={{ color: "blue" }} />
        </button>
        </div>


        <div className=" m-2 rtl ">
     <Outlet/>
        </div>
          
    <div className=" p-2 w-full h-16 bg-[#DDE6ED] flex justify-between items-center rounded-lg mt-[100%]">
            
          <HiMenu size={30} style={{color:"#1F6E8C"}} />
          <GoLaw size={30}  style={{color:"#FFF"}}/>
          <AiFillHome size={30} style={{color:"#FFF"}}/>
          <GoOrganization size={30}  style={{color:"#FFF"}}/>
          <GiProcessor size={30} style={{color:"#FFF"}}/>
      </div>
      </div>
  </>
  )
}

export default ConditionsLayout