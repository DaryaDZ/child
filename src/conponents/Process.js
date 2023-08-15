// import React,{useState} from "react";
// import list from "../db.js";
// import { useParams } from "react-router-dom";
// import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
// import {
//   BsArrowReturnLeft,
//   BsArrowReturnRight,
//   BsArrowDownRight,
//   BsArrowDownLeft,
// } from "react-icons/bs";

// import {
//   FiArrowDownLeft,
//   FiArrowDownRight,
//   FiCornerLeftDown,
//   FiCornerRightDown,
// } from "react-icons/fi";
// const Process = () => {
//   const [isOpen, setIsopen] = useState(false);
//   const [sepecialOpen, setsepecialOpen] = useState(false);
//   const { id } = useParams();
//   const conditionName = list.find((i) =>
//     i.Processes.find((item) => item.id == id)
//   );
//   const process = conditionName.Processes.find((i) => i.id == id);
//   console.log(process)
//   const mass = process.actions.find(
//     (i) => i.title == "منجر به جرم" || i.title == "مداخله نرم "
//   );
//   console.log(mass);
//   const damage = process.actions.find(
//     (i) => i.title == "منجر به آسیب" || i.title == "مداخله قضائی"
//   );
//   const other = process.actions.find((i) => i.organNam == "");
//   console.log(other);
//   console.log(damage);
//   let x = process.specific.length;
//   let y;
//   let z;
//   let m;
//   let s;
//   let a=conditionName.Processes.length
//   // let s=process.actions.length
//   return (
//     <>
//          <div className="md:flex hidden flex-col w-full ">
//         <div className="w-full items-center justify-center flex p-20 rtl">
//           {conditionName.Processes.map((i) => {
//             a--;
//               return (
//                 <>
//                   {i.id == id ? (
//                     <div
//                       className="w-40  h-40 p-5 rounded-full bg-[#105251] text-white items-center flex justify-center text-center
//                   text-xl font-Vazirmatn font-bold
//                   "
//                     >
//                       {i.processName}
//                     </div>
//                   ) : (
                  
//                     <div
//                       className="w-40  h-40 p-5 rounded-full bg-[#F1F6F9] items-center flex justify-center
//                       text-xl font-Vazirmatn font-bold border-[#F1F6F9] text-gray-400
//                       text-center "
//                       >
//                       {i.processName}
//                     </div>
//                   )}

//                   {a > 0 ? <>.......</> : <></>}
//                 </>
//               );
       
//           })}
//         </div>
//         <div className="w-full items-center justify-center flex flex-col">
//         {process.specific.length == 0 ? (
//             <>
//               {
//                 process.general ? (
//                 <>
//                     <div className="flex items-center justify-between">
//                     <div className="flex items-center justify-center w-full ">
//                       <div className="border-2 w-full p-5 rounded-xl rtl ml-8 border-black w-[40%]" onClick={()=>setIsopen(!isOpen)}>
//                         شناسایی عام
//                       </div>
//                       {/* <BsArrowReturnRight size={40} /> */}{" "}
//                     </div>{" "}
//                     {
//                       process.specific.length !== 0 ? (
//                       <>
//                         <div className="flex items-center justify-center w-full ">
//                           <BsArrowReturnLeft size={40} />{" "}
//                           <div className=" border-2 p-5 rounded-xl mr-8">
//                             شناسایی خاص
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <> </>
//                     )}
//                   </div>
//                   <div className="w-[100%]  items-center justify-between flex ">
//                     {" "}
//                     {process.specific.length !== 0 ? (
//                       <>
//                         <div className="flex items-ceneter justify-between w-[40%]   ">
//                           <FiArrowDownRight size={40} />{" "}
//                           <FiArrowDownLeft size={40} />{" "}
//                         </div>{" "}
//                         <div className="ml-20">
//                           <AiOutlineArrowDown size={40} />{" "}
//                         </div>{" "}
//                       </>
//                     ) : (
//                       <div className="flex items-ceneter justify-center w-full ">
//                           {isOpen && <>
//                             <FiArrowDownRight size={40} style={{}}/>
//                         <FiArrowDownLeft size={40} className="arrowDown"/>
//                           </>
                      
                      
//                       } 
//                       </div>
//                     )}{" "}
//                   </div>{" "}
//                   {
//                     process.specific.length !== 0 ? (
//                     <div className="grid grid-cols-2 gap-2">
//                       {isOpen && <div className="w-full flex items-center justify-center flex-col ">
//                         <div className="w-[50%]  items-center justify-between flex flex-row  ">
//                           <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                             وظیفه همه شهروندان
//                           </div>
//                           <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                             <p className="text-center "> وظیفه همه دستگاهها </p>
//                           </div>
//                         </div>
//                       </div>
//                       }
//                       <div className="flex flex-col items-center justify-center">
//                         {process.specific.length !== 0 ? (
//                           process.specific.map((i) => {
//                             x--;
//                             return (
//                               <>
//                                 <div className="flex items-center justify-center w-full">
//                                   <div className=" w-[90%] text-white  flex justify-between ">
//                                     <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
//                                       {" "}
//                                       {i.organNam}{" "}
//                                     </div>{" "}
//                                     <div className="flex items-center justify-center">
//                                       {" "}
//                                       {i.organAction == "" ? (
//                                         <> </>
//                                       ) : (
//                                         <AiOutlineArrowLeft
//                                           size={25}
//                                           style={{
//                                             color: "#000",
//                                           }}
//                                         />
//                                       )}{" "}
//                                     </div>
//                                     <div className=" text-black  text-sm w-full text-justify">
//                                       {" "}
//                                       {i.organAction}{" "}
//                                     </div>{" "}
//                                   </div>{" "}
//                                 </div>{" "}
//                                 {x == 0 ? (
//                                   ""
//                                 ) : (
//                                   <div className=" w-[90%]  rtl">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })
//                         ) : (
//                           <>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center justify-center w-full ">
//                                     {
//                                     process.actions.map((i) => {
//                                   z = i.activity.length;
//                                   console.log(i.title);
//                                   return (
//                                     <>
//                                       {" "}
//                                       {i.organNam !== "" ? (
//                                         <div
//                                           className="flex items-center w-full justify-between"
//                                           key={i.id}
//                                         >
//                                           <div className="w-[40%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                             {i.organNam}{" "}
//                                           </div>
//                                           <div className="w-[60%] items-center justify-center">
//                                             {i.activity.map((item, index) => {
//                                               item.decription
//                                                 ? (y = i.activity.length)
//                                                 : (y = 0);
//                                               return (
//                                                 <>
//                                                   <div className="flex items-center justify-between">
//                                                     <div className="flex items-center justify-center">
//                                                       {" "}
//                                                       {y == 0 ? (
//                                                         ""
//                                                       ) : (
//                                                         <AiOutlineArrowLeft
//                                                           size={20}
//                                                           style={{
//                                                             color: "#1D5D9B",
//                                                           }}
//                                                         />
//                                                       )}{" "}
//                                                     </div>{" "}
//                                                     <div
//                                                       className="w-full  p-1 items-center justify-center flex text-center"
//                                                       key={index}
//                                                     >
//                                                       {item.decription}{" "}
//                                                     </div>{" "}
//                                                   </div>{" "}
//                                                 </>
//                                               );
//                                             })}{" "}
//                                           </div>{" "}
//                                         </div>
//                                       ) : (
//                                         <div className="w-full flex flex-col items-center">
//                                           {" "}
//                                           {i.activity.map((item) => {
//                                             z--;
//                                             return (
//                                               <>
//                                                 <div className="text-center w-full p-3 border-4 rounded-2xl border-orange-400">
//                                                   {" "}
//                                                   {item.decription}{" "}
//                                                 </div>{" "}
//                                                 {z == 0 ? (
//                                                   ""
//                                                 ) : (
//                                                   <AiOutlineArrowDown
//                                                     style={{
//                                                       color: "#1D5D9B",
//                                                     }}
//                                                     size={25}
//                                                   />
//                                                 )}{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                         </div>
//                                       )}{" "}
//                                     </>
//                                   );
//                                 })}{" "}
//                               </div>{" "}
//                             </div>{" "}
//                           </>
//                         )
//                         }
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                     {isOpen &&  <div className="w-full flex items-center justify-center flex-col ">
//                         <div className="w-[50%]  items-center justify-between flex flex-row  ">
//                           <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                             وظیفه همه شهروندان{" "}
//                           </div>{" "}
//                           <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                             <p className="text-center "> وظیفه همه دستگاهها </p>{" "}
//                           </div>{" "}
//                         </div>{" "}
//                       </div>}
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
                  
//                   {process.specific.length !== 0 ? (
//                     process.specific.map((i) => {
//                       x--;
//                       return (
//                         <>
//                           <div className="flex items-center justify-center w-full">
//                             <div className=" w-[90%] text-white  flex justify-between ">
//                               {" "}
//                               {i.organNam !== "" ? (
//                                 <>
//                                   <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
//                                     {" "}
//                                     {i.organNam}{" "}
//                                   </div>{" "}
//                                   <div className="flex items-center justify-center">
//                                     <AiOutlineArrowLeft
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                       }}
//                                     />{" "}
//                                   </div>{" "}
//                                   <div className=" text-black  text-sm w-full text-justify">
//                                     {" "}
//                                     {i.organAction}{" "}
//                                   </div>{" "}
//                                 </>
//                               ) : (
//                                 <>
//                                   <div className=" text-black  text-sm w-full text-justify">
//                                     {" "}
//                                     {i.organAction}{" "}
//                                   </div>{" "}
//                                 </>
//                               )}{" "}
//                             </div>{" "}
//                           </div>{" "}
//                           {x == 0 ? (
//                             ""
//                           ) : (
//                             <div className=" w-[30%] flex justify-center rtl ">
//                               <AiOutlineArrowDown
//                                 size={25}
//                                 style={{
//                                   color: "#000",
//                                   direction: "",
//                                 }}
//                               />{" "}
//                             </div>
//                           )}{" "}
//                         </>
//                       );
//                     })
//                   ) : (
//                     <>
//                       {process.actions[0].title ? (
//                         <>
//                           <div className="w-full  flex items-center justify-between p-5 ">
//                             <div className="w-full flex ltr items-center justify-center" onClick={()=>setIsopen(!isOpen)}>
//                               <BsArrowReturnRight size={35} />
//                               <div className="border-2 rounded-2xl  border-blue-400 p-5 font-bold text-lg">
//                                 {mass.title}
//                               </div>
//                             </div>
//                             <div className="w-full  rtl flex items-center justify-center">
//                               <BsArrowReturnLeft size={35} />
//                               <div className="border-2 rounded-2xl border-blue-400 p-5 font-bold text-lg">
//                                 {damage.title}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="w-full flex justify-between items-center">
//                             <div className="w-full items-center justify-center flex ">
//                               <AiOutlineArrowDown size={35} />
//                             </div>
//                             <div className="w-full items-center justify-center flex ">
//                               <AiOutlineArrowDown size={35} />
//                             </div>
//                           </div>
//                           <div className="w-full grid grid-cols-2 gap-3 p-5 ">
//                             {process.actions.map((i) => {
//                               z = damage.activity.length;
//                               m = mass.activity.length;
//                               return (
//                                 <>
//                                   {
                                    
