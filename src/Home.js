import React from "react";
import Background from "./Background";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="hidden md:flex w-full h-screen bg-[#1D5B79] flex-col">

      <div>
        <div className=" w-full items-center justify-center flex ">
          <img
            src={logo}
            alt=""
            className="w-[50%] mb-5 mt-10 p-4 rounded-full"
          />
          </div>
         <div className="mt-44"></div>
  </div>
  <div className=" bg-white mt-24 rounded-lg w-full h-44 items-center justify-center flex bottom-0">
          <Link to="/manipage">
          <button className="border-2 border-[#068FFF] bg-[#1D5B79] font-bold text-white text-lg w-48 rounded-3xl h-12">
            ادامه
          </button>
          </Link>
        </div>


      </div>
      
{/* mobile screen */}

      <div className="md:hidden w-full h-screen bg-[#1D5B79]">
        <div>
        <div className=" w-full items-center justify-center flex ">
          <img
            src={logo}
            alt=""
            className="w-[50%] mb-5 mt-10 p-4 rounded-full"
          />
          </div>
         <div className="mt-44"></div>
  </div>
        
        <div className=" bg-white mt-24 rounded-lg w-full h-44 items-center justify-center flex bottom-0">
          <Link to="/manipage">
          <button className="border-2 border-[#068FFF] bg-[#1D5B79] font-bold text-white text-lg w-48 rounded-3xl h-12">
            ادامه
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
