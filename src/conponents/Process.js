
import React, { useState, useEffect } from "react";
import list from '../db';
// import { DataContext } from "../DataProvider";
import { useParams } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
import { FiArrowDownRight, FiArrowDownLeft, FiCornerLeftDown, FiCornerRightDown } from "react-icons/fi";
import {  BsArrow90DegDown, BsArrowDownLeft, BsArrowDownRight, } from "react-icons/bs";
const Process = () => {
  let { id } = useParams();
  // const { List } = useContext(DataContext);
  const [data, setData] = useState({});
  const [conditionName, setConditionName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [mass, setMass] = useState();
  const [damage, setDamage] = useState();
  const [other, setOther] = useState();
  let next;
  let result;
  const foundCondition = async () => {
    const conditionName = list.filter((i) =>
      i.Processes.find((item) => item.id == id)
    );
    setConditionName(conditionName);
    const process = conditionName.map((i) => {
      return i.Processes.find((i) => i.id == id);
    });
    process.map((item) => {
      setMass(
        item.actions.find(
          (i) => i.title === "منجر به جرم" || i.title === "مداخله نرم " || i.title === "ارزیابی کلی" || i.title === "در صورت عدم ثبت نام در مدرسه "||i.title==="سازمان بهزیستی"
        )
      );
      setDamage(
        item.actions.find(
          (i) => i.title === "منجر به آسیب" || i.title === "مداخله قضائی" || i.title=== "ارزیابی موردی"||i.title==="در صورت نداشتن سرپرست" || i.title==="مداخله جدی"
        )
      );
      setOther(item.actions.find((i) => i.organNam === ""|| i.title==="در صورت نیاز به مراقب های پزشکی"|| i.title==="" ));
    });
    setData(process);
    setIsLoading(false);
  };
  useEffect(() => {
    foundCondition();
  }, []);
  if (isLoading) return <>Loading......</>;
  let x;
  let z;
  let m;
  let s;
  let l;
// console.log(data)
  return (
    <>
      <div className="md:flex hidden flex-col w-full ">
        <div className="w-full items-center justify-center flex p-20 rtl">
          {conditionName.map((item) => {
            x = item.Processes.length;
            return item.Processes.map((i) => {
              x--;
              return (
                <>
                  {i.id == id ? (
                    <div
                      className="w-40  h-40 p-5 rounded-full bg-[#105251] text-white items-center flex justify-center text-center
                   font-bold
                  "
                    >
                      {i.processName}
                      &nbsp;
                      در وضعیت 
                      &nbsp;
                      {item.name}
                    </div>
                  ) : (
                  
                    <div
                      className="w-40  h-40 p-5 rounded-full bg-[#F1F6F9] items-center flex justify-center
                        font-bold border-[#F1F6F9] text-gray-400
                      text-center "
                      >
                        {i.processName}
                        &nbsp;
                      در وضعیت 
                      &nbsp;
                      {item.name}
                    </div>
                  )}

                  {x > 0 ? <>.......</> : <></>}
                </>
              );
            });
          })}
        </div>

        <div className="w-full items-center justify-center flex flex-col">
          {data.map((item) => {
            z = item.specific.length;
            return (
              
              <>
                {item.processName !== "بررسی و تحلیل" ?
                  <>
                
                {item.general ? (
                  // if general available
                  <>
                    {/* show عام  and خاض   */}
                    {item.specific.length !== 0 ? (
                      <>
                        <div className="grid grid-cols-2 w-[50%] gap-3 ">
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center bg-[#]">
                            شناسایی خاص
                          </div>
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center">
                            شناسایی عام
                          </div>
                        </div>
                      </>
                    ) : (
                      // show only عام
                      <>
                        <div className="w-[30%]  items-center flex justify-center">
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center w-full">
                            شناسایی عام
                          </div>
                        </div>
                      </>
                    )}
                    {/* show arrow when special is and is not */}
                    <div className="w-full  items-center flex justify-center ">
                      {item.specific.length !== 0 ? (
                        <>
                          <div className=" w-[50%] items-center flex justify-between">
                            <div className="w-full items-center justify-center flex">
                              {" "}
                              <AiOutlineArrowDown size={40} />
                            </div>
                            <div className="flex items-center w-full justify-center">
                              <FiArrowDownLeft size={40} />
                              <FiArrowDownRight size={40} />{" "}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center w-[15%] justify-between">
                            <FiArrowDownLeft size={40} />
                            <FiArrowDownRight size={40} />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full  items-center justify-center flex ">
                      {item.specific.length !== 0 ? (
                        <>
                      {}
                          <div className="grid grid-cols-2 w-[50%] gap-3 font-Vazirmatn text-xl font-bold">
                            <div>
                              {item.specific.map((i) => {
                                z--;
                                return (
                                  <>
                                    <div className="flex items-center justify-between ">
                                      <div className="w-[50%] text-justify rtl">
                                        {i.organAction}
                                      </div>
                                      <div className=" w-[20%]  rtl">
                                        {i.organAction != "" ? (
                                          <AiOutlineArrowLeft size={30} />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                      <div className="border-2 p-4 m-4 w-[50%] text-center">
                                        {i.organNam}
                                      </div>
                                    </div>
                                    <div className="rtl w-[80%] ">
                                      {z > 0 ? (
                                        <AiOutlineArrowDown size={25} />
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                            <div className="flex flex-row justify-center">
                              {item.general.map((i) => {
                                return (
                                  <>
                                    <div className="">
                                      <div className="border-2 p-3 m-5">
                                        
                                        {i.title}
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[30%]  items-center flex justify-center">
                            {item.general.map((i) => {
                              return (
                                <div className="w-full  items-center justify-center flex">
                                  <div className="border-2 p-5 m-4 font-Vazirmatn w-full text-center text-xl font-bold">
                                   
                                    {i.title}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  // if general unavailable
                  <>
                    <div className="w-full items-center flex-col justify-center flex ">
                      {item.specific.length !== 0 ? (
                        <>
                          {item.specific.map((i) => {
                            z--;
                            return (
                              <>
                                {i.organNam == "" ? (
                                  <>
                                    <div className="w-[50%]">
                                      <div className="w-full text-justify rtl">
                                        {i.organAction}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex  w-[50%] items-center justify-between">
                                      <div className="w-full text-justify rtl">
                                        {i.organAction}
                                      </div>
                                      <div className="w-full items-center justify-center flex">
                                 { i.organAction !=="" ?     <AiOutlineArrowLeft size={25} />:<></>}
                                      </div>
                                      <div className="flex text-center items-center text-white bg-[#105251] justify-center w-full border-2 font-Vazirmatn font-bold text-xl p-5 m-5">
                                        {i.organNam}
                                      </div>
                                    </div>
                                    {/* show arrow down if */}
                                    {z > 0 ? (
                                      <div className="w-[50%]   rtl">
                                        <div className="mr-[20%]">
                                          {" "}
                                          <AiOutlineArrowDown size={25} />
                                        </div>
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      ) : (
                        // action section
                        <>
                          {item.actions[0].title ? (
                            <>
                              <div className="w-[50%] flex items-center justify-between p-5 ">
                                 {other ? <>
                                 <div className="w-full flex ltr items-center justify-center">
                                         
                                         <div className="border-2 rounded-2xl w-full mr-5 text-center border-blue-400 p-5 font-bold text-lg">
                                           {damage.title}
                                         </div>
                                         {/* <BsArrowReturnRight size={35} /> */}
                                       </div>
                                       <div className="w-full  rtl flex items-center justify-center">
                                  {/* <BsArrowReturnLeft size={35} /> */}
                                  <div className="border-2 rounded-2xl w-full text-center mr-5 border-blue-400 p-5 font-bold text-lg">
                                    {mass.title}
                                  </div>
                                          </div>
                                          <div className="w-full  rtl flex items-center justify-center">
                                  {/* <BsArrowReturnLeft size={35} /> */}
                                  <div className="border-2 rounded-2xl w-full text-center border-blue-400 p-5 font-bold text-lg">
                                    {other.title}
                                  </div>
                                </div>
                                          
                                        </> : <>
                                        <div className="w-full flex ltr items-center justify-center">
                                         
                                  <div className="border-2 rounded-2xl w-full m-5 text-center border-blue-400 p-5 font-bold text-lg">
                                    {damage.title}
                                              </div>
                                            </div>
                                            <div className="w-full  rtl flex items-center justify-center">
                                  {/* <BsArrowReturnLeft size={35} /> */}
                                  <div className="border-2 rounded-2xl w-full text-center border-blue-400 p-5 font-bold text-lg">
                                    {mass.title}
                                  </div>
                                          </div>

                                        </>}
                                        
                                  {/* <BsArrowReturnRight size={35} /> */}
                              
                                      </div>
                                      {other ? <>
                                        <div className="w-[50%] flex justify-between items-center">
                                <div className="w-full items-center justify-center flex  ">
                                          {damage.organNam.includes("||") ? <>
                                            {
                                              damage.organNam.split("||").length == 2 ?
                                                <>
                                                <div className="flex w-[100%] ">
                                          <div className="w-[50%] rtl ">
                                          <BsArrowDownLeft
                                              size={35}
                                              style={{
                                                direction: "rtl",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                              <div className="w-[50%]  ">
                                              <BsArrowDownRight
                                              size={35}
                                              style={{
                                                direction: "ltr",
                                              }}
                                            />{" "}
                                            
                                          </div>
                                        </div>

                                                </> : <>
                                                  {damage.organNam.split("||").length > 2 ? <>
                                                    <div className="w-[100%] flex justify-between items-center">

                                                    {damage.organNam.split("||").map((item) => {
                                                      return <div className="w-full items-center flex justify-center ">
                                                        <AiOutlineArrowDown size={35}/>


                                                      </div>
                                                    })}
                                                    </div>
                                                  </> : <>
                                                  <AiOutlineArrowDown size={35} />
                                                  </>}
                                                </>
                                            
                                            }
                                            </> : <AiOutlineArrowDown size={35} />
                                            }
                                </div>
                                <div className="w-full items-center justify-center flex ">
                                  <AiOutlineArrowDown size={35} />
                                          </div>
                                          <div className="w-full items-center justify-center flex ">
                                  <AiOutlineArrowDown size={35} />
                                </div>
                              </div>
                              <div className="w-[60%] grid grid-cols-3 gap-5 pb-5 ">
 
                                         
                                        
 {item.actions.map((i) => {
z = mass.activity.length;
   m = damage.activity.length;
   l = other.activity.length;
return (
<>
{i.title === "منجر به جرم" ||
i.title === "مداخله نرم " || i.title=== "ارزیابی کلی" || i.title==="در صورت عدم ثبت نام در مدرسه " || i.title==="سازمان بهزیستی"? (
   <div className="flex flex-col">
     <div>
             {mass.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {mass.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {mass.organNam}
               </div>
               
              </>} 
     </div>
     <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
         <AiOutlineArrowDown size={25} style={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           width: "100%"
         }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               mass.activity.map((i) => {
           z--;
           return (
             <>
               <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {z == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>
   {/* <div
     className="border-2 border-orange-500 p-4
items-center justify-center
text-center rounded-lg w-full"
   >
    {mass.organNam}
     </div> */}
     {/* {z > 0?
   <div>
     <AiOutlineArrowDown
       size={25}
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         width: "100%",
       }}
         />
 
     {mass.activity.map((i) => {
       z--;
       return (
         <>
           <div className="flex w-full flex-row border-2 p-4 mt-4  text-center items-center justify-center">
             {i.decription}
           </div>
           {z == 0 ? (
             <></>
           ) : (
             <AiOutlineArrowDown
               size={25}
               style={{
                 display: "flex",
                 alignItems: "center",
                 justifyContent:
                   "center",
                 width: "100%",
               }}
             />
           )}
         </>
       );
     })}
       </div>
               :<></>
             } */}
 </div>
) : (
 <>
          {
            i.title == "منجر به آسیب" ||
   i.title == "مداخله قضائی"  || i.title==="ارزیابی موردی" || i.title ==="در صورت نداشتن سرپرست"|| i.title==="" ? (
     <div className="flex flex-col">
       <div>
             {damage.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {damage.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {damage.organNam}
               </div>
               
              </>} 
       </div>
           <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
               <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               damage.activity.map((i) => {
           m--;
           return (
             <>
               <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {m == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>
     </div>
   ) : (
                <>
                       <div className="flex flex-col">

                    <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{other.organNam}</div>
                    <div>
                    <AiOutlineArrowDown
                    size={25}
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      width: "100%",
                    }}
                  />
                    </div>
                    {other.activity.map((i) => {
                      l--;
                    return <>
                      <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">{i.decription}</div>
                      {l == 0 ?
                    <></>:<><AiOutlineArrowDown
                    size={25}
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      width: "100%",
                    }}
                  /></>}
                    
                    </>
                   })}
                </div>
                
                
                </>
   )}
 </>
)}
</>
);
})}
 
 
   
 

</div>    
               
                                      
                                      
                                      
                                      
                                      
                                      </> : <>
                                      
                                      
                                      <div className="w-[50%] flex justify-between items-center">
                                <div className="w-full items-center justify-center flex  ">
                                          {damage.organNam.includes("||") ? <>
                                            {
                                              damage.organNam.split("||").length == 2 ?
                                                <>
                                                <div className="flex w-[100%] ">
                                          <div className="w-[50%] rtl ">
                                          <BsArrowDownLeft
                                              size={35}
                                              style={{
                                                direction: "rtl",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                              <div className="w-[50%]  ">
                                              <BsArrowDownRight
                                              size={35}
                                              style={{
                                                direction: "ltr",
                                              }}
                                            />{" "}
                                            
                                          </div>
                                        </div>
                                                
                                                
                                                </> : <>
                                                  {damage.organNam.split("||").length > 2 ? <>
                                                    <div className="w-[100%] flex justify-between items-center">

                                                    {damage.organNam.split("||").map((item) => {
                                                      return <div className="w-full items-center flex justify-center ">
                                                        <AiOutlineArrowDown size={35}/>


                                                      </div>
                                                    })}
                                                  
                                                    </div>
                                                  
                                                  
                                                  </> : <>
                                                  <AiOutlineArrowDown size={35} />
                                                  
                                                  </>}
                                                
                                                
                                                
                                                </>
                                            
                                            }
                                          </> : <AiOutlineArrowDown size={35} />}
                                </div>
                                <div className="w-full items-center justify-center flex ">
                                  <AiOutlineArrowDown size={35} />
                                </div>
                              </div>
                              <div className="w-[50%] grid grid-cols-2 gap-3 pb-5 ">
 
                                         
                                        
 {item.actions.map((i) => {
z = mass.activity.length;
m = damage.activity.length;
return (
<>
{i.title === "منجر به جرم" ||
i.title === "مداخله نرم " || i.title==="ارزیابی کلی" || i.title==="در صورت عدم ثبت نام در مدرسه "|| i.title==="سازمان بهزیستی"? (
   <div className="flex flex-col">
     <div>
             {mass.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {mass.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {mass.organNam}
               </div>
               
              </>} 
     </div>
     <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
         <AiOutlineArrowDown size={25} style={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           width: "100%"
         }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               mass.activity.map((i) => {
           z--;
           return (
             <>
               <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {z == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>
   {/* <div
     className="border-2 border-orange-500 p-4
items-center justify-center
text-center rounded-lg w-full"
   >
    {mass.organNam}
     </div> */}
     {/* {z > 0?
   <div>
     <AiOutlineArrowDown
       size={25}
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         width: "100%",
       }}
         />
 
     {mass.activity.map((i) => {
       z--;
       return (
         <>
           <div className="flex w-full flex-row border-2 p-4 mt-4  text-center items-center justify-center">
             {i.decription}
           </div>
           {z == 0 ? (
             <></>
           ) : (
             <AiOutlineArrowDown
               size={25}
               style={{
                 display: "flex",
                 alignItems: "center",
                 justifyContent:
                   "center",
                 width: "100%",
               }}
             />
           )}
         </>
       );
     })}
       </div>
               :<></>
             } */}
 </div>
) : (
 <>
   {i.title == "منجر به آسیب" ||
   i.title == "مداخله قضائی"  || i.title==="ارزیابی موردی" || i.title ==="در صورت نداشتن سرپرست"|| i.title==="" || i.title==="مداخله جدی"? (
     <div className="flex flex-col">
       <div>
             {damage.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {damage.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {damage.organNam}
               </div>
               
              </>} 
       </div>
           <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
               <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               damage.activity.map((i) => {
           m--;
           return (
             <>
               <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {m == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>
     </div>
   ) : (
     <></>
   )}
 </>
)}
</>
);
})}
 
 
   
 

</div>    
                                      
                                      
                                      
                                      
                                      
                                      
                                      </>
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      }
                         
                            
                            </>
                          ) : (
                       <>
                                        {item.actions.map((i, index, elements) => {
                                          next = elements[index + 1];
                                          console.log(next)
                                          // next = index + 1;
                                          // console.log(item.actions[next])
                                      // z = i.activity.length;
                                      return <>
                                        {i.organNam == "" ? <>
                                          {i.activity.map((item) => {
                                            z--;
                                            return <>
                                              <div className="border-2 w-[30%] text-center p-4">
                                                {item.decription}
                                          </div>
                                        {z>0 ?  <AiOutlineArrowDown/> :<></>}
                                            </>
                                        })}
                                        
                                        
                                        </> : <>
                                            {i.organNam.includes('||') ? <>
                                            <div className="flex items-center justify-between w-[50%]">
                                      
                                      {i.organNam
                                        .split("||")
                                        .map((item, index) => {
                                          return (
                                            <>
                                              <div className="ml-5 border-2 border-[#105251] rounded-xl p-4 w-full text-center">
                                                {" "}
                                                {item}{" "}
                                              </div>{" "}
                                            </>
                                          );
                                        })}{" "}
                                              </div>
                                              {i.organNam.split("||").length === 2 ? (
                                        <div className="flex w-[50%] ">
                                          <div className="w-full rtl ">
                                            <BsArrowDownRight
                                              size={20}
                                              style={{
                                                direction: "ltr",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                          <div className="w-full ml-40  ">
                                            <BsArrowDownLeft
                                              size={20}
                                              style={{
                                                direction: "rtl",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                        </div>
                                      ) : (
                                        <div className="flex w-[50%] items-center justify-between ">
                                          {" "}
                                          {i.organNam.split("||").map((item) => {
                                            return (
                                              <>
                                                <div className=" items-center justify-center flex  w-full ">
                                                  <AiOutlineArrowDown size={35} />{" "}
                                                </div>{" "}
                                              </>
                                            );
                                          })}{" "}
                                        </div>
                                              )}


                                              {i.Description ? <>
                                                <div className="grid grid-cols-3 gap-4 w-[50%]">
                                                  {
                                                    i.Description.split("||").map((item) => {
                                                      return <>
                                                        <div className="w-full border-4 p-5 text-center border-[#B2B2B2]">{item}</div>
                                                      </>
                                                    })
                                                  }
                                              </div>
                                              
                                              
                                              </> : <>
                                                {i.activity.map((item) => {
                                                

                                                return (
                                                  <>
                                                    <div className="flex flex-col border-4 border-[#105251] p-4 w-[40%] rounded-lg mb-5 items-center justify-center">
                                                      {" "}
                                                      {item.decription}
                                                    </div>{" "}
                                                   
                                                  </>
                                                        );
                                                        
                                                      })
                                                      
                                                      
                                                    }</>}
                                              
                                              {
                                                next!==undefined ?
                                                
                                                
                                                next.organNam == "سازمان ثبت احوال" ? <AiOutlineArrowDown size={25}/> : <></>:<></>}

                                            </> : <>
                                                {i.flag ? <>
                                                
                                                  <div
                                      className="flex items-center w-[50%]  justify-betwween  p-2 h-full"
                                      key={i.id}
                                                  >
                                                      <div className="w-[50%] items-center justify-center rtl"><FiCornerLeftDown size={35}/></div>             
                                                    <div className="border-2 p-4 border-green-500 
                                                    rounded-lg w-[50%] text-center font-Vazirmatn text-2xl">{i.organNam}</div>
                                                                                       
                                          <div className="w-[50%] items-center justify-center "><FiCornerRightDown size={35}/></div>             
                                                  </div>      
                                                  <div className=" w-[50%] rtl flex items-center p-2 justify-between">
                                                    {i.activity.map((item) => {
                                                      return <>
                                                        {item.decription.split("||").map((item) => {
                                                          return <>
                                                            <div className="flex w-[50%] m-5  p-5 border-2 
                                                           rounded-xl border-[#105251]  font-Vazirmatn
                                                           text-2xl items-center justify-center ">{item}</div>

                                                          </>
                                                        })}
                                                      
                                                      
                                                     
                                                      
                                                      
                                                      </>
                                                    })}


                                                </div>
                                                  <div className=" w-[50%] rtl flex items-center p-2 justify-between ">
                                                    <div className="items-center flex justify-center w-full"><AiOutlineArrowDown /></div>
<div className="items-center flex justify-center w-full"><AiOutlineArrowDown/></div>
                                                    
                                                  </div>
                                                    {i.activity.map((i) => {
                                                      return <>
                                                        <div className="w-[50%] items-center justify-center grid grid-cols-2 gap-3">

                                                          {i.category.map((item) => {
                                                          let a=item.CategoryActivity.length
                                                          return <>
                                                  <div className="w-[100%] items-center justify-between  ">
                                                              {item.title === "بله" ? <>
                                                                
                                                                <div className="flex  items-center border-2 p-5 rounded-xl justify-center border-green-300">{item.organNam}</div>
                                                                {console.log(item.CategoryActivity.length)}
                                                                {item.CategoryActivity.length !== 0 ? <>
                                                                  <div className="w-[100%] flex items-center justify-center">
                                                                    <AiOutlineArrowDown size={20} />
                                                                  </div>
                                                                  <div className="">

                                                                    {item.CategoryActivity.map((i) => {
                                                                       a--;

                                                                    return <>
                                                                  <div className="w-full border-2 flex items-center justify-center p-5"> {i.CatDec}</div>
{a!==0? <><div className="w-full justify-center flex items-center"> <AiOutlineArrowDown size={20} /></div></>: <></>}

                                                                    </>
                                                                  })}
                                                                  </div>
                                                                </>
                                                                  :
                                                                  <></>}
                                                             
                                                            </> : <>
                                                                 {item.organNam!==""? <div className="flex  border-2 p-5 rounded-xl justify-center border-red-400">{item.organNam}</div>:<></>}
                                                                  {console.log(item.CategoryActivity.length)}
                                                                  {item.CategoryActivity.length !== 0 ?
                                                                    <>
                                                                      <div className="w-[100%]  flex items-center justify-center">
                                                                        <AiOutlineArrowDown size={20} />
                                                                      </div>
                                                                      {item.CategoryActivity.map((i) => {
                                                                        a--;
                                                                    return <>
                                                                  <div className="w-full border-2 flex items-center justify-center p-5"> {i.CatDec}</div>
                                                                {a!==0 ? <><div className="w-full justify-center flex items-center"> <AiOutlineArrowDown size={20} /></div></>:<></> }
                                                                    </>
                                                                  })}
                                                                    </>
                                                                    : <></>}
  
                                                              </>}
                                                </div>
                                                          </>
                                                        })}                                                      
                                                        </div>
                                                      
                                                      </>
                                                    })}
                                                
                                                
                                                
                                                </> : <>
                                                    
                                                    {i.activity.length === 0 ? <>
                                                    
                                                      <div className="flex items-center flex-col w-[50%]">
                                                        <div className="border-4 p-5 w-full text-center font-Vazirmatn text-2xl rounded-xl border-blue-200">{i.organNam}</div>
                                                      
                                                      
                                                      </div>
                                                    
<div className="w-[50%] mt-5 items-center flex justify-center ">  <AiOutlineArrowDown size={25}/></div>                                                    
                                                    
                                                    </> : <>
                                                    
                                                    
                                                    
                                                    <div
                                      className="flex items-center w-[50%] justify-between rtl h-full"
                                      key={i.id}
                                    >
                                      <div className="w-[40%] ltr h-40 ml-2 flex border-2 font-Vazirmatn text-xl font-bold rounded-2xl  border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                        {" "}
                                        {i.organNam}
                                      </div>
                                      <div className="w-[50%] items-center justify-center">
                                        {" "}
                                        {i.activity.map((item, index) => {
                                          item.decription
                                            ? (s = i.activity.length)
                                            : (s = 0);
                              
                                          return (
                                            <>
                                              <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                  {" "}
                                                  {s == 0 ? (
                                                    ""
                                                  ) : (
                                                    <AiOutlineArrowLeft
                                                      size={30}
                                                      style={{
                                                        color: "#1D5D9B",
                                                      }}
                                                    />
                                                  )}{" "}
                                                </div>{" "}
                                                <div
                                                  className="w-full font-Vazirmatn text-xl font-bold  p-1 items-center justify-center flex text-center"
                                                  key={index}
                                                >
                                                  {item.decription}{" "}
                                                </div>{" "}
                                                <br/>
                                              </div>
                                             {" "}
                                            </>
                                          );
                                         
                                        })}{" "}
                                        
                                      </div>{" "}
                                                </div>
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    </>}


                                             
                                                </>}
                                                {}
                                           {/* <div
                                      className="flex items-center w-[50%] justify-between rtl h-full"
                                      key={i.id}
                                    >
                                      <div className="w-[40%] ltr h-40 ml-2 flex border-2 font-Vazirmatn text-xl font-bold rounded-2xl  border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                        {" "}
                                        {i.organNam}
                                      </div>
                                      <div className="w-[50%] items-center justify-center">
                                        {" "}
                                        {i.activity.map((item, index) => {
                                          item.decription
                                            ? (s = i.activity.length)
                                            : (s = 0);
                              
                                          return (
                                            <>
                                              <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                  {" "}
                                                  {s == 0 ? (
                                                    ""
                                                  ) : (
                                                    <AiOutlineArrowLeft
                                                      size={30}
                                                      style={{
                                                        color: "#1D5D9B",
                                                      }}
                                                    />
                                                  )}{" "}
                                                </div>{" "}
                                                <div
                                                  className="w-full font-Vazirmatn text-xl font-bold  p-1 items-center justify-center flex text-center"
                                                  key={index}
                                                >
                                                  {item.decription}{" "}
                                                </div>{" "}
                                                <br/>
                                              </div>
                                             {" "}
                                            </>
                                          );
                                         
                                        })}{" "}
                                        
                                      </div>{" "}
                                    </div> */}
                                  
                                                <br />
                                                <br />
                                                {next!==undefined ?
                                                  <>
                                                    {next.organNam.includes("||") &&
                                         
                                         <div className="flex w-[50%] ">
                    <div className="w-full rtl ">
                  <BsArrowDownLeft  size={25} style={{direction: "ltr",}}/>
</div>
<div className="w-full ml-40  ">
<BsArrowDownRight size={25} style={{ direction: "rtl", }} />
                              </div>
                                        </div>
                                         
                                         }
                                                  
                                                  </> : <></>  
                                              
                                              }
                                              

                                                      {/* {
                                                  i.organNam.includes("||") ?
                                                 
                                                      <div className="w-[50%] rtl">
                                                      <AiOutlineArrowDown/>
                                                    </div> :
                                                    <> <div className="flex w-[50%] ">
                                <div className="w-full rtl ">
                              <BsArrowDownLeft  size={25} style={{direction: "ltr",}}/>
</div>
 <div className="w-full ml-40  ">
 <BsArrowDownRight size={25} style={{ direction: "rtl", }} />
                                          </div>
                                                    </div></>
                                                    } */}
              

                                            </>}
                                        
                                        </>}
                               
                             
                                      </>
                      })}            
                         
                                  
                                  
                        </>
                          )}
                          <div className="flex items-center justify-between w-[50%] bg-blue-600"></div>
                        </>
                      )}
                    </div>
                  </>
                )}
                </>

                  : <>
                      <div className="w-[50%] items-center flex justify-between flex-col rtl pb-10 font-Vazirmatn text-xl font-bold">
                    <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">
                      خبر
                    </div>
                    <div>
                      <AiOutlineArrowDown size={30} />{" "}
                    </div>{" "}
                    <div className="flex items-centet justify-between w-full">
                      <div className="items-center  flex   w-[50%]">
                        <div className="flex mt-6 w-full ltr">
                          {" "}
                          <FiCornerRightDown
                            size={40}
                            style={{
                              direction: "ltr",
                            }}
                          />{" "}
                        </div>{" "}
                        <div className="items-center flex justify-center text-xl ">
                          خیر{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="border-2 rounded-xl p-6 border-blue-400 text-xl text-center">
                        {" "}
                        آیا خبر صحت دارد؟{" "}
                      </div>{" "}
                      <div className="items-center flex justify-between w-[50%]">
                        <div className="items-center flex justify-center text-xl ">
                          بله{" "}
                        </div>{" "}
                        {/* <div className="items-center flex w-full mt-6 rtl">
                                      <FiCornerLeftDown size={40} style={{direction:"rtl"}} />
                                  
                                      </div> */}{" "}
                        <div className="flex mt-6 w-full rtl">
                          {" "}
                          <FiCornerLeftDown
                            size={40}
                            style={{
                              direction: "rtl",
                            }}
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className=" flex w-full items-center  justify-between p-2">
                      <div className=" w-[50%] items-center justify-center flex ">
                        <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
                          صورتجلسه توسط مددکاران بهزیستی{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className=" w-[50%] items-center justify-center flex flex-col ">
                        <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">
                          علل شناسی{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="w-[50%] items-center justify-between flex rtl">
                      <div className="flex items-center justify-center rtl">
                        <AiOutlineArrowDown size={25} />{" "}
                      </div>{" "}
                      <div className="flex items-center justify-center rtl">
                        <AiOutlineArrowDown size={25} />{" "}
                      </div>{" "}
                    </div>
                    <div className="flex  items-center justify-between w-[100%] ">
                      <div className="w-[50%] items-center justify-center flex ml-4 ">
                        <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
                          اطلاع به مافوق{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className=" w-[50%]">
                        {" "}
                        {item.specific.map((i) => {
                          z--;
                          return (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
                                  {" "}
                                  {i.organNam}{" "}
                                </div>{" "}
                                <div>
                                  <AiOutlineArrowLeft size={25} />{" "}
                                </div>{" "}
                                <div className="w-full"> {i.organAction} </div>{" "}
                              </div>{" "}
                              {z == 0 ? (
                                ""
                              ) : (
                                <AiOutlineArrowDown
                                  size={25}
                                  style={{
                                    marginRight: "20",
                                  }}
                                />
                              )}{" "}
                            </>
                          );
                        })}{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  
                  
                  
                  
                  
                  </>}
               
              </>
            );
          })}
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden flex flex-col w-full items-center justify-center">
      <div className="w-[100%] items-center flex-col justify-center flex p-20 rtl">
          {conditionName.map((item) => {
            x = item.Processes.length;
            return item.Processes.map((i) => {
              x--;
              return (
                <>
                  {i.id == id ? (
                    <div
                      className="w-full  h-14 p-5  rounded-full bg-[#105251] text-white items-center flex justify-center text-center
                 
                  "
                    >
                      {i.processName}
                      &nbsp;
                      در وضعیت 
                      &nbsp;
                      {item.name}
                    </div>
                  ) : (
                  
                    <div
                      className="w-full h-14 p-5 rounded-full bg-[#F1F6F9] items-center flex justify-center
                    text-ls border-[#F1F6F9] text-gray-400
                      text-center "
                      >
                        {i.processName}
                        &nbsp;
                      در وضعیت 
                      &nbsp;
                      {item.name}
                    </div>
                  )}

                  {x > 0 ? <><AiOutlineArrowDown/></> : <></>}
                </>
              );
            });
          })}
        </div>

        <div className="w-full items-center justify-center flex flex-col">
          {data.map((item) => {
            z = item.specific.length;
            return (
              
              <>
                {item.processName !== "بررسی و تحلیل" ?
                  <>
                
                {item.general ? (
                  // if general available
                  <>
                    {/* show عام  and خاض   */}
                    {item.specific.length !== 0 ? (
                      <>
                        <div className="grid grid-cols-2 w-[100%] gap-3 ">
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center">
                            شناسایی خاص
                          </div>
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center">
                            شناسایی عام
                          </div>
                        </div>
                      </>
                    ) : (
                      // show only عام
                      <>
                        <div className="w-[100%]  items-center flex justify-center">
                          <div className="border-2 p-5 m-5 font-Vazirmatn text-xl font-bold rounded-xl text-center w-full">
                            شناسایی عام
                          </div>
                        </div>
                      </>
                    )}
                    {/* show arrow when special is and is not */}
                    <div className="w-full  items-center flex justify-center ">
                      {item.specific.length !== 0 ? (
                        <>
                          <div className=" w-full items-center flex justify-between">
                            <div className="w-full items-center justify-center flex">
                              {" "}
                              <AiOutlineArrowDown size={40} />
                            </div>
                            <div className="flex items-center w-full justify-center">
                              <FiArrowDownLeft size={40} />
                              <FiArrowDownRight size={40} />{" "}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center w-[15%] justify-between">
                            <FiArrowDownLeft size={40} />
                            <FiArrowDownRight size={40} />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-full  items-center justify-center flex ">
                      {item.specific.length !== 0 ? (
                        <>
 
                          <div className="grid grid-cols-2 w-[90%] gap-3 ">
                            <div>
                              {item.specific.map((i) => {
                                z--;
                                return (
                                  <>
                                    <div className="flex items-center justify-between ">
                                      <div className="w-full text-justify rtl">
                                        {i.organAction}
                                      </div>
                                      <div className=" w-[20%]  rtl">
                                        {i.organAction != "" ? (
                                          <AiOutlineArrowLeft size={30} />
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                      <div className=" p-4 m-4 w-full text-center bg-[#105251] text-white">
                                        {i.organNam}
                                      </div>
                                    </div>
                                    <div className="rtl w-[80%] ">
                                      {z > 0 ? (
                                        <AiOutlineArrowDown size={25} />
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                            <div className="flex flex-row justify-center w-full p-5 ">
                              {item.general.map((i) => {
                                return (
                                  <>
                                    <div className="m-2">
                                      <div className=" h-32 border-2 p-3 ml-2 w-full bg-gray-400/30   text-center">
                                        
                                        {i.title}
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[90%]  items-center flex justify-center">
                            {item.general.map((i) => {
                              return (
                                <div className="w-full  items-center justify-center flex">
                                  <div className="border-2 p-5 m-4 font-Vazirmatn w-full text-center text-xl font-bold">
                                   
                                    {i.title}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  // if general unavailable
                  <>
                    <div className="w-full items-center flex-col justify-center flex ">
                      {item.specific.length !== 0 ? (
                        <>
                          {item.specific.map((i) => {
                            z--;
                            return (
                              <>
                                {i.organNam == "" ? (
                                  <>
                                    <div className="w-[90%]">
                                      <div className="w-full text-justify rtl">
                                        {i.organAction}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex  w-[90%] items-center justify-between">
                                      <div className="w-full text-justify rtl">
                                        {i.organAction}
                                      </div>
                                      <div className="w-full items-center justify-center flex">
                                        <AiOutlineArrowLeft size={25} />
                                      </div>
                                      <div className="flex text-center bg-[#105251]  text-white items-center justify-center w-full border-2 font-Vazirmatn font-bold text-xl p-5 m-5">
                                        {i.organNam}
                                      </div>
                                    </div>
                                    {/* show arrow down if */}
                                    {z > 0 ? (
                                      <div className="w-[90%]   rtl">
                                        <div className="mr-[20%]">
                                          {" "}
                                          <AiOutlineArrowDown size={25} />
                                        </div>
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      ) : (
                        // action section
                        <>
                          {item.actions[0].title ? (
                            <>
                              <div className="w-[90%] flex items-center justify-between p-5 ">
                                <div className="w-full flex ltr items-center justify-center">
                                  <div className="border-2 rounded-2xl w-full m-5 text-center border-blue-400 p-5 font-bold text-lg">
                                    {damage.title}
                                  </div>
                                  {/* <BsArrowReturnRight size={35} /> */}
                                </div>
                                <div className="w-full  rtl flex items-center justify-center">
                                  {/* <BsArrowReturnLeft size={35} /> */}
                                  <div className="border-2 rounded-2xl w-full text-center border-blue-400 p-5 font-bold text-lg">
                                    {mass.title}
                                  </div>
                                </div>
                              </div>
                              <div className="w-[90%] flex justify-between items-center">
                                <div className="w-full items-center justify-center flex  ">
                                  <AiOutlineArrowDown size={35} />
                                </div>
                                <div className="w-full items-center justify-center flex ">
                                  <AiOutlineArrowDown size={35} />
                                </div>
                              </div>
                              <div className="w-[90%] grid grid-cols-2 gap-3 pb-5 ">
                                {item.actions.map((i) => {
                                  z = mass.activity.length;
                                  m = damage.activity.length;
                                  return (
                                    <>
                                      {i.title === "منجر به جرم" ||
                                      i.title === "مداخله نرم "  || i.title=== "ارزیابی کلی" || i.title==="در صورت عدم ثبت نام در مدرسه " || i.title==="سازمان بهزیستی" ? (
                                        <div className="flex flex-col">
                                          <div>
             {mass.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {mass.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {mass.organNam}
               </div>
               
              </>} 
                                            </div>
                                            <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
         <AiOutlineArrowDown size={25} style={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           width: "100%"
         }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               mass.activity.map((i) => {
           z--;
           return (
             <>
               <div className="flex w-[90%] ml-5 flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {z == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>
                                            {/* {z > 0?
                                          <div>
                                            <AiOutlineArrowDown
                                              size={25}
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                              }}
                                                />
                                        
                                            {mass.activity.map((i) => {
                                              z--;
                                              return (
                                                <>
                                                  <div className="flex w-full flex-row border-2 p-4 mt-4  text-center items-center justify-center">
                                                    {i.decription}
                                                  </div>
                                                  {z == 0 ? (
                                                    <></>
                                                  ) : (
                                                    <AiOutlineArrowDown
                                                      size={25}
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "center",
                                                        width: "100%",
                                                      }}
                                                    />
                                                  )}
                                                </>
                                              );
                                            })}
                                              </div>
                                                      :<></>
                                                    } */}
                                        </div>
                                      ) : (
                                        <>
                                          {i.title == "منجر به آسیب" ||
                                          i.title == "مداخله قضائی" || i.title==="ارزیابی موردی" || i.title ==="در صورت نداشتن سرپرست"|| i.title==="" ? (
                                            <div className="flex flex-col w-full">
                                            <div >
             {damage.organNam.includes("||") ? <>
               <div className="flex w-full ">
               {damage.organNam.split("||").map((item) => {
                 return <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">{item}</div>
             })}
              </div>
             
             
             </> : <>
                 <div className="border-2 border-orange-500 p-4 ml-2 items-center justify-center text-center rounded-lg w-full">
                 {damage.organNam}
               </div>
               
              </>} 
                                                  </div>
                                                  <div>
             {i.Description ? <>
               <div className="w-[100%]  flex items-center justify-between">
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown  size={25}/></div>
                 <div className="w-[50%] items-center justify-center flex"><AiOutlineArrowDown size={25}/></div>
             </div>
             
             </> :
               <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} />
}

             {i.Description ? <>
               <div className="flex items-center justify-between w-[100%] h-full">

               {i.Description.split("||").map((item) => {
                 return <div className="flex items-center w-[50%]
                  h-full justify-center text-justify rtl border-2
                    p-4 mt-4 ml-2 ">{item}</div>
               })}
             
               </div>
             </> : <>

             {
               damage.activity.map((i) => {
           m--;
           return (
             <>
               <div className="flex w-[90%] flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                 {i.decription}
               </div>
               {m == 0 ? (
                 <></>
               ) : (
                 <AiOutlineArrowDown
                   size={25}
                   style={{
                     display: "flex",
                     alignItems:
                       "center",
                     justifyContent:
                       "center",
                     width: "100%",
                   }}
                 />
               )}
             </>
           );
         })}
             </>}
       </div>  
                                              {/* <div>
                                                <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} />

                                                {damage.activity.map((i) => {
                                                  m--;
                                                  return (
                                                    <>
                                                      <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
                                                        {i.decription}
                                                      </div>
                                                      {m == 0 ? (
                                                        <></>
                                                      ) : (
                                                        <AiOutlineArrowDown
                                                          size={25}
                                                          style={{
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            justifyContent:
                                                              "center",
                                                            width: "100%",
                                                          }}
                                                        />
                                                      )}
                                                    </>
                                                  );
                                                })}
                                              </div> */}
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      )}
                                    </>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                                      <>
                                        
                                    {item.actions.map((i) => {
                                      z = i.activity.length;
                                     
                                      return <>
                                        {
                                          i.organNam == "" ? <>
                                          {i.activity.map((item) => {
                                            z--;
                                            return <>
                                              <div className="border-2 w-[90%]">
                                                {item.decription}
                                          </div>
                                        {z>0 ?  <AiOutlineArrowDown/> :<></>}
                                            </>
                                        })}
                                        
                                        
                                        </> :
                                          <>
                                              {
                                                i.organNam.includes('||') ?
                                                  <>
                                            <div className="flex items-center justify-between w-[90%]">
                                      
                                      {i.organNam
                                        .split("||")
                                        .map((item, index) => {
                                          return (
                                            <>
                                              <div className="ml-5 border-2 bg-[#105251] text-white h-24 text-center rounded-xl p-4 w-full 
                                              ">
                                 
                                                {item}
                                              </div>
                                            </>
                                          );
                                        })}{" "}
                                              </div>
                                              {i.organNam.split("||").length === 2 ? (
                                        <div className="flex w-[90%] ">
                                          <div className="w-full rtl ">
                                            <BsArrowDownRight
                                              size={35}
                                              style={{
                                                direction: "ltr",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                          <div className="w-full ml-40  ">
                                            <BsArrowDownLeft
                                              size={35}
                                              style={{
                                                direction: "rtl",
                                              }}
                                            />{" "}
                                          </div>{" "}
                                        </div>
                                      ) : (
                                        <div className="flex w-[90%] items-center justify-between ">
                                          {" "}
                                          {i.organNam.split("||").map((item) => {
                                            return (
                                              <>
                                                <div className=" items-center justify-center flex  w-full ">
                                                  <AiOutlineArrowDown size={35} />{" "}
                                                </div>{" "}
                                              </>
                                            );
                                          })}{" "}
                                        </div>
                                              )}
                                                   {i.activity.map((item) => {
                                        return (
                                          <>
                                            <div className="flex flex-col border-4 p-4 w-[90%] border-[#105251] rounded-lg mb-5 items-center justify-center">
                                              {item.decription}
                                            </div>
                                          </>
                                        );
                                      })}

                                              </> :
                                                <>
                                            <div
                                      className="flex items-center w-[90%] justify-between rtl"
                                      key={i.id}
                                    >
                                                  <div className="w-[90%] ml-2 flex border-2 font-Vazirmatn
                                       text-xl font-bold rounded-2xl h-32
                                        border-orange-400 p-4 mb-3
                                        items-center justify-center text-center">
                                        {i.organNam}
                                                  </div>
                                                  
                                      <div className="w-[90%] items-center justify-center ">
                              
                                        {i.activity.map((item, index) => {
                                          item.decription
                                            ? (s = i.activity.length)
                                            : (s = 0);
                                          
                                          return (
                                            <>
                                            
                                              <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                  {" "}
                                                  {s == 0 ? (
                                                    ""
                                                  ) : (
                                                    <AiOutlineArrowLeft
                                                      size={30}
                                                      style={{
                                                        color: "#1D5D9B",
                                                      }}
                                                    />
                                                  )}
                                                </div>
                                                <div
                                                  className="w-full font-Vazirmatn text-xl font-bold  p-1 items-center justify-center flex text-center"
                                                  key={index}
                                                >
                                                  {item.decription}
                                                </div>
                                                <br/>
                                              </div>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  

                                            
                                            
                                            </>}
                                        
                                        </>}
                       
                                      
                                      </>
                      })}            
                                  
                                  
                                  
                        </>
                          )}
                          <div className="flex items-center justify-between w-[50%] bg-blue-600"></div>
                        </>
                      )}
                    </div>
                  </>
                )}
                </>

                  : <>
                      <div className="w-[90%] items-center flex justify-between flex-col rtl pb-10 font-Vazirmatn text-xl font-bold">
                    <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">
                      خبر
                    </div>
                    <div>
                      <AiOutlineArrowDown size={30} />{" "}
                    </div>{" "}
                    <div className="flex items-centet justify-between w-full">
                      <div className="items-center  flex   w-[90%]">
                        <div className="flex mt-6 w-full ltr">
                          {" "}
                          <FiCornerRightDown
                            size={40}
                            style={{
                              direction: "ltr",
                            }}
                          />{" "}
                        </div>{" "}
                        <div className="items-center flex justify-center text-xl ">
                          خیر{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="border-2 w-full rounded-xl p-6 border-blue-400 text-xl text-center">
                        {" "}
                        آیا خبر صحت دارد؟{" "}
                      </div>{" "}
                      <div className="items-center flex justify-between w-[90%]">
                        <div className="items-center flex justify-center text-xl ">
                          بله{" "}
                        </div>{" "}
                        {/* <div className="items-center flex w-full mt-6 rtl">
                                      <FiCornerLeftDown size={40} style={{direction:"rtl"}} />
                                  
                                      </div> */}{" "}
                        <div className="flex mt-6 w-full rtl">
                          {" "}
                          <FiCornerLeftDown
                            size={40}
                            style={{
                              direction: "rtl",
                            }}
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className=" flex w-full items-center  justify-between p-2">
                      <div className=" w-[90%] items-center justify-center flex ">
                        <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
                          صورتجلسه توسط مددکاران بهزیستی{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className=" w-[90%] items-center justify-center flex flex-col ">
                        <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">
                          علل شناسی{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="w-[50%] items-center justify-between flex rtl">
                      <div className="flex items-center justify-center rtl">
                        <AiOutlineArrowDown size={25} />{" "}
                      </div>{" "}
                      <div className="flex items-center justify-center rtl">
                        <AiOutlineArrowDown size={25} />{" "}
                      </div>{" "}
                    </div>
                    <div className="flex  items-center justify-between w-[100%] ">
                      <div className="w-[90%] items-center justify-center flex ml-4 ">
                        <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
                          اطلاع به مافوق{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className=" w-[90%]">
                        {" "}
                        {item.specific.map((i) => {
                          z--;
                          return (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
                                  {" "}
                                  {i.organNam}{" "}
                                </div>{" "}
                                <div>
                                  <AiOutlineArrowLeft size={25} />{" "}
                                </div>{" "}
                                <div className="w-full"> {i.organAction} </div>{" "}
                              </div>{" "}
                              {z == 0 ? (
                                ""
                              ) : (
                                <AiOutlineArrowDown
                                  size={25}
                                  style={{
                                    marginRight: "20",
                                  }}
                                />
                              )}{" "}
                            </>
                          );
                        })}{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  
                  
                  
                  
                  
                  </>}
               
              </>
            );
          })}
        </div>
        
      </div>
    </>
  );
};

export default Process;