//                                     i.title == "منجر به جرم" ||
//                                       i.title == "مداخله نرم " ? (
//                                         isOpen && <div className="flex flex-col">
//                                         <div className="border-2 border-orange-500 p-4
//                                     items-center justify-center
//                                       text-center rounded-lg w-full">
//                                       {damage.organNam}
//                                     </div>
//                                     <div>
//                                       <AiOutlineArrowDown
//                                         size={25}
//                                         style={{
//                                           display: "flex",
//                                           alignItems: "center",
//                                           justifyContent: "center",
//                                           width: "100%",
//                                         }}
//                                       />
//                                       {damage.activity.map((i) => {
//                                         z--;

//                                         return (
//                                           <>
//                                             <div className="flex w-full flex-row border-2 p-4 mt-4  text-center items-center justify-center">
//                                               {i.decription}
//                                             </div>
//                                             {z == 0 ? (
//                                               <></>
//                                             ) : (
//                                               <AiOutlineArrowDown
//                                                 size={25}
//                                                 style={{
//                                                   display: "flex",
//                                                   alignItems: "center",
//                                                   justifyContent: "center",
//                                                   width: "100%",
//                                                 }}
//                                               />
//                                             )}
//                                           </>
//                                         );
//                                       })}
//                                     </div>
//                                   </div>
                                  
//                                   ) : (
//                                     <>
//                                       {i.title == "منجر به آسیب" ||
//                                       i.title == "مداخله قضائی" ? (
//                                         <div className="flex flex-col">
//                                           <div className="border-2 border-orange-500 p-4 items-center justify-center text-center rounded-lg w-full">
//                                             {mass.organNam}
//                                           </div>
//                                           <div>
//                                             {/* <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} /> */}

//                                             {mass.activity.map((i) => {
//                                               m--;
//                                               return (
//                                                 <>
//                                                   <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
//                                                     {i.decription}
//                                                   </div>
//                                                   {m == 0 ? (
//                                                     <></>
//                                                   ) : (
//                                                     <AiOutlineArrowDown
//                                                       size={25}
//                                                       style={{
//                                                         display: "flex",
//                                                         alignItems: "center",
//                                                         justifyContent: "center",
//                                                         width: "100%",
//                                                       }}
//                                                     />
//                                                   )}
//                                                 </>
//                                               );
//                                             })}
//                                           </div>
//                                         </div>
//                                       ) : (
//                                         <></>
//                                       )}
//                                     </>
//                                   )}
//                                 </>
//                               );
//                             })}
//                           </div>
//                           {other ? (
//                             <div className="w-full mt-5 border-4 border-orange-400 rounded-lg p-4 text-justify">
//                               {other.title}
//                             </div>
//                           ) : (
//                             <></>
//                           )}{" "}
//                         </>
//                       ) : (
//                         <>
//                           {process.actions.map((i) => {
//                             z = i.activity.length;
//                             return (
//                               <>
//                                 {
//                                   i.organNam !== "" ? (
//                                   i.organNam.includes("||") ? (
//                                     <>
//                                       <div className="flex items-center justify-between w-full">
                                      
