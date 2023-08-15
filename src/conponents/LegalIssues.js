import React, { useState } from "react";
import { GoLaw } from "react-icons/go";
import list from "../db.js";
import { useParams } from "react-router-dom";
const LegalIssues = () => {
  let { id } = useParams();
  const Issues = list.find((i) => i.id == id);
  const [isopen, setIsopen] = useState(false);
  const [desc, setDesc] = useState("");
  const [legalId, setlegalId] = useState("");
  const handelClick = (itemid) => {
    const desc = Issues.legalIssues.find((i) => i.id == itemid);
    setIsopen(!isopen);
    setDesc(desc.description);
    setlegalId(desc.id);
  };
  // console.log(Issues);
  return (
    <>
        <div className="hidden md:flex w-full mt-24 items-center justify-center p-10 rtl">
        
        <div className='w-[80%]  items-center flex justify-between'>
          <div className='w-full  items-center flex flex-col justify-center'>
            <div className='flex items-center'>
           
          <div className="flex justify-center items-center m-3">
          <GoLaw
            size={100}
            style={{
              borderRadius: "50%",
              padding: "20px",
              width: "70%",
              height: "70%",
              backgroundColor: "#FEFF86",
              color: "#105251",
            }}
          />
              </div>
              <p className="text-[#105251] font-Vazirmatn text-2xl">مستندات قانونی</p>
          </div>
          <div className=" w-[90%]  flex-col justify-center grid grid-row-1 gap-4 items-center font-Vazirmatn text-2xl m-4">
          {Issues.legalIssues.map((i) => {
            return (
              <>
                <button onClick={() => handelClick(i.id)} key={i.id}>
                  {legalId == i.id && isopen ? (
                    <>
                      {i.subDescription  ? (
                        <p className="w-full text-justify bg-[#e0e5e7] rounded-2xl p-5  text-[#105251] ">
                          {i.description}
                          {i.subDescription.map((item) => {
                            return (
                              <p className="font-bold text-base">
                                {item.Subtitle}
                              </p>
                            );
                          })}
                          <p className="text-base">{i.proviso}</p>
                        </p>
                      ) : (
                        <p className="w-full text-justify bg-[#e0e5e7] rounded-2xl p-5 text-[#105251] ">
                          {i.description}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="w-full text-justify bg-[#e0e5e7] rounded-2xl p-5 text-[#105251] ">
                      {i.description.substring(0, 100)}
                    </p>
                  )}
                </button>
              </>
            );
          })}
        </div>

          </div>
          <div className='w-full '>
          {  Issues.video !=="" ?<><video
              class="w-full"
              src={Issues.video}
              muted
              autoPlay
              loop
            
            ></video></>:<></>}
          
          </div>

</div>



    </div>
      <div className="md:hidden w-full h-screen flex flex-col items-center justify-center rtl">
        <div className="flex justify-center items-center m-3">
          {/* <GoLaw
            size={100}
            style={{
              borderRadius: "50%",
              padding: "20px",
              width: "50%",
              height: "50%",
              backgroundColor: "#FEFF86",
              color: "#1D267D",
            }}
          /> */}
            {/* <div className='w-full '> */}
          {  Issues.video !=="" ?<><video
              class="w-full"
              src={Issues.video}
              muted
              autoPlay
              loop
            
            ></video></>:<></>}
        </div>
        <div className=" w-[90%] flex justify-center items-center font-bold text-xl m-4">
          <p className="text-[#1D267D]">مستندات قانونی</p>
        </div>
        <div className=" w-[90%]  flex-col justify-center grid grid-row-1 gap-4 items-center text-lg m-4">
          {Issues.legalIssues.map((i) => {
            return (
              <>
                <button onClick={() => handelClick(i.id)} key={i.id}>
                  {legalId == i.id && isopen ? (
                    <>
                      {i.subDescription  ? (
                        <p className="w-full text-justify bg-[#BDCDD6] rounded-2xl p-5 text-[#1D267D] ">
                          {i.description}
                          {i.subDescription.map((item) => {
                            return (
                              <p className="font-bold text-base">
                                {item.Subtitle}
                              </p>
                            );
                          })}
                          <p className="text-base">{i.proviso}</p>
                        </p>
                      ) : (
                        <p className="w-full text-justify bg-[#BDCDD6] rounded-2xl p-5 text-[#1D267D] ">
                          {i.description}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="w-full text-justify bg-[#BDCDD6] rounded-2xl p-5 text-[#1D267D] ">
                      {i.description.substring(0, 100)}
                    </p>
                  )}
                </button>
              </>
            );
          })}
          
        </div>
        
      </div>
    </>
  );
};

export default LegalIssues;
