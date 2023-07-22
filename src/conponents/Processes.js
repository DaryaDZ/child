import React, { useState } from "react";
import { useParams } from "react-router-dom";
import list from "../db.js";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";

const Processes = () => {
  let { id } = useParams();
  const process = list.find((item) => item.id == id);
  // console.log(process.Processes)
  const [isOpen, setIsopen] = useState(false);
  const [isOpenlegal, setIsopenlagal] = useState(false);
  const [action, setaction] = useState("");
  const [idItem, setIditem] = useState("");
  const [lagalid, setLagalId] = useState("");
 
  const handelopen = (itemId) => {
    // console.log("first")
    const item = process.Processes.find((i) => i.id === itemId);
    setaction(item.Actions);
    setIsopen(true);
    setIditem(itemId);
    console.log(item);
  };
  const legalOen = (itemid) => {
    console.log("first")
    const item = process.Processes.find((i) => i.id === itemid);
    setIsopenlagal(true);
    setLagalId(itemid);
  }
  let x = process.Processes.length;
  let y = 0;
  return (
    <>
      <div className="text-xl font-bold text-center mt-5"> فرآیند ها </div>{" "}
      <div className="w-full justify-center items-center text-center hidden md:flex flex-col mt-16  ">
        {process.Processes.map((item) => {
          x = x - 1;
          return (
            <>
              <div className=" w-full items-center justify-center flex">
                {idItem === item.id && isOpen ? (
                  <button
                    className="border-2 rounded border-[#213555] w-full h-full p-2 shadow-xl shadow-[#4F709C] font-bold"
                    // onClick={() => setIsopen(false)}
                  >
                    {item.processName}
                    <ul className="text-justify text-sm font-normal w-full rtl ">
                      {action}
                      <div className="">دستگاه های مسئول :{item.orgnization.map(item => {
                        return <>
                          <div>
                            <p className=""> {item.organNam}: {item.organAction}</p>
                            <div className="font-bold">دستگاه های همکار:</div>
                            {
                              item.society.map(item => {
                                return <>
                                  <p >{item.societyName} :{ item.societyAction}</p>
                                
                                </>
                              })
                          }
  
                          </div>
                          
                        
                        </>
                      })}</div>
                     
                    </ul>
                  </button>
                ) : (
                  <button
                    className="border-2  rounded-xl border-[#213555] w-[30%] h-16  shadow-lg shadow-[#4F709C]	flex justify-center items-center"
                    onClick={() => handelopen(item.id)}
                  >
                    
                      {item.processName}
                  </button>
                )}
                
              </div>
              {x > 0 ? <AiOutlineArrowDown size={30} className="icon" /> : ""}
            </>
          );
        })}{" "}
      </div>{" "}
      <div className="md:hidden z-10">
        <div className="w-full flex flex-col items-center ">
          {" "}
          {/*         
                <button
                  className=" w-[95%] h-20 border-2 rounded-xl border-red-500/40 shadow-lg shadow-red-400 font-bold text-lg"
                  onClick={description}
                >
                  شناسایی و بررسی
                  
                </button>
                <AiOutlineArrowDown size={30} className="icon" />
                <button
                  className=" w-[95%] h-20  border-2 rounded-xl border-orange-500/40 shadow-lg shadow-orange-400 font-bold text-lg"
                  onClick={description}
                >
                  بررسی و تحلیل
                </button>
                <AiOutlineArrowDown size={30} className="icon" />
                <button
                  className=" w-[95%] h-20  border-2 rounded-xl border-blue-500/40 shadow-lg shadow-blue-400 font-bold text-lg"
                  onClick={description}
                >
                  فراهم کردن محیط حمایتی
                </button>
                <AiOutlineArrowDown size={30} className="icon" />
                <button
                  className=" w-[95%] h-20  border-2 rounded-xl border-green-500/40 shadow-lg shadow-green-400 font-bold text-lg"
                  onClick={description}
                >
                  مداخله قضایی
                </button>
                <AiOutlineArrowDown size={30} className="icon" />
                <button
                  className=" w-[95%] h-20  border-2 rounded-xl border-purple-500/40 shadow-lg shadow-purple-400 font-bold text-lg"
                  onClick={description}
                >
                  اقدامات قانونی
                </button>
                <AiOutlineArrowDown size={30} className="icon" />
                <button
                  className=" w-[95%] h-20  border-2 rounded-xl border-yellow-500/40 shadow-lg shadow-yellow-400 font-bold text-lg"
                  onClick={description}
                >
                  نظارت و پایش
                </button> */}{" "}
          {process.Processes.map((item) => {
            x = x - 1;
            return (
              <>
                {idItem === item.id && isOpen ? (
                  <button
                    className="border-2 text-[#FF0060] top-0 text-lg rounded border-[#FFA41B] w-[95%] h-72  p-1 shadow-xl shadow-[#F86F03] font-bold mt-5"
                    onClick={() => setIsopen(false)}
                  >
                    {item.processName}{" "}
                    <ul className="text-justify text-sm text-black font-normal rtl">
                      {" "}
                      {action}{" "}
                    </ul>{" "}
                  </button>
                ) : (
                  <button
                    className="border-2 font-bold text-lg rounded border-[#00DFA2] w-[95%] h-20  shadow-lg shadow-[#00C4FF] mt-5	 "
                    onClick={() => handelopen(item.id)}
                  >
                    {item.processName}{" "}
                  </button>
                )}{" "}
                {x > 0 ? <AiOutlineArrowDown size={30} className="icon" /> : ""}
              </>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Processes;
