import React from "react";
import list from "../db.js";
import { Link } from "react-router-dom";
const Conditions = () => {

  return (
    <>
      <div className="hidden md:flex bg-blue-500 w-[50%] flex-col justify-center items-center ">

      <div className="  grid grid-cols-2 gap-3 m-1 rtl items-center justify-center overflow-auto">
          {list.map((item) => {
            return (
              <>
                <Link to={`/conditions/${item.id}`}>
                  <button className="border-2 border-[#7895CB] text-center text-[#213555] rounded-3xl text-xs bg-[#A0BFE0] w-[90%]
                h-32 mt-5 items-center flex justify-center flex-col hover:bg-red-500 hover:font-bold " key={item.id}>
                  <img src={item.image} alt="" className="w-22 h-22 p-2 rounded-3xl"/>
                  {item.name}
                </button>
                </Link>
              </>
            );
          })}
        </div>





      </div>
      <div className="md:hidden  w-full  flex flex-col justify-between">
       
        <div className="  grid grid-cols-2 gap-3  rtl items-center justify-center overflow-auto">
          {list.map((item) => {
            return (
              <>
                <Link to={`/manipage/conditions/${item.id}`}>
                  <button className="border-2 border-[#7895CB] text-center text-[#213555] rounded-3xl text-lg  w-[90%] 
                h-60 mt-5 items-center flex justify-center flex-col cursor-pointer" key={item.id}>
                  <img src={item.image} alt="" className=" h-44 p-4 rounded-3xl object-cover"/>
                    {item.name}
                    
                </button>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Conditions;