//                                         {i.organNam
//                                           .split("||")
//                                           .map((item, index) => {
//                                             return (
//                                               <>
//                                                 <div className="ml-5 border-2 rounded-xl p-4 w-full text-center">
//                                                   {" "}
//                                                   {item}{" "}
//                                                 </div>{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                       </div>{" "}
//                                       {i.organNam.split("||").length === 2 ? (
//                                         <div className="flex w-full">
//                                           <div className="w-[50%] ltr">
//                                             <BsArrowDownLeft
//                                               size={35}
//                                               style={{
//                                                 direction: "ltr",
//                                               }}
//                                             />{" "}
//                                           </div>{" "}
//                                           <div className="w-[50%] rtl  ">
//                                             <BsArrowDownRight
//                                               size={35}
//                                               style={{
//                                                 direction: "rtl",
//                                               }}
//                                             />{" "}
//                                           </div>{" "}
//                                         </div>
//                                       ) : (
//                                         <div className="flex w-full items-center justify-between">
//                                           {" "}
//                                           {i.organNam.split("||").map((item) => {
//                                             return (
//                                               <>
//                                                 <div className=" items-center justify-center flex  w-full ">
//                                                   <AiOutlineArrowDown size={35} />{" "}
//                                                 </div>{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                         </div>
//                                       )}
//                                       {i.activity.map((item) => {
//                                         return (
//                                           <>
//                                             <div className="flex flex-col border-4 p-4 w-full rounded-lg mb-5 items-center justify-center">
//                                               {" "}
//                                               {item.decription}{" "}
//                                             </div>{" "}
//                                           </>
//                                         );
//                                       })}{" "}
//                                     </>
//                                   ) : (
//                                     <div
//                                       className="flex items-center w-full justify-between"
//                                       key={i.id}
//                                     >
//                                       <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                         {" "}
//                                         {i.organNam}{" "}
//                                       </div>
//                                       <div className="w-[50%] items-center justify-center">
//                                         {" "}
//                                         {i.activity.map((item, index) => {
//                                           item.decription
//                                             ? (y = i.activity.length)
//                                             : (y = 0);
//                                           return (
//                                             <>
//                                               <div className="flex items-center justify-between">
//                                                 <div className="flex items-center justify-center">
//                                                   {" "}
//                                                   {y == 0 ? (
//                                                     ""
//                                                   ) : (
//                                                     <AiOutlineArrowLeft
//                                                       size={20}
//                                                       style={{
//                                                         color: "#1D5D9B",
//                                                       }}
//                                                     />
//                                                   )}{" "}
//                                                 </div>{" "}
//                                                 <div
//                                                   className="w-full  p-1 items-center justify-center flex text-center"
//                                                   key={index}
//                                                 >
//                                                   {item.decription}{" "}
//                                                 </div>{" "}
//                                               </div>{" "}
//                                             </>
//                                           );
//                                         })}{" "}
//                                       </div>{" "}
//                                     </div>
//                                   )
//                                 ) : (
//                                   <div className="w-full flex flex-col items-center">
//                                     {" "}
//                                     {i.activity.map((item) => {
//                                       z--;
//                                       return (
//                                         <>
//                                           <div className="text-center w-full p-3  text-xl border-4 rounded-2xl border-orange-400">
//                                             {" "}
//                                             {item.decription}{" "}
//                                           </div>{" "}
//                                           {z == 0 ? (
//                                             ""
//                                           ) : (
//                                             <AiOutlineArrowDown
//                                               style={{
//                                                 color: "#1D5D9B",
//                                               }}
//                                               size={25}
//                                             />
//                                           )}{" "}
//                                         </>
//                                       );
//                                     })}{" "}
//                                   </div>
//                                 )}
//                               </>
//                             );
//                           })}
//                         </>
//                       )}
//                     </>
//                   )}
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               {
//                 process.processName !== "بررسی و تحلیل" ? (
//                 <div className="w-full ">
//                   {" "}
//                   {process.general ? (
//                     <>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center justify-center w-full ">
//                           <div className="border-2 p-5 rounded-xl rtl ml-8 border-black w-[50]" onClick={()=>setIsopen(!isOpen)}>
//                             شناسایی عام{" "}
//                           </div>{" "}
//                           <BsArrowReturnRight size={40} />
//                         </div>{" "}
//                           {isOpen &&
//                         <div className="flex items-center justify-center w-full ">
//                         <BsArrowReturnLeft size={40} />
//                         <div className=" border-2 p-5 rounded-xl mr-8" onClick={()=>setsepecialOpen(!sepecialOpen)}>
//                           شناسایی خاص
//                         </div>
//                       </div>
                      
//                       }
//                       </div>{" "}
//                       <div className="w-[100%]  items-center justify-between flex ">
//                         <div className="flex items-ceneter justify-center w-[40%]   ">
//                             {isOpen && <>
//                               <FiArrowDownRight size={40} />
//                           <FiArrowDownLeft size={40} />
//                             </>}
//                         </div>
//                         <div className="ml-20">
//                           {" "}
//                             {sepecialOpen && <AiOutlineArrowDown size={40} />}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="grid grid-cols-2 gap-2">
//                       {isOpen &&  <div className="w-full ltr flex items-center justify-center flex-col mb-[100%]">
//                           <div className="w-[50%] items-center justify-between flex flex-row  ">
//                             <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                               {" "}
//                               وظیفه همه شهروندان{" "}
//                             </div>{" "}
//                             <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                               <p className="text-center "> وظیفه همه دستگاهها </p>{" "}
//                             </div>{" "}
//                           </div>{" "}
//                         </div>}
//                         <div className="flex flex-col items-center justify-center w-[100%] mb-[0%]">
//                           {" "}
//                             {
//                               process.specific.length !== 0 ? (
//                             process.specific.map((i) => {
//                               x--;
//                               return (
//                                 <>
//                                   {sepecialOpen ? <div className="flex items-center  justify-center w-full">
//                                     <div className=" w-[90%] text-white  flex justify-between ">
//                                       <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
//                                         {" "}
//                                         {i.organNam}{" "}
//                                       </div>{" "}
//                                       <div className="flex items-center justify-center">
//                                         {" "}
//                                         {i.organAction == "" ? (
//                                           ""
//                                         ) : (
//                                           <AiOutlineArrowLeft
//                                             size={25}
//                                             style={{
//                                               color: "#000",
//                                             }}
//                                           />
//                                         )}{" "}
//                                       </div>
//                                       <div className=" text-black  text-sm w-full text-justify">
//                                         {" "}
//                                         {i.organAction}{" "}
//                                       </div>{" "}
//                                     </div>{" "}
//                                   </div>
//                                     :<></>
//                                   }
//                                   {x == 0 ? (
//                                     ""
//                                   ) : (
//                                     sepecialOpen && <div className=" w-[90%]  rtl">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                   )}{" "}
//                                 </>
//                               );
//                             })
//                           ) : (
//                             <>
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center justify-center border-2 ">
//                                   {" "}
//                                 </div>{" "}
//                               </div>{" "}
//                             </>
//                           )}{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </>
//                   ) : (
//                     <>
//                       {" "}
//                       {process.specific.length !== 0
//                         ? process.specific.map((i) => {
//                             x--;
//                             return (
//                               <>
//                                 <div className="flex items-center justify-center w-full">
//                                   <div className=" w-[90%] text-white  flex justify-between ">
//                                     {" "}
//                                     {i.organNam !== "" ? (
//                                       <>
//                                         <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
//                                           {" "}
//                                           {i.organNam}{" "}
//                                         </div>{" "}
//                                         <div className="flex items-center justify-center">
//                                           {" "}
//                                           {i.organAction == "" ? (
//                                             <> </>
//                                           ) : (
//                                             <>
//                                               <AiOutlineArrowLeft
//                                                 size={25}
//                                                 style={{
//                                                   color: "#000",
//                                                 }}
//                                               />{" "}
//                                             </>
//                                           )}{" "}
//                                         </div>{" "}
//                                         <div className=" text-black  text-sm w-full text-justify">
//                                           {" "}
//                                           {i.organAction}{" "}
//                                         </div>{" "}
//                                       </>
//                                     ) : (
//                                       <>
//                                         <div className=" text-black  text-sm w-full text-justify">
//                                           {" "}
//                                           {i.organAction}{" "}
//                                         </div>{" "}
//                                       </>
//                                     )}{" "}
//                                   </div>{" "}
//                                 </div>{" "}
//                                 {x == 0 ? (
//                                   ""
//                                 ) : (
//                                   <div className=" w-[30%] flex justify-center rtl ">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })
//                         : process.actions.map((i) => {
//                             z = i.activity.length;
//                             return (
//                               <>
//                                 {" "}
//                                 {i.organNam !== "" ? (
//                                   <div
//                                     className="flex items-center w-full justify-between"
//                                     key={i.id}
//                                   >
//                                     <div className="w-[50%] ml-2 flex border-4 rounded-2xl h-44 text-xl border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                       {" "}
//                                       {i.organNam}{" "}
//                                     </div>
//                                     <div className="w-[50%] items-center justify-center">
//                                       {" "}
//                                       {i.activity.map((item, index) => {
//                                         item.decription
//                                           ? (y = i.activity.length)
//                                           : (y = 0);
//                                         return (
//                                           <>
//                                             <div className="flex items-center justify-between">
//                                               <div className="flex items-center justify-center">
//                                                 {" "}
//                                                 {y == 0 ? (
//                                                   ""
//                                                 ) : (
//                                                   <AiOutlineArrowLeft
//                                                     size={20}
//                                                     style={{
//                                                       color: "#1D5D9B",
//                                                     }}
//                                                   />
//                                                 )}{" "}
//                                               </div>{" "}
//                                               <div
//                                                 className="w-full  p-1 items-center justify-center flex text-center"
//                                                 key={index}
//                                               >
//                                                 {item.decription}{" "}
//                                               </div>{" "}
//                                             </div>{" "}
//                                           </>
//                                         );
//                                       })}{" "}
//                                     </div>{" "}
//                                   </div>
//                                 ) : (
//                                   <div className="w-full flex flex-col items-center">
//                                     {" "}
//                                     {i.activity.map((item) => {
//                                       z--;
//                                       return (
//                                         <>
//                                           <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
//                                             {" "}
//                                             {item.decription}{" "}
//                                           </div>{" "}
//                                           {z == 0 ? (
//                                             ""
//                                           ) : (
//                                             <AiOutlineArrowDown
//                                               style={{
//                                                 color: "#1D5D9B",
//                                               }}
//                                               size={25}
//                                             />
//                                           )}{" "}
//                                         </>
//                                       );
//                                     })}{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })}{" "}
//                     </>
//                   )}{" "}
//                 </div>
//               ) : (
//                 <>
//                   <div className="w-full items-center flex justify-between flex-col">
//                     <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">
//                       خبر{" "}
//                     </div>{" "}
//                     <div>
//                       <AiOutlineArrowDown size={30} />{" "}
//                     </div>{" "}
//                     <div className="flex items-centet justify-between w-full">
//                       <div className="items-center  flex   w-[50%]">
//                         <div className="flex mt-6 w-full ltr">
//                           {" "}
//                           <FiCornerRightDown
//                             size={40}
//                             style={{
//                               direction: "ltr",
//                             }}
//                           />{" "}
//                         </div>{" "}
//                         <div className="items-center flex justify-center text-xl ">
//                           خیر{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="border-2 rounded-xl p-6 border-blue-400 text-xl text-center">
//                         {" "}
//                         آیا خبر صحت دارد؟{" "}
//                       </div>{" "}
//                       <div className="items-center flex justify-between w-[50%]">
//                         <div className="items-center flex justify-center text-xl ">
//                           بله{" "}
//                         </div>{" "}
//                         <div className="flex mt-6 w-full rtl">
//                           {" "}
//                           <FiCornerLeftDown
//                             size={40}
//                             style={{
//                               direction: "rtl",
//                             }}
//                           />{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                     <div className=" flex w-full items-center  justify-between p-2">
//                       <div className=" w-[50%] items-center justify-center flex ">
//                         <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
//                           صورتجلسه توسط مددکاران بهزیستی{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className=" w-[50%] items-center justify-center flex flex-col ">
//                         <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">
//                           علل شناسی{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                     <div className="w-[50%] items-center justify-between flex rtl">
//                       <div className="flex items-center justify-center rtl">
//                         <AiOutlineArrowDown size={25} />{" "}
//                       </div>{" "}
//                       <div className="flex items-center justify-center rtl">
//                         <AiOutlineArrowDown size={25} />{" "}
//                       </div>{" "}
//                     </div>
//                     <div className="flex  items-center justify-between w-[100%] ">
//                       <div className="w-[50%] items-center justify-center flex ml-4 ">
//                         <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
//                           اطلاع به مافوق{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className=" w-[50%]">
//                         {" "}
//                         {process.specific.map((i) => {
//                           x--;
//                           return (
//                             <>
//                               <div className="flex items-center justify-between w-full">
//                                 <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
//                                   {" "}
//                                   {i.organNam}{" "}
//                                 </div>{" "}
//                                 <div>
//                                   <AiOutlineArrowLeft size={25} />{" "}
//                                 </div>{" "}
//                                 <div className="w-full"> {i.organAction} </div>{" "}
//                               </div>{" "}
//                               {x == 0 ? (
//                                 ""
//                               ) : (
//                                 <AiOutlineArrowDown
//                                   size={25}
//                                   style={{
//                                     marginRight: "20",
//                                   }}
//                                 />
//                               )}{" "}
//                             </>
//                           );
//                         })}{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </>
//                 )
//               }
//             </>
//           )}
//         </div>

//       </div>

//       <div className="md:hidden flex flex-col w-full mt-28  items-center justify-center text-[#1D267D]  mb-72 rtl">
//           <section className="font-bold text-xl m-5  flex flex-col">
//             {process.processName}
//           </section>
//           {process.specific.length == 0 ? (
//             <>
//               {
//                 process.general ? (
//                 <>
//                     <div className="flex items-center justify-between">
//                     <div className="flex items-center justify-center w-full ">
//                       <div className="border-2 w-full p-5 rounded-xl rtl ml-8 border-black" onClick={()=>setIsopen(!isOpen)}>
//                         شناسایی عام
//                       </div>
//                       {/* <BsArrowReturnRight size={40} /> */}{" "}
//                     </div>{" "}
//                     {
//                       process.specific.length !== 0 ? (
//                       <>
//                         <div className="flex items-center justify-center w-full ">
//                           <BsArrowReturnLeft size={40} />{" "}
//                           <div className=" border-2 p-5 rounded-xl mr-8">
//                             شناسایی خاص
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <> </>
//                     )}
//                   </div>
//                   <div className="w-[100%]  items-center justify-between flex ">
//                     {" "}
//                     {process.specific.length !== 0 ? (
//                       <>
//                         <div className="flex items-ceneter justify-between w-[40%]   ">
//                           <FiArrowDownRight size={40} />{" "}
//                           <FiArrowDownLeft size={40} />{" "}
//                         </div>{" "}
//                         <div className="ml-20">
//                           <AiOutlineArrowDown size={40} />{" "}
//                         </div>{" "}
//                       </>
//                     ) : (
//                       <div className="flex items-ceneter justify-center w-full ">
//                           {isOpen && <>
//                             <FiArrowDownRight size={40} style={{}}/>
//                         <FiArrowDownLeft size={40} className="arrowDown"/>
//                           </>
                      
                      
//                       } 
//                       </div>
//                     )}{" "}
//                   </div>{" "}
//                   {
//                     process.specific.length !== 0 ? (
//                     <div className="grid grid-cols-2 gap-2">
//                       {isOpen && <div className="w-full flex items-center justify-center flex-col ">
//                         <div className="w-[50%]  items-center justify-between flex flex-row  ">
//                           <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                             وظیفه همه شهروندان
//                           </div>
//                           <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                             <p className="text-center "> وظیفه همه دستگاهها </p>
//                           </div>
//                         </div>
//                       </div>
//                       }
//                       <div className="flex flex-col items-center justify-center">
//                         {process.specific.length !== 0 ? (
//                           process.specific.map((i) => {
//                             x--;
//                             return (
//                               <>
//                                 <div className="flex items-center justify-center w-full">
//                                   <div className=" w-[90%] text-white  flex justify-between ">
//                                     <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
//                                       {" "}
//                                       {i.organNam}{" "}
//                                     </div>{" "}
//                                     <div className="flex items-center justify-center">
//                                       {" "}
//                                       {i.organAction == "" ? (
//                                         <> </>
//                                       ) : (
//                                         <AiOutlineArrowLeft
//                                           size={25}
//                                           style={{
//                                             color: "#000",
//                                           }}
//                                         />
//                                       )}{" "}
//                                     </div>
//                                     <div className=" text-black  text-sm w-full text-justify">
//                                       {" "}
//                                       {i.organAction}{" "}
//                                     </div>{" "}
//                                   </div>{" "}
//                                 </div>{" "}
//                                 {x == 0 ? (
//                                   ""
//                                 ) : (
//                                   <div className=" w-[90%]  rtl">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })
//                         ) : (
//                           <>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center justify-center w-full ">
//                                     {
//                                     process.actions.map((i) => {
//                                   z = i.activity.length;
//                                   console.log(i.title);
//                                   return (
//                                     <>
//                                       {" "}
//                                       {i.organNam !== "" ? (
//                                         <div
//                                           className="flex items-center w-full justify-between"
//                                           key={i.id}
//                                         >
//                                           <div className="w-[40%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                             {i.organNam}{" "}
//                                           </div>
//                                           <div className="w-[60%] items-center justify-center">
//                                             {i.activity.map((item, index) => {
//                                               item.decription
//                                                 ? (y = i.activity.length)
//                                                 : (y = 0);
//                                               return (
//                                                 <>
//                                                   <div className="flex items-center justify-between">
//                                                     <div className="flex items-center justify-center">
//                                                       {" "}
//                                                       {y == 0 ? (
//                                                         ""
//                                                       ) : (
//                                                         <AiOutlineArrowLeft
//                                                           size={20}
//                                                           style={{
//                                                             color: "#1D5D9B",
//                                                           }}
//                                                         />
//                                                       )}{" "}
//                                                     </div>{" "}
//                                                     <div
//                                                       className="w-full  p-1 items-center justify-center flex text-center"
//                                                       key={index}
//                                                     >
//                                                       {item.decription}{" "}
//                                                     </div>{" "}
//                                                   </div>{" "}
//                                                 </>
//                                               );
//                                             })}{" "}
//                                           </div>{" "}
//                                         </div>
//                                       ) : (
//                                         <div className="w-full flex flex-col items-center">
//                                           {" "}
//                                           {i.activity.map((item) => {
//                                             z--;
//                                             return (
//                                               <>
//                                                 <div className="text-center w-full p-3 border-4 rounded-2xl border-orange-400">
//                                                   {" "}
//                                                   {item.decription}{" "}
//                                                 </div>{" "}
//                                                 {z == 0 ? (
//                                                   ""
//                                                 ) : (
//                                                   <AiOutlineArrowDown
//                                                     style={{
//                                                       color: "#1D5D9B",
//                                                     }}
//                                                     size={25}
//                                                   />
//                                                 )}{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                         </div>
//                                       )}{" "}
//                                     </>
//                                   );
//                                 })}{" "}
//                               </div>{" "}
//                             </div>{" "}
//                           </>
//                         )
//                         }
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                     {isOpen &&  <div className="w-full flex items-center justify-center flex-col ">
//                         <div className="w-[50%]  items-center justify-between flex flex-row  ">
//                           <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                             وظیفه همه شهروندان{" "}
//                           </div>{" "}
//                           <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                             <p className="text-center "> وظیفه همه دستگاهها </p>{" "}
//                           </div>{" "}
//                         </div>{" "}
//                       </div>}
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
                  
//                   {process.specific.length !== 0 ? (
//                     process.specific.map((i) => {
//                       x--;
//                       return (
//                         <>
//                           <div className="flex items-center justify-center w-full">
//                             <div className=" w-[90%] text-white  flex justify-between ">
//                               {" "}
//                               {i.organNam !== "" ? (
//                                 <>
//                                   <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
//                                     {" "}
//                                     {i.organNam}{" "}
//                                   </div>{" "}
//                                   <div className="flex items-center justify-center">
//                                     <AiOutlineArrowLeft
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                       }}
//                                     />{" "}
//                                   </div>{" "}
//                                   <div className=" text-black  text-sm w-full text-justify">
//                                     {" "}
//                                     {i.organAction}{" "}
//                                   </div>{" "}
//                                 </>
//                               ) : (
//                                 <>
//                                   <div className=" text-black  text-sm w-full text-justify">
//                                     {" "}
//                                     {i.organAction}{" "}
//                                   </div>{" "}
//                                 </>
//                               )}{" "}
//                             </div>{" "}
//                           </div>{" "}
//                           {x == 0 ? (
//                             ""
//                           ) : (
//                             <div className=" w-[30%] flex justify-center rtl ">
//                               <AiOutlineArrowDown
//                                 size={25}
//                                 style={{
//                                   color: "#000",
//                                   direction: "",
//                                 }}
//                               />{" "}
//                             </div>
//                           )}{" "}
//                         </>
//                       );
//                     })
//                   ) : (
//                     <>
//                       {process.actions[0].title ? (
//                         <>
//                           <div className="w-full  flex items-center justify-between p-5 ">
//                             <div className="w-full flex ltr items-center justify-center" onClick={()=>setIsopen(!isOpen)}>
//                               <BsArrowReturnRight size={35} />
//                               <div className="border-2 rounded-2xl  border-blue-400 p-5 font-bold text-lg">
//                                 {mass.title}
//                               </div>
//                             </div>
//                             <div className="w-full  rtl flex items-center justify-center">
//                               <BsArrowReturnLeft size={35} />
//                               <div className="border-2 rounded-2xl border-blue-400 p-5 font-bold text-lg">
//                                 {damage.title}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="w-full flex justify-between items-center">
//                             <div className="w-full items-center justify-center flex ">
//                               <AiOutlineArrowDown size={35} />
//                             </div>
//                             <div className="w-full items-center justify-center flex ">
//                               <AiOutlineArrowDown size={35} />
//                             </div>
//                           </div>
//                           <div className="w-full grid grid-cols-2 gap-3 p-5 ">
//                             {process.actions.map((i) => {
//                               z = damage.activity.length;
//                               m = mass.activity.length;
//                               return (
//                                 <>
//                                   {
                                    
