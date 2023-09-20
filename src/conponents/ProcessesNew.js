import React from "react";
import { Link, useParams } from "react-router-dom";
import list from "../db.js";
import education from "../Images/Education.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ProcessesNew = () => {
  let { id } = useParams();
  const conditionName = list.find((i) => {
    return i.id == id;
  });
console.log(conditionName.name)
//   const spescialProcessName = list.filter((i) => {
//     return i.name == " بی توجهی و سهل انگاری والدین"
//   });
// console.log(spescialProcessName)
  // let x = conditionName.Processes.length;
  // console.log(conditionName)
  let x=conditionName.Processes.length;
  return (
    <>
      {/* <div className="md:flex hidden flex-col w-full">
        {conditionName.name !== "بی توجهی و سهل انگاری والدین" ?
          <>
          
          
          
          </> : <></>  
        
        
        
        }
      <div className="flex flex-col justify-center items-center">
          <section className="font-bold text-2xl">فرآیند ها </section>
          <img
            src={conditionName.image}
            alt=""
            className="w-[90%] rounded-xl mt-5"
          />
          {conditionName.Processes.map((item) => {
            return (
              <>
                {item.processName !== "برنامه‌ریزی و طراحی برنامه مداخله" ? (
                  item.processName == "مشارکت خانواده" ? (
                    ""
                  ) : (
                    <Link
                      to={`/conditions/process/${item.id}`}
                      key={item.id}
                      className="w-full"
                    >
                      <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer ">
                        <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                        <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                          <p className="font-bold text-lg ">
                            {item.processName}
                          </p>
                        </ul>
                      </div>
                    </Link>
                  )
                ) : (
                  <div className="flex w-[100%]">
                    <div className="">
                      <Link
                        to={`/conditions/process/${item.id}`}
                        key={item.id}
                        className="w-full"
                      >
                        <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer  ">
                          <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                          <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                            <p className="font-bold text-lg ">
                              {item.processName}
                            </p>
                          </ul>
                        </div>
                      </Link>
                    </div>
                      {
                      //   spescialProcessName.map((item) => {
                      // return (
                      //   <>
                      //     <div className="" key={item.id}>
                      //       <Link
                      //         to={`/conditions/process/${item.id}`}
                      //         className="w-full"
                      //       >
                      //         <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer  ">
                      //           <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                      //           <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                      //             <p className="font-bold text-lg ">
                      //               {item.processName}
                      //             </p>
                      //           </ul>
                      //         </div>
                      //       </Link>
                      //     </div>
                      //   </>
                      // );
                      //   })
                      }
                  </div>
                )}
              </>
            );
          })}
          <hr />
        </div>





      </div> */}



      <div className="md:flex hidden flex-col  w-full rtl  items-center justify-between">
        <div className="w-full items-center justify-center flex rtl">
     
          {/* <img src={require(`../Images/conditions/${i.image}`)} alt="" className="w-60 h-60"/> */}
          <section className="rtl font-Vazirmatn  text-2xl p-20">فرآیند های وضعیت مخاطره آمیز {conditionName.name}</section>
            
     
     
        </div>
        <div className="w-[90%] flex items-center justify-center rtl">
 
              
               
          {conditionName.Processes.map((i) => {
          
              x--;
              return (
                <>
                   
                    <Link to={`/conditions/process/${i.id}`}>
                    <div
                    className="bg-[#105251] rounded-full border-2 border-[#F1F6F9] text-white 
                    w-40 h-40  text-center items-center
                    justify-center flex cursor-pointer
                    font-Vazirmatn text-xl 
                    hover:bg-[#F1F6F9]
                    font-bold
                    p-5
                    hover:text-gray-600
                    hover:shadow-black 
                    hover:shadow-2xl
                    "
                    >
                      مرحله 
                      &nbsp;
                      {i.processName}
                  
                      
                  </div>
                    </Link>

                  
                 
                  {x > 0 ? <>
                    <AiOutlineArrowLeft size={30}/> 
                  
                  
                  </> : <></>}
                </>
              );
            })}
            
  
        </div>
     
      </div>

      {/* Mobile screen */}
      <div className="md:hidden flex flex-col w-full rtl">
        <div className="flex flex-col justify-center items-center">
          <section className="font-bold text-2xl">فرآیند ها </section>


          <img
            src={conditionName.image}
            alt=""
            className="w-[90%] rounded-xl mt-5"
          />
          {
            conditionName.Processes.map((item) => {
            return (
              <>
                {}
                {item.processName !== "برنامه‌ریزی و طراحی برنامه مداخله" ? (
                  item.processName == "" ? (
                    ""
                  ) : (
                    <Link
                      to={`/conditions/process/${item.id}`}
                      key={item.id}
                      className="w-full"
                    >
                      <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer ">
                        <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                        <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                          <p className="font-bold text-lg ">
                            {item.processName}
                          </p>
                        </ul>
                      </div>
                    </Link>
                  )
                ) : (
                  <div className="flex w-[100%]">
                    <div className="">
                      <Link
                        to={`/conditions/process/${item.id}`}
                        key={item.id}
                        className="w-full"
                      >
                        <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer  ">
                          <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                          <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                            <p className="font-bold text-lg ">
                              {item.processName}
                            </p>
                          </ul>
                        </div>
                      </Link>
                    </div>
                      {
                      //   spescialProcessName.map((item) => {
                      // return (
                      //   <>
                      //     <div className="" key={item.id}>
                      //       <Link
                      //         to={`/manipage/conditions/process/${item.id}`}
                      //         className="w-full"
                      //       >
                      //         <div className="flex items-center w-[100%] justify-center p-5 cursor-pointer  ">
                      //           <div className="w-2 bg-blue-600 h-24 mt-5 rounded-xl"></div>
                      //           <ul className="w-[100%]   mt-5 h-24 flex flex-col justify-center itens-center mr-4 ">
                      //             <p className="font-bold text-lg ">
                      //               {item.processName}
                      //             </p>
                      //           </ul>
                      //         </div>
                      //       </Link>
                      //     </div>
                      //   </>
                      // );
                      //   })
                      }
                  </div>
                )
                
                
                
                }
              </>
            );
            })
          
          
          
          
          }
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProcessesNew;
