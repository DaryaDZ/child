import React from "react";
import { Link, useParams } from "react-router-dom";
import list from "../db.js";
import education from "../Images/Education.png";
const ProcessesNew = () => {
  let { id } = useParams();
  const conditionName = list.find((i) => {
    return i.id == id;
  });
  const spescialProcessName = conditionName.Processes.filter((i) => {
    return i.processName == "مشارکت خانواده";
  });
  console.log();
  let x = conditionName.Processes.length;
  // console.log(conditionName)
  return (
    <>
      <div className="md:flex hidden flex-col w-full">

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
                    {spescialProcessName.map((item) => {
                      return (
                        <>
                          <div className="" key={item.id}>
                            <Link
                              to={`/conditions/process/${item.id}`}
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
                        </>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
          <hr />
        </div>





      </div>

      {/* Mobile screen */}
      <div className="md:hidden flex flex-col w-full">
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
                      to={`/manipage/conditions/process/${item.id}`}
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
                        to={`/manipage/conditions/process/${item.id}`}
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
                    {spescialProcessName.map((item) => {
                      return (
                        <>
                          <div className="" key={item.id}>
                            <Link
                              to={`/manipage/conditions/process/${item.id}`}
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
                        </>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProcessesNew;