//                                     i.title == "منجر به جرم" ||
//                                       i.title == "مداخله نرم " ? (
//                                         isOpen && <div className="flex flex-col">
//                                         <div className="border-2 border-orange-500 p-4
//                                     items-center justify-center
//                                       text-center rounded-lg w-full">
//                                       {damage.organNam}
//                                     </div>
//                                     <div>
//                                       <AiOutlineArrowDown
//                                         size={25}
//                                         style={{
//                                           display: "flex",
//                                           alignItems: "center",
//                                           justifyContent: "center",
//                                           width: "100%",
//                                         }}
//                                       />
//                                       {damage.activity.map((i) => {
//                                         z--;

//                                         return (
//                                           <>
//                                             <div className="flex w-full flex-row border-2 p-4 mt-4  text-center items-center justify-center">
//                                               {i.decription}
//                                             </div>
//                                             {z == 0 ? (
//                                               <></>
//                                             ) : (
//                                               <AiOutlineArrowDown
//                                                 size={25}
//                                                 style={{
//                                                   display: "flex",
//                                                   alignItems: "center",
//                                                   justifyContent: "center",
//                                                   width: "100%",
//                                                 }}
//                                               />
//                                             )}
//                                           </>
//                                         );
//                                       })}
//                                     </div>
//                                   </div>
                                  
