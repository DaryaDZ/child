import React, { useState } from "react";
import { definitions } from "../db";
import { BiSolidLeftArrow, BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Definitions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [itemFounded, setItemFounded] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [id, setID] = useState("");
  const handelClick = (itemId) => {
    const item = definitions.find((i) => i.id == itemId);
    // console.log(item.Idioms)
    setIsOpen(true);
    setItemFounded(item.Idioms);
    setID(item.id);
  };
  const ShowDesc = (itemId) => {
    const item = itemFounded.find((i) => i.id == itemId);
    console.log(item);
    setOpenItem(true);
    setSelectedItem(item.id);
  };
  return (
    <>
<div className="hidden md:flex w-full p-10 rtl flex-col flex items-center justify-center">
<div className=" w-[90%] mr-2 p-2 flex items-center justify-between rounded-xl ">
          {definitions.map((item) => {
            return (
              <>
                {item.id == id && isOpen ? (
                  <div
                    className="bg-[#105251] p-2 w-[45%] 
                  items-center text-center justify-center flex
                   rounded-xl text-white "
                    onClick={() => handelClick(item.id)}
                  >
                    {item.name}
                  </div>
                ) : (
                  <div
                    className="bg-gray-300 p-2 w-[45%] 
               items-center text-center justify-center flex
                rounded-xl "
                    onClick={() => handelClick(item.id)}
                  >
                    {item.name}
                  </div>
                )}
              </>
            );
          })}
          
        </div>
       
        <hr className="hr" />
        <div className="w-[70%]">
        {isOpen && (
          <>
            {itemFounded.map((i) => {
              return (
                <>
                  <div
                    className=" flex flex-col w-full"
                    onClick={() => ShowDesc(i.id)}
                  >
                    <div className="flex items-center border-4  items-center bg-gray-100 mt-2 p-2">
                      {selectedItem == i.id && openItem ? (
                        <BiSolidDownArrow />
                      ) : (
                        <BiSolidLeftArrow />
                      )}
                      {i.idiomsName}
                    </div>

                    <div>
                      {selectedItem == i.id && openItem ? (
                        <p className="border-4 border-gray-100 items-center p-2 flex text-justify">
                          {i.idiomsDescription}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
        </div>

      </div>
      
      <div className="md:hidden flex flex-col rtl">
        <div className=" w-[95%] mr-2 p-2 flex items-center justify-between rounded-xl ">
          {definitions.map((item) => {
            return (
              <>
                {item.id == id && isOpen ? (
                  <div
                    className="bg-blue-500 p-2 w-[45%] 
                  items-center text-center justify-center flex
                   rounded-xl text-white "
                    onClick={() => handelClick(item.id)}
                  >
                    {item.name}
                  </div>
                ) : (
                  <div
                    className="bg-blue-300 p-2 w-[45%] 
               items-center text-center justify-center flex
                rounded-xl "
                    onClick={() => handelClick(item.id)}
                  >
                    {item.name}
                  </div>
                )}
              </>
            );
          })}
        </div>
        <hr className="hr" />
        {isOpen && (
          <>
            {itemFounded.map((i) => {
              return (
                <>
                  <div
                    className=" flex flex-col"
                    onClick={() => ShowDesc(i.id)}
                  >
                    <div className="flex items-center border-4  items-center bg-gray-300 mt-2 p-2">
                      {selectedItem == i.id && openItem ? (
                        <BiSolidDownArrow />
                      ) : (
                        <BiSolidLeftArrow />
                      )}
                      {i.idiomsName}
                    </div>

                    <div>
                      {selectedItem == i.id && openItem ? (
                        <p className="border-4 border-gray-300 items-center p-2 flex text-justify">
                          {i.idiomsDescription}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Definitions;
