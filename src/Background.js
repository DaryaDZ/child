import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import list from './db.js';
import stil from "./Images/ed.jpg";

const Background = () => {
  // const list = [
  //   {
  //     id: uuidv4(),
  //     name: "بی سرپرستی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "بی توجهی و سهل انگاری والدین ",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "ابتلای هر یک از والدین، اولیاء یا سرپرستان قانونی به بیماری یا اختلال های رفتاری، روانی یا شخصیتی، و یا بیماری های جسمی واگیر صعب العلاج به تشخیص پزشکی قانونی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "زندانی شدن هر یک از والدین، اولیاء  یاسرپرستان قانونی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "اعتیاد هر یک از والدین، اولیاء یا سرپرستانقانونی به مواد مخدر و روان گردان یا قمار",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "قوادی و یا دائر و اداره کردن مراکز فساد و فحشا توسط هر یک از والدین، اولیاء یا سرپرستان قانونی و یا اشتهار آنها به فساد اخلاقی و فحشا",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "خشونت مستمر والدین، اولیاء سرپرستان قانونی و یا سایر اعضای خانواده نسبت به یکدیگر",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "بازماندن طفل و نوجوان از تحصیل",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "طرد شدن طفل و نوجوان از سوی خانواد",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "کم توانی جسمی یا ذهنی طفل و نوجوان، ابتلا به بیماری های خاص یا اختلال هویت جنسی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "نقض قوانین جزائی توسط طفل یا ارتکاب جرم توسط نوجوان",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "استفاده از طفل و نوجوان در فعالیت های مجرمانه",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "وارد شدن و یا وارد کردن طفل و نوجوان در فعالیت هایی نظیر تکدی گری و قاچاق",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "اعتیاد طفل و نوجوان به مواد مخدر، روان گردان یا مشروبات الکلی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "وضعیت زیان بار ناشی از فقر شدید",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "وضعیت زیان بار ناشی از آوارگی، پناهندگی مهاجرت یا بی تابعیتی",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "فرار مکرر از خانه یا مدرسه و ترک تحصیل",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "سوء رفتار نسبت به طفل و نوجوان",
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "بهره کشی از طفل و نوجوان",
  //   },
  // ];
  return (
    <>
      {/* <div className="flex justify-between items-center flex-col bg-[#F7F5EB]">
        <div className=" top-32 flex  w-full mt-5 justify-center items-center  ">
          <input
            className="border-2  border-blue-500 w-[50%]  rounded-lg relative text-right p-2 focus:outline-none hidden md:flex"
            placeholder="جستجو"
          />
          <button className="absolute w-12 h-12 left-[25.5%] rounded justify-center items-center  hidden md:flex">
            <AiOutlineSearch size={20} style={{ color: "blue" }} />
          </button>
        </div>

        <div className="w-full h-full   justify-center text-center p-4 hidden md:flex ">
          <div className="flex flex-row flex-wrap w-full p-5 justify-end">
            {list.map((item) => {
              return (
                // <Link to={`/${item.id}`}>
                <Link to={`/${item.id}`}
                  className="w-[22%]  
                rounded h-[20%]
                 border-blue-800
                 border-2 p-4 m-4
                 text-sm 
                 items-center
                 justify-center
                 text-center 
                 font-bold
                  hover:bg-blue-300 hover:text-white
                  hover:shadow-inner"
                >
                  {item.name}
                  </Link>
                  // </Link>
              );
            })}
          </div>
        </div>

        <div className="md:hidden z-10">
          
          <div className=" flex  w-full mt-5 justify-center items-center  ">
            <input
              className="border-2  border-blue-500 w-[95%]  rounded-lg relative text-right p-2 focus:outline-none "
              placeholder="جستجو"
            />
            <button className="absolute w-12 h-12 left-3 rounded justify-center items-center ">
              <AiOutlineSearch size={20} style={{ color: "blue" }} />
            </button>
          </div>
   

          <div className="flex flex-col justify-center items-center w-full p-5 ">
            {list.map((item) => {
              return (
                <Link to={`/${item.id}`} className="w-full  
                rounded h-[20%]
                 border-blue-800
                 border-2 p-4 m-4
                 text-sm justify-center
                 text-center font-bold
                  hover:bg-blue-200
                  hover:shadow-inner">
                 <button 
                 
                >
                  {item.name}
                </button>
                
                </Link>
              );
            })}
          </div>
        </div>
      </div> */}



      <div className="md:flex hidden h-screen items-center justify-center p-10 ">
        <div className=" flex-1  flex flex-col rtl text-[#105251] bg-[#F0F0F0] p-20 ">
          <p className="font-Vazirmatn text-5xl font-bold">
            {" "}
            "برای داشتن جهانی بهتر
          </p>
          <p className="font-Vazirmatn text-5xl font-bold">
            همه کودکان نیاز دارند رشد کنند
          </p>

          <p className="font-Vazirmatn text-5xl font-bold">
            {" "}
            سالم باشند و استعدادهایشان شکوفا شود "{" "}
          </p>
          <hr className="hr" />
          <div className="flex ltr">
            <button
              className="border-2 border-[#105251] 
           m-5 p-5 font-Vazirmatn text-lg font-bold rounded-xl w-[30%]
           hover:bg-[#105251]
           hover:text-white"
            >
              تعارف عمومی
            </button>
            <button
              className="border-2 bg-[#105251]
           text-white m-5 p-5 font-Vazirmatn
           text-lg font-bold rounded-xl w-[30%]
           hover:bg-[#F0F0F0] hover:font-bold
            hover:text-[#105251] border-[#105251]"
            >
              وضعیت های مخاطره آمیز
            </button>
          </div>
        </div>
        <div className="flex-1  items-center justify-center flex ">
          <div className="w-[65%] h-screen bg-[#105251] p-8 flex items-center justify-center  ">
            <img
              src={stil}
              alt=""
              className="mr-[50%] rounded-3xl border-2 border-white"
            />
          </div>
        </div>
      </div>
      {/* mobil screen */}

      <div className="md:hidden h-screen w-full items-center justify-center flex flex-col  text-[#105251] ">
        <p className="font-Vazirmatn text-4xl font-bold ">
          برای داشتن جهانی بهتر
        </p>
        <p className="font-Vazirmatn text-3xl ">
          همه کودکان نیاز دارند رشد کنند
        </p>

        <p className="font-Vazirmatn text-2xl ">
          سالم باشند و استعدادهایشان شکوفا شود
        </p>
        <hr className="hr" />
        <div className="flex ltr flex-col w-full items-center justify-center">
        <Link to='/conditions' className="border-2 bg-[#105251]
           text-white m-5 p-5 font-Vazirmatn text-center
           text-lg font-bold rounded-xl w-[50%]
           hover:bg-[#F0F0F0] hover:font-bold
            hover:text-[#105251] border-[#105251]">

            وضعیت های مخاطره آمیز
          </Link>
          <Link to="/definitions"       className="border-2 border-[#105251] 
           m-5 p-5 font-Vazirmatn text-lg font-bold rounded-xl w-[50%] text-center
           hover:bg-[#105251]
           hover:text-white">
  
            تعارف عمومی

          </Link>
        
    

        </div>
      </div>
    </>
  );
};

export default Background;