//                                   ) : (
//                                     <>
//                                       {i.title == "منجر به آسیب" ||
//                                       i.title == "مداخله قضائی" ? (
//                                         <div className="flex flex-col">
//                                           <div className="border-2 border-orange-500 p-4 items-center justify-center text-center rounded-lg w-full">
//                                             {mass.organNam}
//                                           </div>
//                                           <div>
//                                             {/* <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} /> */}

//                                             {mass.activity.map((i) => {
//                                               m--;
//                                               return (
//                                                 <>
//                                                   <div className="flex w-full flex-row border-2 p-4 mt-4 text-center items-center justify-center">
//                                                     {i.decription}
//                                                   </div>
//                                                   {m == 0 ? (
//                                                     <></>
//                                                   ) : (
//                                                     <AiOutlineArrowDown
//                                                       size={25}
//                                                       style={{
//                                                         display: "flex",
//                                                         alignItems: "center",
//                                                         justifyContent: "center",
//                                                         width: "100%",
//                                                       }}
//                                                     />
//                                                   )}
//                                                 </>
//                                               );
//                                             })}
//                                           </div>
//                                         </div>
//                                       ) : (
//                                         <></>
//                                       )}
//                                     </>
//                                   )}
//                                 </>
//                               );
//                             })}
//                           </div>
//                           {other ? (
//                             <div className="w-full mt-5 border-4 border-orange-400 rounded-lg p-4 text-justify">
//                               {other.title}
//                             </div>
//                           ) : (
//                             <></>
//                           )}{" "}
//                         </>
//                       ) : (
//                         <>
//                           {process.actions.map((i) => {
//                             z = i.activity.length;
//                             return (
//                               <>
//                                 {
//                                   i.organNam !== "" ? (
//                                   i.organNam.includes("||") ? (
//                                     <>
//                                       <div className="flex items-center justify-between w-full">
                                      
