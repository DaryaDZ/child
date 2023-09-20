import { Link, useParams } from "react-router-dom";
import list from './db.js';
import React, { useState} from "react";
import logoPazhoheshgal from "./Images/logoP.png";
import { AiFillHome,AiOutlineClose } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { GiOpenBook,GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search,setSeach]=useState(false)
  const handleNav = () => {
    setNav(!nav);
  };
  const openSeachBox = () => {
    setSeach(!search)
  }
  // let { id } = useParams();
  // const conditionName = list.find(item=>item.id ==id);
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

  // const conditionName = 
  // console.log(conditionName)
    // const [isOpen, setIsopen] = useState(false);
  return (
    <>
          <div className="w-full bg-[#F0F0F0] sticky h-20 justify-between items-center shadow-lg	md:flex hidden">
        <div className="flex items-center justify-center">
          <img src={logoPazhoheshgal} alt="" className="w-22 h-20 ml-3 mt-3 mb-3 " />
{          search ? <></>:<AiOutlineSearch size={30} style={{ color: "#105251", marginLeft: "5", cursor: "pointer" }} onClick={openSeachBox} />
}          {search ? <>
          
            <div className=" flex  w-full  justify-center items-center  ">
          <input
            className="border-2 w-full rounded-lg relative text-right p-2 focus:outline-none "
            placeholder="جستجو"
          />
          <button className="absolute w-12 h-12 left-24 rounded justify-center items-center" onClick={openSeachBox} >
            <AiOutlineSearch size={30} style={{ color: "#105251" }} />
          </button>
        </div> 
          
          </> : <></>}
        </div>
        <div className="flex items-center m-5 font-Vazirmatn text-xl font-bold  text-[#105251]">
          <li className="m-3 list-none cursor-pointer flex items-center  justify-center  hover:border-b-2 border-b-[#105251]">
            تماس با ما
            <BiSolidPhoneCall style={{ color: "#105251", marginLeft: "5" }} />
          </li>
          <li className="m-3 list-none cursor-pointer flex items-center  justify-center  hover:border-b-2 border-b-[#105251]">
            درباره ما
            <BsFillPersonFill style={{ color: "#105251", marginLeft: "5" }} />
          </li>
          <Link to="/definitions">
            <li className="m-3 list-none cursor-pointer flex items-center  justify-center  hover:border-b-2 border-b-[#105251]">
              تعاریف عمومی
              <GiOpenBook style={{ color: "#105251", marginLeft: "5" }} />
            </li>
          </Link>
          <Link to="/conditions">
            <li className="m-3 list-none cursor-pointer flex items-center justify-center hover:border-b-2 border-b-[#105251] ">
              وضعیت های مخاطره آمیز
              <MdOutlineDangerous
                style={{ color: "#105251", marginLeft: "5" }}
              />
            </li>
          </Link>

          <Link to="/">
            <li className="m-3 list-none cursor-pointer flex items-center  justify-center  hover:border-b-2 border-b-[#105251]">
              خانه
              <AiFillHome style={{ color: "#105251", marginLeft: "5" }} />
            </li>
          </Link>
        </div>
      </div>


      <div onClick={handleNav} className="md:hidden z-10 rtl p-2 ">
        {nav ? <AiOutlineClose size={25} className="text-black"/> : <GiHamburgerMenu size={25} style={{color:"#105251"}}/>}
      </div>
      <div  onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 flex flex-col text-black font-Vazirmatn text-2xl"
            : "absolute left-[-100%] "
        }
        // className="h-[80%] bg-[#F0F0F0] w-full flex flex-col items-center justify-center text-3xl font-Vazirmatn"
      >


        <ul >
        <img src={logoPazhoheshgal} alt="" className="w-22 h-20 ml-3 mt-3 mb-3 " />

          <Link to="/">
            <li className="m-3 list-none cursor-pointer flex items-center  justify-center ">
              خانه
              <AiFillHome style={{ color: "#105251", marginLeft: "5" }} />
            </li>
          </Link>
          <hr className="hr" style={{width:"100%"}}/>
          <Link to="/conditions">
            <li className="m-3 list-none cursor-pointer flex items-center justify-center  ">

              وضعیت های مخاطره آمیز
              <MdOutlineDangerous
                style={{ color: "#105251", marginLeft: "5" }}
              />
            </li>
          </Link>
          <hr className="hr" style={{width:"100%"}}/>
          <Link to="/definitions">
            <li className="m-3 list-none cursor-pointer flex items-center  justify-center ">
              تعاریف عمومی
              <GiOpenBook style={{ color: "#105251", marginLeft: "5" }} />
            </li>
          </Link>
          <hr className="hr" style={{width:"100%"}}/>
          <li className="m-3 list-none cursor-pointer flex items-center  justify-center">
            {/* <hr className="hr" /> */}
            درباره ما
            <BsFillPersonFill style={{ color: "#105251", marginLeft: "5" }} />
          </li>
            <hr className="hr" style={{width:"100%"}}/>
          <li className="m-3 list-none cursor-pointer flex items-center  justify-center ">
            تماس با ما
            <BiSolidPhoneCall style={{ color: "#105251", marginLeft: "5" }} />
          
          </li>
    
        </ul>
       
      </div>


     
   
    </>
    
  );
};

export default Navbar;
