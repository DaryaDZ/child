import React from "react";
import list from "../db.js";
import { useParams } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiCornerLeftDown,
  FiCornerRightDown,
} from "react-icons/fi";
const Process = () => {
  const { id } = useParams();
  const conditionName = list.find((i) =>
    i.Processes.find((item) => item.id == id)
  );
  const process = conditionName.Processes.find((i) => i.id == id);
  // console.log(process)
  let x = process.specific.length;
  let y;
  let z;
  // let s=process.actions.length
  return (
    <>
      <div className="flex flex-col w-full mt-28  items-center justify-center text-[#1D267D]  mb-72">
        <section className="font-bold text-xl m-5  flex flex-col">
          {process.processName}
        </section>
        {process.specific.length == 0 ? (
          <>
            {process.general ? (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-full ">
                    <div className="border-2 p-5 rounded-xl rtl ml-8">
                      شناسایی عام
                    </div>
                    <BsArrowReturnRight size={40} />
                  </div>
                  <div className="flex items-center justify-center w-full ">
                    <BsArrowReturnLeft size={40} />
                    <div className=" border-2 p-5 rounded-xl mr-8">
                      شناسایی خاص
                    </div>
                  </div>
                </div>
                <div className="w-[100%]  items-center justify-between flex ">
                  <div className="flex items-ceneter justify-center w-[40%]   ">
                    <FiArrowDownRight size={40} />
                    <FiArrowDownLeft size={40} />
                  </div>

                  <div className="ml-20">
                    {" "}
                    <AiOutlineArrowDown size={40} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-[100%] flex items-center justify-center flex-col ">
                    <div className="w-[100%]  items-center justify-between flex flex-row  ">
                      <div className="w-full border-2 rounded-xl p-4 text-center">
                        {" "}
                        وظیفه همه شهروندان
                      </div>
                      <div className="w-full  border-2 rounded-xl p-4 text-center mr-5">
                        <p className="text-center ">وظیفه همه دستگاهها</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center ">
                    {process.specific.length !== 0 ? (
                      process.specific.map((i) => {
                        x--;
                        return (
                          <>
                            <div className="flex items-center justify-center w-full">
                              <div className=" w-[90%] text-white  flex justify-between ">
                                <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
                                  {i.organNam}{" "}
                                </div>
                                <div className="flex items-center justify-center">
                                  {i.organAction == "" ? (
                                    <></>
                                  ) : (
                                    <AiOutlineArrowLeft
                                      size={25}
                                      style={{ color: "#000" }}
                                    />
                                  )}
                                </div>

                                <div className=" text-black  text-sm w-full text-justify">
                                  {i.organAction}
                                </div>
                              </div>
                            </div>
                            {x == 0 ? (
                              ""
                            ) : (
                              <div className=" w-[90%]  rtl">
                                <AiOutlineArrowDown
                                  size={25}
                                  style={{ color: "#000", direction: "" }}
                                />
                              </div>
                            )}
                          </>
                        );
                      })
                    ) : (
                      <>
                        <div className="flex items-center justify-between  ">
                          <div className="flex items-center justify-center w-full ">
                            {process.actions.map((i) => {
                              z = i.activity.length;
                              return (
                                <>
                                  {i.organNam !== "" ? (
                                    <div
                                      className="flex items-center w-full justify-between"
                                      key={i.id}
                                    >
                                      <div className="w-[40%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                        {i.organNam}
                                      </div>

                                      <div className="w-[60%] items-center justify-center">
                                        {i.activity.map((item, index) => {
                                          item.decription
                                            ? (y = i.activity.length)
                                            : (y = 0);
                                          return (
                                            <>
                                              <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                  {" "}
                                                  {y == 0 ? (
                                                    ""
                                                  ) : (
                                                    <AiOutlineArrowLeft
                                                      size={20}
                                                      style={{
                                                        color: "#1D5D9B",
                                                      }}
                                                    />
                                                  )}
                                                </div>
                                                <div
                                                  className="w-full  p-1 items-center justify-center flex text-center"
                                                  key={index}
                                                >
                                                  {item.decription}
                                                </div>
                                              </div>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-full flex flex-col items-center">
                                      {i.activity.map((item) => {
                                        z--;
                                        return (
                                          <>
                                            <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                                              {item.decription}
                                            </div>
                                            {z == 0 ? (
                                              ""
                                            ) : (
                                              <AiOutlineArrowDown
                                                style={{ color: "#1D5D9B" }}
                                                size={25}
                                              />
                                            )}
                                          </>
                                        );
                                      })}
                                    </div>
                                  )}
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                {process.specific.length !== 0
                  ? process.specific.map((i) => {
                      x--;
                      return (
                        <>
                          <div className="flex items-center justify-center w-full">
                            <div className=" w-[90%] text-white  flex justify-between ">
                              {i.organNam !== "" ? (
                                <>
                                  <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
                                    {i.organNam}{" "}
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <AiOutlineArrowLeft
                                      size={25}
                                      style={{ color: "#000" }}
                                    />
                                  </div>
                                  <div className=" text-black  text-sm w-full text-justify">
                                    {i.organAction}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className=" text-black  text-sm w-full text-justify">
                                    {i.organAction}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          {x == 0 ? (
                            ""
                          ) : (
                            <div className=" w-[30%] flex justify-center rtl ">
                              <AiOutlineArrowDown
                                size={25}
                                style={{ color: "#000", direction: "" }}
                              />
                            </div>
                          )}
                        </>
                      );
                    })
                  : process.actions.map((i) => {
                      z = i.activity.length;
                      return (
                        <>
                          {i.organNam !== "" ? (
                            <div
                              className="flex items-center w-full justify-between"
                              key={i.id}
                            >
                              <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                {i.organNam}
                              </div>

                              <div className="w-[50%] items-center justify-center">
                                {i.activity.map((item, index) => {
                                  item.decription
                                    ? (y = i.activity.length)
                                    : (y = 0);
                                  return (
                                    <>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center">
                                          {" "}
                                          {y == 0 ? (
                                            ""
                                          ) : (
                                            <AiOutlineArrowLeft
                                              size={20}
                                              style={{ color: "#1D5D9B" }}
                                            />
                                          )}
                                        </div>
                                        <div
                                          className="w-full  p-1 items-center justify-center flex text-center"
                                          key={index}
                                        >
                                          {item.decription}
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <div className="w-full flex flex-col items-center">
                              {i.activity.map((item) => {
                                z--;
                                return (
                                  <>
                                    <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                                      {item.decription}
                                    </div>
                                    {z == 0 ? (
                                      ""
                                    ) : (
                                      <AiOutlineArrowDown
                                        style={{ color: "#1D5D9B" }}
                                        size={25}
                                      />
                                    )}
                                  </>
                                );
                              })}
                            </div>
                          )}
                        </>
                      );
                    })}
              </>
            )}

            {/* {process.actions.map((i) => {
              z = i.activity.length;
              s--;
              return (
                <>
                  {i.organNam !== "" ? (
                    <>
                      <div
                        className="flex items-center w-full justify-between"
                        key={i.id}
                      >
                        <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-32 border-orange-400 mb-3 items-center justify-center text-center">
                          {i.organNam}
                        </div>
                     
                      <div className="w-[50%] items-center justify-center">
                        {i.activity.map((item, index) => {
                          item.decription ? (y = i.activity.length) : (y = 0);
                          return (
                            <>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center">
                                  {y == 0 ? (
                                    <></>
                                  ) : (
                                    <>
                                      <AiOutlineArrowLeft
                                        size={20}
                                        style={{ color: "#1D5D9B" }}
                                      />
                                    </>
                                  )}
                                </div>
                                <div
                                  className="w-full  p-1 items-center justify-center flex text-center"
                                  key={index}
                                >
                                  {item.decription}
                                </div>
                              </div>
                            </>
                          );
                        })}
                        </div>
                      </div>
                      {s==0 ? <></>:<div className="rtl w-[60%]"> <AiOutlineArrowDown size={25}/></div>}
                    </>
                  ) : (
                    <>
                      <div className="w-full flex flex-col items-center">
                        {i.activity.map((item) => {
                          z--;
                          return (
                            <>
                              <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                                {item.decription}
                              </div>
                              {z == 0 ? (
                                <></>
                              ) : (
                                <>
                                  <AiOutlineArrowDown
                                    style={{ color: "#1D5D9B" }}
                                    size={25}
                                  />
                                </>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </>
                  )}
                </>
              );
            })} */}
          </>
        ) : (
          <>
            {process.processName !== "بررسی و تحلیل" ? (
              <div className="w-full ">
                {process.general ? (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center w-full ">
                        <div className="border-2 p-5 rounded-xl rtl ml-8">
                          شناسایی عام
                        </div>
                        <BsArrowReturnRight size={40} />
                      </div>
                      <div className="flex items-center justify-center w-full ">
                        <BsArrowReturnLeft size={40} />
                        <div className=" border-2 p-5 rounded-xl mr-8">
                          شناسایی خاص
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%]  items-center justify-between flex ">
                      <div className="flex items-ceneter justify-center w-[40%]   ">
                        <FiArrowDownRight size={40} />
                        <FiArrowDownLeft size={40} />
                      </div>

                      <div className="ml-20">
                        {" "}
                        <AiOutlineArrowDown size={40} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-[100%] flex items-center justify-center flex-col mb-[100%]">
                        <div className="w-[100%] items-center justify-between flex flex-row  ">
                          <div className="w-full border-2 rounded-xl p-4 text-center">
                            {" "}
                            وظیفه همه شهروندان
                          </div>
                          <div className="w-full  border-2 rounded-xl p-4 text-center mr-5">
                            <p className="text-center ">وظیفه همه دستگاهها</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center w-[100%] mb-[0%]">
                        {process.specific.length !== 0 ? (
                          process.specific.map((i) => {
                            x--;
                            return (
                              <>
                                <div className="flex items-center justify-center w-full">
                                  <div className=" w-[90%] text-white  flex justify-between ">
                                    <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
                                      {i.organNam}{" "}
                                    </div>
                                    <div className="flex items-center justify-center">
                                      {i.organAction == "" ? (
                                        <></>
                                      ) : (
                                        <AiOutlineArrowLeft
                                          size={25}
                                          style={{ color: "#000" }}
                                        />
                                      )}
                                    </div>

                                    <div className=" text-black  text-sm w-full text-justify">
                                      {i.organAction}
                                    </div>
                                  </div>
                                </div>
                                {x == 0 ? (
                                  ""
                                ) : (
                                  <div className=" w-[90%]  rtl">
                                    <AiOutlineArrowDown
                                      size={25}
                                      style={{ color: "#000", direction: "" }}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })
                        ) : (
                          <>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center justify-center border-2 "></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {process.specific.length !== 0
                      ? process.specific.map((i) => {
                          x--;
                          return (
                            <>
                              <div className="flex items-center justify-center w-full">
                                <div className=" w-[90%] text-white  flex justify-between ">
                                  {i.organNam !== "" ? (
                                    <>
                                      <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
                                        {i.organNam}{" "}
                                      </div>
                                      <div className="flex items-center justify-center">
                                        <AiOutlineArrowLeft
                                          size={25}
                                          style={{ color: "#000" }}
                                        />
                                      </div>
                                      <div className=" text-black  text-sm w-full text-justify">
                                        {i.organAction}
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className=" text-black  text-sm w-full text-justify">
                                        {i.organAction}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                              {x == 0 ? (
                                ""
                              ) : (
                                <div className=" w-[30%] flex justify-center rtl ">
                                  <AiOutlineArrowDown
                                    size={25}
                                    style={{ color: "#000", direction: "" }}
                                  />
                                </div>
                              )}
                            </>
                          );
                        })
                      : process.actions.map((i) => {
                          z = i.activity.length;
                          return (
                            <>
                              {i.organNam !== "" ? (
                                <div
                                  className="flex items-center w-full justify-between"
                                  key={i.id}
                                >
                                  <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                                    {i.organNam}
                                  </div>

                                  <div className="w-[50%] items-center justify-center">
                                    {i.activity.map((item, index) => {
                                      item.decription
                                        ? (y = i.activity.length)
                                        : (y = 0);
                                      return (
                                        <>
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center justify-center">
                                              {" "}
                                              {y == 0 ? (
                                                ""
                                              ) : (
                                                <AiOutlineArrowLeft
                                                  size={20}
                                                  style={{ color: "#1D5D9B" }}
                                                />
                                              )}
                                            </div>
                                            <div
                                              className="w-full  p-1 items-center justify-center flex text-center"
                                              key={index}
                                            >
                                              {item.decription}
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </div>
                              ) : (
                                <div className="w-full flex flex-col items-center">
                                  {i.activity.map((item) => {
                                    z--;
                                    return (
                                      <>
                                        <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                                          {item.decription}
                                        </div>
                                        {z == 0 ? (
                                          ""
                                        ) : (
                                          <AiOutlineArrowDown
                                            style={{ color: "#1D5D9B" }}
                                            size={25}
                                          />
                                        )}
                                      </>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          );
                        })}
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="w-full items-center flex justify-between flex-col">
                  <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">
                    خبر
                  </div>
                  <div>
                    <AiOutlineArrowDown size={30} />
                  </div>
                  <div className="flex items-centet justify-between w-full">
                    <div className="items-center  flex   w-[50%]">
                      <div className="flex mt-6 w-full ltr">
                        {" "}
                        <FiCornerRightDown
                          size={40}
                          style={{ direction: "ltr" }}
                        />
                      </div>
                      <div className="items-center flex justify-center text-xl ">
                        خیر
                      </div>
                    </div>
                    <div className="border-2 rounded-xl p-6 border-blue-400 text-xl text-center">
                      {" "}
                      آیا خبر صحت دارد؟
                    </div>
                    <div className="items-center flex justify-between w-[50%]">
                      <div className="items-center flex justify-center text-xl ">
                        بله
                      </div>
                      {/* <div className="items-center flex w-full mt-6 rtl">
                      <FiCornerLeftDown size={40} style={{direction:"rtl"}} />
                   
                      </div> */}
                      <div className="flex mt-6 w-full rtl">
                        {" "}
                        <FiCornerLeftDown
                          size={40}
                          style={{ direction: "rtl" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex w-full items-center flex justify-between p-2">
                    <div className=" w-[50%] items-center justify-center flex ">
                      <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
                        صورتجلسه توسط مددکاران بهزیستی
                      </div>
                    </div>
                    <div className=" w-[50%] items-center justify-center flex flex-col ">
                      <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">
                        علل شناسی
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] items-center justify-between flex rtl">
                    <div className="flex items-center justify-center rtl">
                      <AiOutlineArrowDown size={25} />
                    </div>
                    <div className="flex items-center justify-center rtl">
                      <AiOutlineArrowDown size={25} />
                    </div>
                  </div>

                  <div className="flex  items-center justify-between w-[100%] ">
                    <div className="w-[50%] items-center justify-center flex ml-4 ">
                      <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
                        اطلاع به مافوق
                      </div>
                    </div>
                    <div className=" w-[50%]">
                      {process.specific.map((i) => {
                        x--;
                        return (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
                                {i.organNam}
                              </div>
                              <div>
                                <AiOutlineArrowLeft size={25} />
                              </div>
                              <div className="w-full">{i.organAction}</div>
                            </div>
                            {x == 0 ? (
                              ""
                            ) : (
                              <AiOutlineArrowDown
                                size={25}
                                style={{ marginRight: "20" }}
                              />
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {
          //           process.processName !== "بررسی و تحلیل" ?
          //         <div className="w-full ">
          //           {process.general ? (
          //             <>
          //               <div className="flex items-center justify-between">
          //                 <div className="flex items-center justify-center w-full ">
          //                   <div className="border-2 p-5 rounded-xl rtl ml-8">
          //                     شناسایی عام
          //                   </div>
          //                   <BsArrowReturnRight size={40} />
          //                 </div>
          //                 <div className="flex items-center justify-center w-full ">
          //                   <BsArrowReturnLeft size={40} />
          //                   <div className=" border-2 p-5 rounded-xl mr-8">
          //                     شناسایی خاص
          //                   </div>
          //                 </div>
          //               </div>
          //               <div className="w-[100%]  items-center justify-between flex ">
          //                 <div className="flex items-ceneter justify-center w-[40%]   ">
          //                   <FiArrowDownRight size={40} />
          //                   <FiArrowDownLeft size={40} />
          //                 </div>
          //                 <div className="ml-20">
          //                   {" "}
          //                   <AiOutlineArrowDown size={40} />
          //                 </div>
          //               </div>
          //               <div className="flex items-center justify-between">
          //                 <div className="w-[50%] flex items-center justify-center flex-col mb-[100%]">
          //                   <div className="w-[35%] ml-44 items-center justify-between flex flex-row  ">
          //                     <div className="w-full border-2 rounded-xl p-4 text-center">
          //                       {" "}
          //                       وظیفه همه شهروندان
          //                     </div>
          //                     <div className="w-full  border-2 rounded-xl p-4 text-center mr-5">
          //                       <p className="text-center ">وظیفه همه دستگاهها</p>
          //                     </div>
          //                   </div>
          //                 </div>
          //                 <div className="flex flex-col items-center justify-center w-[50%] mb-[0%]">
          //                   {process.specific.length !== 0 ? (
          //                     process.specific.map((i) => {
          //                       x--;
          //                       return (
          //                         <>
          //                           <div className="flex items-center justify-center w-full">
          //                             <div className=" w-[90%] text-white  flex justify-between ">
          //                               <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center w-52 h-22">
          //                                 {i.organNam}{" "}
          //                               </div>
          //                               <div className="flex items-center justify-center">
          //                                 {i.organAction == "" ? (
          //                                   <></>
          //                                 ) : (
          //                                   <AiOutlineArrowLeft
          //                                     size={25}
          //                                     style={{ color: "#000" }}
          //                                   />
          //                                 )}
          //                               </div>
          //                               <div className=" text-black  text-sm w-full text-justify">
          //                                 {i.organAction}
          //                               </div>
          //                             </div>
          //                           </div>
          //                           {x == 0 ? (
          //                             ""
          //                           ) : (
          //                             <div className=" w-[90%]  rtl">
          //                               <AiOutlineArrowDown
          //                                 size={25}
          //                                 style={{ color: "#000", direction: "" }}
          //                               />
          //                             </div>
          //                           )}
          //                         </>
          //                       );
          //                     })
          //                   ) : (
          //                     <>
          //                       <div className="flex items-center justify-between">
          //                         <div className="flex items-center justify-center border-2 "></div>
          //                       </div>
          //                     </>
          //                   )}
          //                 </div>
          //               </div>
          //             </>
          //           ) : (
          //             <>
          //               {process.specific.length !== 0
          //                 ? process.specific.map((i) => {
          //                     x--;
          //                     return (
          //                       <>
          //                         <div className="flex items-center justify-center w-full">
          //                           <div className=" w-[90%] text-white  flex justify-between ">
          //                             <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
          //                               {i.organNam}{" "}
          //                             </div>
          //                             <div className="flex items-center justify-center">
          //                               <AiOutlineArrowLeft
          //                                 size={25}
          //                                 style={{ color: "#000" }}
          //                               />
          //                             </div>
          //                             <div className=" text-black  text-sm w-full text-justify">
          //                               {i.organAction}
          //                             </div>
          //                           </div>
          //                         </div>
          //                         {x == 0 ? (
          //                           ""
          //                         ) : (
          //                           <div className=" w-[30%] flex justify-center rtl ">
          //                             <AiOutlineArrowDown
          //                               size={25}
          //                               style={{ color: "#000", direction: "" }}
          //                             />
          //                           </div>
          //                         )}
          //                       </>
          //                     );
          //                   })
          //                 : process.actions.map((i) => {
          //                     z = i.activity.length;
          //                     return (
          //                       <>
          //                         {i.organNam !== "" ? (
          //                           <div
          //                             className="flex items-center w-full justify-between"
          //                             key={i.id}
          //                           >
          //                             <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
          //                               {i.organNam}
          //                             </div>
          //                             <div className="w-[50%] items-center justify-center">
          //                               {i.activity.map((item, index) => {
          //                                 item.decription
          //                                   ? (y = i.activity.length)
          //                                   : (y = 0);
          //                                 return (
          //                                   <>
          //                                     <div className="flex items-center justify-between">
          //                                       <div className="flex items-center justify-center">
          //                                         {" "}
          //                                         {y == 0 ? (
          //                                           ""
          //                                         ) : (
          //                                           <AiOutlineArrowLeft
          //                                             size={20}
          //                                             style={{ color: "#1D5D9B" }}
          //                                           />
          //                                         )}
          //                                       </div>
          //                                       <div
          //                                         className="w-full  p-1 items-center justify-center flex text-center"
          //                                         key={index}
          //                                       >
          //                                         {item.decription}
          //                                       </div>
          //                                     </div>
          //                                   </>
          //                                 );
          //                               })}
          //                             </div>
          //                           </div>
          //                         ) : (
          //                           <div className="w-full flex flex-col items-center">
          //                             {i.activity.map((item) => {
          //                               z--;
          //                               return (
          //                                 <>
          //                                   <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
          //                                     {item.decription}
          //                                   </div>
          //                                   {z == 0 ? (
          //                                     ""
          //                                   ) : (
          //                                     <AiOutlineArrowDown
          //                                       style={{ color: "#1D5D9B" }}
          //                                       size={25}
          //                                     />
          //                                   )}
          //                                 </>
          //                               );
          //                             })}
          //                           </div>
          //                         )}
          //                       </>
          //                     );
          //                   })}
          //             </>
          //           )}
          //           </div>
          //           : <>
          //             <div className="w-full items-center flex justify-between flex-col">
          //               <div className="bg-blue-400 rounded-full p-8 text-white text-center text-xl">خبر</div>
          //               <div><AiOutlineArrowDown size={30} /></div>
          //               <div className="flex items-centet justify-between w-full">
          //                 <div className="items-center  flex   w-[50%]">
          //                <div className="flex mt-6 w-full ltr"> <FiCornerRightDown size={40} style={{direction:"ltr"}}/></div>
          //                <div className="items-center flex justify-center text-xl ">خیر</div>
          //                 </div>
          //                 <div className="border-2 rounded-xl p-6 border-blue-400 text-xl text-center">  آیا خبر صحت دارد؟</div>
          //                 <div className="items-center flex justify-between w-[50%]">
          //                 <div className="items-center flex justify-center text-xl ">بله</div>
          //                   {/* <div className="items-center flex w-full mt-6 rtl">
          //                   <FiCornerLeftDown size={40} style={{direction:"rtl"}} />
          //                   </div> */}
          //                   <div className="flex mt-6 w-full rtl"> <FiCornerLeftDown size={40} style={{direction:"rtl"}}/></div>
          //                 </div>
          //               </div>
          //               <div className=" flex w-full items-center flex justify-between p-2">
          //                 <div className=" w-[50%] items-center justify-center flex ">
          //                   <div className="border-2 rounded-xl  p-2 text-center border-red-400 ">
          //                    صورتجلسه توسط مددکاران  بهزیستی
          //                   </div>
          //                 </div>
          //                 <div className=" w-[50%] items-center justify-center flex flex-col ">
          //                  <div className="border-2 rounded-xl p-2 text-center border-green-400 w-[90%] h-16 items-center justify-center flex">علل شناسی</div>
          //                 </div>
          //               </div>
          //               <div className="w-[50%] items-center justify-between flex rtl">
          //                 <div className="flex items-center justify-center rtl">
          //                 <AiOutlineArrowDown size={25}/>
          //                 </div>
          //                 <div className="flex items-center justify-center rtl">
          //                 <AiOutlineArrowDown size={25}/>
          //                 </div>
          //               </div>
          //               <div className="flex  items-center justify-between w-[100%] ">
          //                 <div className="w-[50%] items-center justify-center flex ml-4 " >
          //                   <div className="border-2 rounded-xl  border-red-400 p-4 w-full text-center ">
          //                   اطلاع به مافوق
          //                   </div>
          //               </div>
          //                 <div className=" w-[50%]">
          //                   {
          //                     process.specific.map((i) => {
          //                       x--;
          //                       return <>
          //                         <div className="flex items-center justify-between w-full">
          //                           <div className="w-full border-2 rounded-xl border-green-400 p-4 items-center flex justify-center text-center">
          //                           {i.organNam}
          //                           </div>
          //                           <div><AiOutlineArrowLeft size={25} /></div>
          //                           <div className="w-full">{i.organAction}</div>
          //                       </div>
          //                       {x==0 ? "":<AiOutlineArrowDown size={25} style={{marginRight:"20"}}/>}
          //                       </>
          //                     })
          //                   }
          // </div>
          //            </div>
          //               <div className="w-[50%] items-center justify-between flex rtl">
          //                 <div className="flex items-center justify-center rtl">
          //                 <AiOutlineArrowDown size={25}/>
          //                 </div>
          //               </div>
          //               <div className="border-2 border-xl mt-4 p-4 text-center ml-60">
          //                  پایان
          //               </div>
          //           </div>
          //           </>
        }
        {/* {
          process.general ? <>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center border-2 ">
                
              </div>
              <div>
                
              {
          
          process.specific.length !== 0
          ? process.specific.map((i) => {
              x--;
              return (
                <>
                  <div className="flex items-center justify-center w-full">
                    <div className=" w-[90%] text-white  flex justify-between ">
                      <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
                        {i.organNam}{" "}
                      </div>
                      <div className="flex items-center justify-center">
                        <AiOutlineArrowLeft
                          size={25}
                          style={{ color: "#000" }}
                        />
                      </div>
                      <div className=" text-black  text-sm w-full text-justify">
                        {i.organAction}
                      </div>
                    </div>
                  </div>
                  {x == 0 ? (
                    ""
                  ) : (
                    <div className=" w-[90%]  rtl">
                      <AiOutlineArrowDown
                        size={25}
                        style={{ color: "#000", direction: "" }}
                      />
                    </div>
                  )}
                </>
              );
            })
          : process.actions.map((i) => {
              z = i.activity.length;
              return (
                <>
                  {i.organNam !== "" ? (
                    <div
                      className="flex items-center w-full justify-between"
                      key={i.id}
                    >
                      <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                        {i.organNam}
                      </div>

                      <div className="w-[50%] items-center justify-center">
                        {i.activity.map((item, index) => {
                          item.decription ? (y = i.activity.length) : (y = 0);
                          return (
                            <>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center">
                                  {" "}
                                  {y == 0 ? (
                                    ""
                                  ) : (
                                    <AiOutlineArrowLeft
                                      size={20}
                                      style={{ color: "#1D5D9B" }}
                                    />
                                  )}
                                </div>
                                <div
                                  className="w-full  p-1 items-center justify-center flex text-center"
                                  key={index}
                                >
                                  {item.decription}
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      {i.activity.map((item) => {
                        z--;
                        return (
                          <>
                            <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                              {item.decription}
                            </div>
                            {z == 0 ? (
                              ""
                            ) : (
                              <AiOutlineArrowDown
                                style={{ color: "#1D5D9B" }}
                                size={25}
                              />
                            )}
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              );
          })
        }
</div>





          </div>
          
          
          </> : <>
          
            
          {
          
          process.specific.length !== 0
          ? process.specific.map((i) => {
              x--;
              return (
                <>
                  <div className="flex items-center justify-center w-full">
                    <div className=" w-[90%] text-white  flex justify-between ">
                      <div className=" bg-[#87CBB9] p-2 text-center rounded-xl text-[#1D267D] items-center flex justify-center">
                        {i.organNam}{" "}
                      </div>
                      <div className="flex items-center justify-center">
                        <AiOutlineArrowLeft
                          size={25}
                          style={{ color: "#000" }}
                        />
                      </div>
                      <div className=" text-black  text-sm w-full text-justify">
                        {i.organAction}
                      </div>
                    </div>
                  </div>
                  {x == 0 ? (
                    ""
                  ) : (
                    <div className=" w-[90%]  rtl">
                      <AiOutlineArrowDown
                        size={25}
                        style={{ color: "#000", direction: "" }}
                      />
                    </div>
                  )}
                </>
              );
            })
          : process.actions.map((i) => {
              z = i.activity.length;
              return (
                <>
                  {i.organNam !== "" ? (
                    <div
                      className="flex items-center w-full justify-between"
                      key={i.id}
                    >
                      <div className="w-[50%] ml-2 flex border-2 rounded-2xl h-44 border-orange-400 p-4 mb-3 items-center justify-center text-center">
                        {i.organNam}
                      </div>

                      <div className="w-[50%] items-center justify-center">
                        {i.activity.map((item, index) => {
                          item.decription ? (y = i.activity.length) : (y = 0);
                          return (
                            <>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center">
                                  {" "}
                                  {y == 0 ? (
                                    ""
                                  ) : (
                                    <AiOutlineArrowLeft
                                      size={20}
                                      style={{ color: "#1D5D9B" }}
                                    />
                                  )}
                                </div>
                                <div
                                  className="w-full  p-1 items-center justify-center flex text-center"
                                  key={index}
                                >
                                  {item.decription}
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      {i.activity.map((item) => {
                        z--;
                        return (
                          <>
                            <div className="text-center w-full p-3 border-2 rounded-2xl border-orange-400">
                              {item.decription}
                            </div>
                            {z == 0 ? (
                              ""
                            ) : (
                              <AiOutlineArrowDown
                                style={{ color: "#1D5D9B" }}
                                size={25}
                              />
                            )}
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              );
          })
        }
            
            </>
        } */}
        {/* {process.orgnization.map((i) => {
          x--;
          return <>
            <div className='flex items-center justify-center w-full'>
            <div className=' w-[90%] text-white  flex justify-between '>
        
        <div className=' bg-[#87CBB9] text-[#1D267D] items-center flex justify-center'>
{i.organNam}        </div>
        <div className='flex items-center justify-center'>
          <AiOutlineArrowLeft size={25} style={{color:"#000"}}/>
        </div>
        <div className=' text-black  text-sm w-full text-justify'>
         {i.organAction}
          
        </div>
        
            </div>
                </div>
            {
              x==0 ?"" : <div className=' w-[90%]  rtl'>
              <AiOutlineArrowDown size={25}  style={{color:"#000",direction:""}}/>
              </div> 
            }
            
          </>
})} */}
      </div>
    </>
  );
};

export default Process;
