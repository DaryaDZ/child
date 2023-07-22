import React from "react";
import { Link, useParams } from "react-router-dom";
import list from './db.js';
import {AiOutlineArrowLeft} from 'react-icons/ai'
const Navbar = () => {
  
  let { id } = useParams();
  const conditionName = list.find(item=>item.id ==id);
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
      {
        conditionName  ? <div className="flex text-right h-40 w-full justify-between items-center  p-4  z-10 text-white bg-blue-500">
        <div>
            {/* <h5> وضعیت مخاطره آمیز مورد نظر را انتخاب کنید </h5> */}
          </div>
          <div className="font-bold text-sx items-center justify-center hidden md:flex">
            <h5>{conditionName.name}</h5>
          </div>
      
          <div className="md:hidden z-10 flex flex-row justify-between w-full">
          <div className="flex ltr w-[40%] items-center">
              <Link to="/">
              <AiOutlineArrowLeft size={30}/>
              </Link>
          </div>
        <div className="font-bold text-sm items-center justify-center flex text-justify rtl w-full">
              <h6>{conditionName.name}</h6>
            </div>
         
        </div>
        </div>
      : <div className="flex text-right w-full h-44 justify-between items-center  p-4  z-10 text-white bg-blue-500">
      <div>
          {/* <h5> وضعیت مخاطره آمیز مورد نظر را انتخاب کنید </h5> */}
        </div>
        <div className="font-bold text-sx hidden md:flex">
          <h5> وضعیت های  مخاطره آمیز </h5>
        </div>
    
         <div className="md:hidden z-10">
      <div className="font-bold text-sx items-center justify-center flex">
          <h6>وضعیت های  مخاطره آمیز </h6>
              </div>
     
      </div>
      </div>
        
     }
     
   
    </>
    
  );
};

export default Navbar;
