import React from "react";
import list from "../db.js";
import { Link,useLocation } from "react-router-dom";
const Conditions = () => {
  const location = useLocation()
  console.log(location)
  // console.log(Value)

  return (
    <>
      {/* <div className="hidden md:flex bg-blue-500 w-[50%] flex-col justify-center items-center ">

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





      </div> */}
          <div className="hidden md:flex w-full  flex-wrap rtl">

        {
          location.state?
          list.map((i) => {
  // console.log(i.icon)
  return <>
    {/* <div>{Value}</div> */}
      
      {i.name === location.state.Value ?
           <Link to={`/conditions/${i.id}`}>
         <div className="m-97 p-98 w-99 shadow-xl rounded-2xl border-2 border-[#105251] cursor-pointer hover: hover:shadow-slate-700">
         <div className="flex items-center">
         <img src={i.icon} alt="" />
         </div>
         <div className="font-Vazirmatn h-12 text-center font-bold text-xl mt-2 hover:text-[#105251]">
           {i.name}
           </div>
         
         </div>
         </Link>

    
    :  <div className="m-97 p-98 w-99 shadow-xl rounded-2xl border-2 border-white ">
        <div className="flex items-center  ">
          <img src={i.icon2} alt="" className="" />
    </div>
    <div className="font-Vazirmatn h-12 text-gray-500 text-center font-bold text-xl mt-2">
      {i.name}
      </div>
    
      </div>
   
    }
   
  </>
          })
          :
              list.map((i) => {
                return <>
                 <Link to={`/conditions/${i.id}`}>
          <div className="m-97 p-98 w-99 shadow-xl rounded-2xl border-2 border-[#105251] cursor-pointer hover: hover:shadow-slate-700">
          <div className="flex items-center">
          <img src={i.icon} alt="" />
          </div>
          <div className="font-Vazirmatn h-12 text-center font-bold text-xl mt-2 hover:text-[#105251]">
            {i.name}
            </div>
          
          </div>
          </Link>
                
                </>
            })}
        
</div>
<div className="md:hidden  w-full  flex flex-col justify-between">
{     
        <div className="  grid grid-cols-2 gap-3  rtl items-center justify-center overflow-auto ">
          {
            location.state?
            list.map((item) => {
            return (
              <>
                {item.name === location.state.Value ?
                <Link to={`/conditions/${item.id}`} key={item.id}>
                <button className="border-2 border-[#105251] font-Vazirmatn text-xl font-bold text-center text-[#213555] rounded-3xl mr-3 w-[90%] 
              h-60 mt-5 items-center flex justify-center flex-col cursor-pointer" key={item.id}>
                <img src={item.icon} alt="" className=" h-44 p-4 rounded-3xl object-cover"/>
                  {item.name}
              </button>
                  </Link>
                  :
                  // <Link to={`/conditions/${item.id}`} key={item.id}>
                  <button className="border-2  border-white font-Vazirmatn text-xl font-bold text-center text-gray-400 rounded-3xl mr-3 w-[90%] 
                h-60 mt-5 items-center flex justify-center flex-col cursor-pointer" key={item.id}>
                  <img src={item.icon2} alt="" className=" h-44 p-4 rounded-3xl object-cover"/>
                    {item.name}
                </button>
                // </Link>
              
              
              }
                
              </>
            );
            })
                :
                list.map((item) => {
                  return (
                    <>
                      <Link to={`/conditions/${item.id}`} key={item.id}>
                        <button className="border-2 border-[#105251] font-Vazirmatn text-xl font-bold text-center text-[#213555] rounded-3xl mr-3 w-[90%] 
                      h-60 mt-5 items-center flex justify-center flex-col cursor-pointer" key={item.id}>
                        <img src={item.icon} alt="" className=" h-44 p-4 rounded-3xl object-cover"/>
                          {item.name}
                      </button>
                      </Link>
                    </>
                  );
                  })

          }
        </div> }
      </div>
    </>
  );
};

export default Conditions;