//                                         {i.organNam
//                                           .split("||")
//                                           .map((item, index) => {
//                                             return (
//                                               <>
//                                                 <div className="ml-5 border-2 rounded-xl p-4 w-full text-center">
//                                                   {" "}
//                                                   {item}{" "}
//                                                 </div>{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                       </div>{" "}
//                                       {i.organNam.split("||").length === 2 ? (
//                                         <div className="flex w-full">
//                                           <div className="w-[50%] ltr">
//                                             <BsArrowDownLeft
//                                               size={35}
//                                               style={{
//                                                 direction: "ltr",
//                                               }}
//                                             />{" "}
//                                           </div>{" "}
//                                           <div className="w-[50%] rtl  ">
//                                             <BsArrowDownRight
//                                               size={35}
//                                               style={{
//                                                 direction: "rtl",
//                                               }}
//                                             />{" "}
//                                           </div>{" "}
//                                         </div>
//                                       ) : (
//                                         <div className="flex w-full items-center justify-between">
//                                           {" "}
//                                           {i.organNam.split("||").map((item) => {
//                                             return (
//                                               <>
//                                                 <div className=" items-center justify-center flex  w-full ">
//                                                   <AiOutlineArrowDown size={35} />{" "}
//                                                 </div>{" "}
//                                               </>
//                                             );
//                                           })}{" "}
//                                         </div>
//                                       )}
//                                       {i.activity.map((item) => {
//                                         return (
//                                           <>
//                                             <div className="flex flex-col border-4 p-4 w-full rounded-lg mb-5 items-center justify-center">
//                                               {" "}
//                                               {item.decription}{" "}
//                                             </div>{" "}
//                                           </>
//                                         );
//                                       })}{" "}
//                                     </>
//                                   ) : (
//                                     <div
//                                       className="flex items-center w-full justify-between"
//                                       key={i.id}
//                                     >
//                                       <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                         {" "}
//                                         {i.organNam}{" "}
//                                       </div>
//                                       <div className="w-[50%] items-center justify-center">
//                                         {" "}
//                                         {i.activity.map((item, index) => {
//                                           item.decription
//                                             ? (y = i.activity.length)
//                                             : (y = 0);
//                                           return (
//                                             <>
//                                               <div className="flex items-center justify-between">
//                                                 <div className="flex items-center justify-center">
//                                                   {" "}
//                                                   {y == 0 ? (
//                                                     ""
//                                                   ) : (
//                                                     <AiOutlineArrowLeft
//                                                       size={20}
//                                                       style={{
//                                                         color: "#1D5D9B",
//                                                       }}
//                                                     />
//                                                   )}{" "}
//                                                 </div>{" "}
//                                                 <div
//                                                   className="w-full  p-1 items-center justify-center flex text-center"
//                                                   key={index}
//                                                 >
//                                                   {item.decription}{" "}
//                                                 </div>{" "}
//                                               </div>{" "}
//                                             </>
//                                           );
//                                         })}{" "}
//                                       </div>{" "}
//                                     </div>
//                                   )
//                                 ) : (
//                                   <div className="w-full flex flex-col items-center">
//                                     {" "}
//                                     {i.activity.map((item) => {
//                                       z--;
//                                       return (
//                                         <>
//                                           <div className="text-center w-full p-3  text-xl border-4 rounded-2xl border-orange-400">
//                                             {" "}
//                                             {item.decription}{" "}
//                                           </div>{" "}
//                                           {z == 0 ? (
//                                             ""
//                                           ) : (
//                                             <AiOutlineArrowDown
//                                               style={{
//                                                 color: "#1D5D9B",
//                                               }}
//                                               size={25}
//                                             />
//                                           )}{" "}
//                                         </>
//                                       );
//                                     })}{" "}
//                                   </div>
//                                 )}
//                               </>
//                             );
//                           })}
//                         </>
//                       )}
//                     </>
//                   )}
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               {
//                 process.processName !== "بررسی و تحلیل" ? (
//                 <div className="w-full ">
//                   {" "}
//                   {process.general ? (
//                     <>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center justify-center w-full ">
//                           <div className="border-2 p-5 rounded-xl rtl ml-8 border-black" onClick={()=>setIsopen(!isOpen)}>
//                             شناسایی عام{" "}
//                           </div>{" "}
//                           <BsArrowReturnRight size={40} />
//                         </div>{" "}
//                           {isOpen &&
//                         <div className="flex items-center justify-center w-full ">
//                         <BsArrowReturnLeft size={40} />
//                         <div className=" border-2 p-5 rounded-xl mr-8" onClick={()=>setsepecialOpen(!sepecialOpen)}>
//                           شناسایی خاص
//                         </div>
//                       </div>
                      
//                       }
//                       </div>{" "}
//                       <div className="w-[100%]  items-center justify-between flex ">
//                         <div className="flex items-ceneter justify-center w-[40%]   ">
//                             {isOpen && <>
//                               <FiArrowDownRight size={40} />
//                           <FiArrowDownLeft size={40} />
//                             </>}
//                         </div>
//                         <div className="ml-20">
//                           {" "}
//                             {sepecialOpen && <AiOutlineArrowDown size={40} />}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="grid grid-cols-2 gap-2">
//                       {isOpen &&  <div className="w-full ltr flex items-center justify-center flex-col mb-[100%]">
//                           <div className="w-[50%] items-center justify-between flex flex-row  ">
//                             <div className="w-full border-2 rounded-xl p-4 text-center border-black">
//                               {" "}
//                               وظیفه همه شهروندان{" "}
//                             </div>{" "}
//                             <div className="w-full  border-2 rounded-xl p-4 text-center mr-5 border-black">
//                               <p className="text-center "> وظیفه همه دستگاهها </p>{" "}
//                             </div>{" "}
//                           </div>{" "}
//                         </div>}
//                         <div className="flex flex-col items-center justify-center w-[100%] mb-[0%]">
//                           {" "}
//                             {
//                               process.specific.length !== 0 ? (
//                             process.specific.map((i) => {
//                               x--;
//                               return (
//                                 <>
//                                   {sepecialOpen ? <div className="flex items-center  justify-center w-full">
//                                     <div className=" w-[90%] text-white  flex justify-between ">
//                                       <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
//                                         {" "}
//                                         {i.organNam}{" "}
//                                       </div>{" "}
//                                       <div className="flex items-center justify-center">
//                                         {" "}
//                                         {i.organAction == "" ? (
//                                           ""
//                                         ) : (
//                                           <AiOutlineArrowLeft
//                                             size={25}
//                                             style={{
//                                               color: "#000",
//                                             }}
//                                           />
//                                         )}{" "}
//                                       </div>
//                                       <div className=" text-black  text-sm w-full text-justify">
//                                         {" "}
//                                         {i.organAction}{" "}
//                                       </div>{" "}
//                                     </div>{" "}
//                                   </div>
//                                     :<></>
//                                   }
//                                   {x == 0 ? (
//                                     ""
//                                   ) : (
//                                     sepecialOpen && <div className=" w-[90%]  rtl">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                   )}{" "}
//                                 </>
//                               );
//                             })
//                           ) : (
//                             <>
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center justify-center border-2 ">
//                                   {" "}
//                                 </div>{" "}
//                               </div>{" "}
//                             </>
//                           )}{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </>
//                   ) : (
//                     <>
//                       {" "}
//                       {process.specific.length !== 0
//                         ? process.specific.map((i) => {
//                             x--;
//                             return (
//                               <>
//                                 <div className="flex items-center justify-center w-full">
//                                   <div className=" w-[90%] text-white  flex justify-between ">
//                                     {" "}
//                                     {i.organNam !== "" ? (
//                                       <>
//                                         <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
//                                           {" "}
//                                           {i.organNam}{" "}
//                                         </div>{" "}
//                                         <div className="flex items-center justify-center">
//                                           {" "}
//                                           {i.organAction == "" ? (
//                                             <> </>
//                                           ) : (
//                                             <>
//                                               <AiOutlineArrowLeft
//                                                 size={25}
//                                                 style={{
//                                                   color: "#000",
//                                                 }}
//                                               />{" "}
//                                             </>
//                                           )}{" "}
//                                         </div>{" "}
//                                         <div className=" text-black  text-sm w-full text-justify">
//                                           {" "}
//                                           {i.organAction}{" "}
//                                         </div>{" "}
//                                       </>
//                                     ) : (
//                                       <>
//                                         <div className=" text-black  text-sm w-full text-justify">
//                                           {" "}
//                                           {i.organAction}{" "}
//                                         </div>{" "}
//                                       </>
//                                     )}{" "}
//                                   </div>{" "}
//                                 </div>{" "}
//                                 {x == 0 ? (
//                                   ""
//                                 ) : (
//                                   <div className=" w-[30%] flex justify-center rtl ">
//                                     <AiOutlineArrowDown
//                                       size={25}
//                                       style={{
//                                         color: "#000",
//                                         direction: "",
//                                       }}
//                                     />{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })
//                         : process.actions.map((i) => {
//                             z = i.activity.length;
//                             return (
//                               <>
//                                 {" "}
//                                 {i.organNam !== "" ? (
//                                   <div
//                                     className="flex items-center w-full justify-between"
//                                     key={i.id}
//                                   >
//                                     <div className="w-[50%] ml-2 flex border-4 rounded-2xl h-44 text-xl border-orange-400 p-4 mb-3 items-center justify-center text-center">
//                                       {" "}
//                                       {i.organNam}{" "}
//                                     </div>
//                                     <div className="w-[50%] items-center justify-center">
//                                       {" "}
//                                       {i.activity.map((item, index) => {
//                                         item.decription
//                                           ? (y = i.activity.length)
//                                           : (y = 0);
//                                         return (
//                                           <>
//                                             <div className="flex items-center justify-between">
//                                               <div className="flex items-center justify-center">
//                                                 {" "}
//                                                 {y == 0 ? (
//                                                   ""
//                                                 ) : (
//                                                   <AiOutlineArrowLeft
//                                                     size={20}
//                                                     style={{
//                                                       color: "#1D5D9B",
//                                                     }}
//                                                   />
//                                                 )}{" "}
//                                               </div>{" "}
//                                               <div
//                                                 className="w-full  p-1 items-center justify-center flex text-center"
//                                                 key={index}
//                                               >
//                                                 {item.decription}{" "}
//                                               </div>{" "}
//                                             </div>{" "}
//                                           </>
//                                         );
//                                       })}{" "}
//                                     </div>{" "}
//                                   </div>
//                                 ) : (
//                                   <div className="w-full flex flex-col items-center">
//                                     {" "}
//                                     {i.activity.map((item) => {
//                                       z--;
//                                       return (
//                                         <>
//                                           <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
//                                             {" "}
//                                             {item.decription}{" "}
//                                           </div>{" "}
//                                           {z == 0 ? (
//                                             ""
//                                           ) : (
//                                             <AiOutlineArrowDown
//                                               style={{
//                                                 color: "#1D5D9B",
//                                               }}
//                                               size={25}
//                                             />
//                                           )}{" "}
//                                         </>
//                                       );
//                                     })}{" "}
//                                   </div>
//                                 )}{" "}
//                               </>
//                             );
//                           })}{" "}
//                     </>
//                   )}{" "}
//                 </div>
//               ) : (
//                 <>
//                   <div className="w-full items-center flex justify-between flex-col">
//                     <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">
//                       خبر{" "}
//                     </div>{" "}
//                     <div>
//                       <AiOutlineArrowDown size={30} />{" "}
//                     </div>{" "}
//                     <div className="flex items-centet justify-between w-full">
//                       <div className="items-center  flex   w-[50%]">
//                         <div className="flex mt-6 w-full ltr">
//                           {" "}
//                           <FiCornerRightDown
//                             size={40}
//                             style={{
//                               direction: "ltr",
//                             }}
//                           />{" "}
//                         </div>{" "}
//                         <div className="items-center flex justify-center text-xl ">
//                           خیر{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="border-2 rounded-xl p-6 border-blue-400 text-xl text-center">
//                         {" "}
//                         آیا خبر صحت دارد؟{" "}
//                       </div>{" "}
//                       <div className="items-center flex justify-between w-[50%]">
//                         <div className="items-center flex justify-center text-xl ">
//                           بله{" "}
//                         </div>{" "}
//                         {/* <div className="items-center flex w-full mt-6 rtl">
//                                       <FiCornerLeftDown size={40} style={{direction:"rtl"}} />
                                  
//                                       </div> */}{" "}
//                         <div className="flex mt-6 w-full rtl">
//                           {" "}
//                           <FiCornerLeftDown
//                             size={40}
//                             style={{
//                               direction: "rtl",
//                             }}
//                           />{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                     <div className=" flex w-full items-center  justify-between p-2">
//                       <div className=" w-[50%] items-center justify-center flex ">
//                         <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
//                           صورتجلسه توسط مددکاران بهزیستی{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className=" w-[50%] items-center justify-center flex flex-col ">
//                         <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">
//                           علل شناسی{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                     <div className="w-[50%] items-center justify-between flex rtl">
//                       <div className="flex items-center justify-center rtl">
//                         <AiOutlineArrowDown size={25} />{" "}
//                       </div>{" "}
//                       <div className="flex items-center justify-center rtl">
//                         <AiOutlineArrowDown size={25} />{" "}
//                       </div>{" "}
//                     </div>
//                     <div className="flex  items-center justify-between w-[100%] ">
//                       <div className="w-[50%] items-center justify-center flex ml-4 ">
//                         <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
//                           اطلاع به مافوق{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className=" w-[50%]">
//                         {" "}
//                         {process.specific.map((i) => {
//                           x--;
//                           return (
//                             <>
//                               <div className="flex items-center justify-between w-full">
//                                 <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
//                                   {" "}
//                                   {i.organNam}{" "}
//                                 </div>{" "}
//                                 <div>
//                                   <AiOutlineArrowLeft size={25} />{" "}
//                                 </div>{" "}
//                                 <div className="w-full"> {i.organAction} </div>{" "}
//                               </div>{" "}
//                               {x == 0 ? (
//                                 ""
//                               ) : (
//                                 <AiOutlineArrowDown
//                                   size={25}
//                                   style={{
//                                     marginRight: "20",
//                                   }}
//                                 />
//                               )}{" "}
//                             </>
//                           );
//                         })}{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </>
//                 )
//               }
//             </>
//           )}
//       </div>
//     </>
//   );
// };

// export default Process;
import React, { useState, useEffect } from "react";
import list from '../db';
// import { DataContext } from "../DataProvider";
import { useParams } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
import { FiArrowDownRight, FiArrowDownLeft, FiCornerLeftDown, FiCornerRightDown } from "react-icons/fi";
import {  BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
const Process = () => {
  let { id } = useParams();
  // const { List } = useContext(DataContext);
  const [data, setData] = useState({});
  const [conditionName, setConditionName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [mass, setMass] = useState();
  const [damage, setDamage] = useState();
  const [other, setOther] = useState();
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
          (i) => i.title === "منجر به جرم" || i.title === "مداخله نرم "
        )
      );
      setDamage(
        item.actions.find(
          (i) => i.title === "منجر به آسیب" || i.title === "مداخله قضائی"
        )
      );
      setOther(item.actions.find((i) => i.organNam === ""));
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
console.log(data)
  return (
    <>
      <div className="md:flex hidden flex-col w-full ">
        <div className="w-full items-center justify-center flex p-20 rtl">
          {conditionName.map((i) => {
            x = i.Processes.length;
            return i.Processes.map((i) => {
              x--;
              return (
                <>
                  {i.id == id ? (
                    <div
                      className="w-40  h-40 p-5 rounded-full bg-[#105251] text-white items-center flex justify-center text-center
                  text-xl font-Vazirmatn font-bold
                  "
                    >
                      {i.processName}
                    </div>
                  ) : (
                  
                    <div
                      className="w-40  h-40 p-5 rounded-full bg-[#F1F6F9] items-center flex justify-center
                      text-xl font-Vazirmatn font-bold border-[#F1F6F9] text-gray-400
                      text-center "
                      >
                      {i.processName}
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
                                        <AiOutlineArrowLeft size={25} />
                                      </div>
                                      <div className="flex text-center items-center justify-center w-full border-2 font-Vazirmatn font-bold text-xl p-5 m-5">
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
                              <div className="w-[50%] flex justify-between items-center">
                                <div className="w-full items-center justify-center flex  ">
                                  <AiOutlineArrowDown size={35} />
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
                                      i.title === "مداخله نرم " ? (
                                        <div className="flex flex-col">
                                          <div
                                            className="border-2 border-orange-500 p-4
                                   items-center justify-center
                                    text-center rounded-lg w-full"
                                          >
                                           {mass.organNam}
                                            </div>
                                            {z > 0?
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
                                                    }
                                        </div>
                                      ) : (
                                        <>
                                          {i.title == "منجر به آسیب" ||
                                          i.title == "مداخله قضائی" ? (
                                            <div className="flex flex-col">
                                              <div className="border-2 border-orange-500 p-4 items-center justify-center text-center rounded-lg w-full">
                                                {damage.organNam}
                                              </div>
                                              <div>
                                                {/* <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} /> */}

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
                          ) : (
                       <>
                                    {item.actions.map((i) => {
                                      z = i.activity.length;
                                      return <>
                                        {i.organNam == "" ? <>
                                          {i.activity.map((item) => {
                                            z--;
                                            return <>
                                              <div className="border-2 w-[30%]">
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
                                              <div className="ml-5 border-2 rounded-xl p-4 w-full text-center">
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
                                                   {i.activity.map((item) => {
                                        return (
                                          <>
                                            <div className="flex flex-col border-4 p-4 w-[40%] rounded-lg mb-5 items-center justify-center">
                                              {" "}
                                              {item.decription}{" "}
                                            </div>{" "}
                                          </>
                                        );
                                      })}

                                            </> : <>
                                            <div
                                      className="flex items-center w-[50%] justify-between rtl"
                                      key={i.id}
                                    >
                                      <div className="w-[40%] ml-2 flex border-2 font-Vazirmatn text-xl font-bold rounded-2xl h-32 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                        {" "}
                                        {i.organNam}{" "}
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
                                              </div>{" "}
                                            </>
                                          );
                                        })}{" "}
                                      </div>{" "}
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
          {conditionName.map((i) => {
            x = i.Processes.length;
            return i.Processes.map((i) => {
              x--;
              return (
                <>
                  {i.id == id ? (
                    <div
                      className="w-full  h-14 p-5  rounded-full bg-[#105251] text-white items-center flex justify-center text-center
                 
                  "
                    >
                      {i.processName}
                    </div>
                  ) : (
                  
                    <div
                      className="w-full h-14 p-5 rounded-full bg-[#F1F6F9] items-center flex justify-center
                    text-ls border-[#F1F6F9] text-gray-400
                      text-center "
                      >
                      {i.processName}
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
                                      i.title === "مداخله نرم " ? (
                                        <div className="flex flex-col">
                                          <div
                                            className="border-2 border-orange-500 p-4
                                   items-center justify-center
                                    text-center rounded-lg w-full"
                                          >
                                           {mass.organNam}
                                            </div>
                                            {z > 0?
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
                                                    }
                                        </div>
                                      ) : (
                                        <>
                                          {i.title == "منجر به آسیب" ||
                                          i.title == "مداخله قضائی" ? (
                                            <div className="flex flex-col">
                                              <div className="border-2 border-orange-500 p-4 items-center justify-center text-center rounded-lg w-full">
                                                {damage.organNam}
                                              </div>
                                              <div>
                                                {/* <AiOutlineArrowDown size={25} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} /> */}

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
                          ) : (
                       <>
                                    {item.actions.map((i) => {
                                      z = i.activity.length;
                                      return <>
                                        {i.organNam == "" ? <>
                                          {i.activity.map((item) => {
                                            z--;
                                            return <>
                                              <div className="border-2 w-[90%]">
                                                {item.decription}
                                          </div>
                                        {z>0 ?  <AiOutlineArrowDown/> :<></>}
                                            </>
                                        })}
                                        
                                        
                                        </> : <>
                                            {i.organNam.includes('||') ? <>
                                            <div className="flex items-center justify-between w-[90%]">
                                      
                                      {i.organNam
                                        .split("||")
                                        .map((item, index) => {
                                          return (
                                            <>
                                              <div className="ml-5 border-2 bg-[#105251] text-white h-24 text-center rounded-xl p-4 w-full text-center">
                                                {" "}
                                                {item}{" "}
                                              </div>{" "}
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
                                              {" "}
                                              {item.decription}{" "}
                                            </div>{" "}
                                          </>
                                        );
                                      })}

                                            </> : <>
                                            <div
                                      className="flex items-center w-[90%] justify-between rtl"
                                      key={i.id}
                                    >
                                      <div className="w-[90%] ml-2 flex border-2 font-Vazirmatn text-xl font-bold rounded-2xl h-32 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                        {" "}
                                        {i.organNam}{" "}
                                      </div>
                                      <div className="w-[90%] items-center justify-center">
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
                                              </div>{" "}
                                            </>
                                          );
                                        })}{" "}
                                      </div>{" "}
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
