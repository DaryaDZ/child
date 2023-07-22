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
      <div className="w-full  flex flex-col">
        <div className="flex justify-center items-center m-3">
          <GoLaw
            size={100}
            style={{
              borderRadius: "50%",
              padding: "20px",
              width: "50%",
              height: "50%",
              backgroundColor: "#FEFF86",
              color: "#1D267D",
            }}
          />
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
