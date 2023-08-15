import React from "react";
import Background from "./Background";
import logo from "./Images/104.png";
import logoMd from "./Images/logo.png";
import img from "./Images/image1.jpg";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <>
            <div>
        <div className="hidden md:flex w-full h-screen  flex-col">
          <Background/>
</div>







      </div>
      {/* <div>

      <div className="hidden md:flex w-full h-screen  flex-col">
        <img src={img} alt="" className=" relative w-full h-full object-cover" />
        <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/50"></div>
     
       
        <div className="absolute w-full  items-center justify-between flex ">
          <div className="flex items-center justify-betweeb w-[20%]">
                <img src={logoMd} alt="" className="w-20 h-24 p-2 items-center justify-center flex " />
               
             
          </div>

          <div className=" flex">
        
          </div>
          <div className=" w-[10%]"></div>
        </div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
    
          <div  className="flex justify-between items-center max-w-[700px] mx-auto w-full p-1
        rounded-md text-black ">
          <input
              className="border-2  border-[#AAAAAA] w-[90%] h-12 rounded-3xl relative text-right p-2 focus:outline-none "
              placeholder="جستجو"
            />
                <button className="absolute w-12 h-12 rounded ml-5 items-center ">
                  <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </div>
          <div>
           
          </div>
            <div className="flex  items-center justify-center">
            <button className="border-2 border-white m-2 p-5 rounded-xl cursor-pointer hover:bg-white hover:text-black hover:font-bold ">تعاریف عمومی</button>
            <button className="border-2 border-white m-2 p-5 rounded-xl cursor-pointer hover:bg-white hover:text-black hover:font-bold ">وضعیت های مخاطره آمیز</button>
            </div>
            
        </div>
      </div>
      </div> */}

      {/* mobile screen */}

      {/* <div className="md:hidden w-full h-screen bg-[#1D5B79]">
        <div>
          <div className=" w-full items-center justify-center flex ">
            <img
              src={logoMd}
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
      </div> */}
    </>
  );
};

export default Home;
