import React,{useState} from 'react'
import { AiOutlineAlignLeft, AiOutlineArrowDown,AiOutlineArrowLeft } from 'react-icons/ai';
import Conditions from './Conditions'
import { BsArrowDownRight,BsArrowDownLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const RecognitionStart = () => {
  const navigate = useNavigate();
  const [Value, setValue] = useState();
  const [open, setopen]=useState(false)
//   const handelclick = () => {
//     // setValue(value);
//     // setopen(true);
//     // <Route path="/conditions" element={<Conditions Value={Value}/>} />
// navigation('/conditions',{Value:Value})
//   }
  return (
    <>
      <div className='w-full  items-center justify-center md:flex p-5 flex-col hidden '>
        <div className='w-20 h-20 border-4 rounded-full text-center p-4 border-[#105251]'>ورودی ها</div>
        <div className='w-full flex items-center justify-center mt-2'>
          <AiOutlineArrowDown size={25}/>
        </div>
        <div className='w-full  flex items-center justify-between p-5  '>
        {/* <div className='w-[25%]  ml-5'>
        <div className='border-2 p-5 rounded-xl  w-full  text-center text-white text-xl  bg-[#105251]'>رویت</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full  flex pb-5 pt-5 pr-1 pl-1 '>
              <div className='border-2 p-5  text-center  border-[#105251] rounded-xl'>دفتر ریاست قوه </div>
              <div className='border-2 p-5 mb-5  ml-2 text-center border-[#105251] rounded-xl '>مشاهده مردم</div>
              <div className='border-2 p-5 mb-5 ml-2 text-center border-[#105251]  rounded-xl'>مشاهده پلیس </div>
            </div>
          </div> */}
          <div className='w-[30%]  ml-5'>
          <div className='border-2 p-5 rounded-xl w-full  text-center text-xl text-white  bg-[#105251]'>ارجاع</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full  flex pb-5 pt-5 pr-1  '>
            {/* <div className='border-2 p-5  text-center '>شهرداری </div> */}
              {/* <div className='border-2 p-5  text-center  border-[#105251] rounded-xl'> </div> */}
              {/* <div className='border-2 p-5 ml-2 text-center border-[#105251] rounded-xl '>گزارش اورژانس اجتماعی </div> */}
              <div className='border-2 p-5 mb-5 ml-2 w-full text-center border-[#105251]  rounded-xl'>ارجاع از مقام بالاتر </div>
            </div>
          </div>
          <div className='w-[30%]  ml-5'>
          <div className='border-2 p-5 rounded-xl w-full  text-center  text-xl text-white  bg-[#105251]'>گزارش</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full  flex pb-5 pt-5 pr-1 pl-1 '>
              <div className='border-2 p-5  text-center  border-[#105251] rounded-xl'>دفتر ریاست قوه </div>
              <div className='border-2 p-5 ml-2 text-center border-[#105251] rounded-xl '>گزارش اورژانس اجتماعی </div>
              <div className='border-2 p-5 ml-2 text-center border-[#105251]  rounded-xl'>گزارش پلیس</div>
            </div>
          </div>
          
          <div className='w-[30%]  ml-5'>
          <div className='border-2 p-5 rounded-xl w-full text-center  text-xl text-white  bg-[#105251]'>اعلام</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full flex pb-5 pt-5 pr-1 pl-1 '>
              <div className='border-2 p-5  text-center  rounded-xl  border-[#105251]'>استفاده از سامانه برای اعلام مورد</div>
              <div className='border-2 p-5 ml-2 text-center  rounded-xl  border-[#105251]'>مراجعه حضوری</div>
              <div className='border-2 p-5 ml-2 text-center rounded-xl  border-[#105251] '>تماس تلفنی با شماره 123</div>
              {/* <div className='border-2 p-5 ml-2'>تماس تلفنی</div> */}
            </div>
          </div>
         
        </div>
        <div className='w-full justify-center items-center flex '>
        {/* <div className='w-[30%]    rtl'>
         <BsArrowDownRight size={25}/>
          
          </div> */}
          <div className='w-[30%]  rtl '>
         <BsArrowDownRight size={25}/>
          
          </div>
          <div className='w-[30%]  flex justify-center items-center '>
            <AiOutlineArrowDown size={25}/>
          </div>
          <div className='w-[30%]  '>
            <BsArrowDownLeft size={25}/>
          </div>
          
        </div>
        <div className='w-full  items-center justify-center flex flex-col p-5'>
          <div className='w-[50%] border-4 text-center p-5 rounded-xl'>شناسایی </div>
          <div className='flex w-[50%] items-center justify-center'>
            {/* <div className='w-[15%] items-centre justify-center flex'><BsArrowDownLeft size={25} /></div> */}
          <div className='w-[15%] items-centre justify-center flex'><AiOutlineArrowDown size={25} /></div>
            {/* <div className='w-[15%] items-centre justify-center flex'><BsArrowDownRight size={25} /></div> */}
          </div>

        </div>
        <div className='flex w-full items-center justify-center flex-col '>
          <div className='w-[30%] mr-5  border-2 p-5 text-center justify-center flex items-center'>احراز هویت طفل و نوجوان </div>
          <div className='w-[30%] flex items-center justify-center'><AiOutlineArrowDown size={25} /></div>
          <div className='w-[30%] flex items-center justify-center'>
            
            <div className='w-full border-2 p-4 mb-5 text-center'>احراز هویت کامل طفل و نوجوان شامل سن کودک ، جنسیت ،شرایط  به صورت کلی بیوگرافی کامل از طفل </div>
            <div className=''>
              <AiOutlineArrowLeft/>
            </div>
            <div className='w-full bg-[#105251] border-2 p-5 rounded-xl text-center text-white'>سازمان بهزیستی</div>
</div>
          <div><AiOutlineArrowDown size={25} /></div>
          <div className='w-[50%] items-center justify-between flex'>
            <div className='border-2 p-5 w-full m-4 text-center'>نیروی انتظامی
            
            </div>
         
            <div className='border-2 p-5 w-full m-4 text-center'>سازمان بهزیستی</div>
          </div>
          <div className='w-[50%] items-center justify-between flex'>
           <div className='w-full flex items-center justify-center'> <BsArrowDownRight  size={20}/>
            </div>
            <div className='w-full flex items-center justify-center'> <BsArrowDownLeft size={20}/></div>
          </div>
          <div className='w-[30%]  border-2 p-5 text-center justify-center flex items-center'>احراز  وضعیت مخاطره آمیز </div>
          <div className='w-[30%] flex items-center justify-center '><AiOutlineArrowDown size={25}/></div>
        </div>
        <div className=' w-[50%]  flex items-center justify-center flex-col'>
      
        </div>
        <div className=''>
          {/* <div className='w-full flex flex-col'>
          <div></div>

          </div> */}
          <div className='w-full flex items-center justify-center flex-col'>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="بی توجهی و سهل انگاری والدین" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>بی توجهی و سهل انگاری والدین </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="بازمانده از تحصیل" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>بازمانده از تحصیل  </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="زندانی شدن والدین"  onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>زندانی شدن والدین </label>
            </div>
             <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="اعتیاد هر یک از والدین"  onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>اعتیاد هر یک از والدین </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="طرد شدن طفل و نوجوان" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>طرد شدن طفل و نوجوان </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="سوء رفتار نسبت به طفل و نوجوان"  id="value6" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2' id="value6">سوء رفتار نسبت به طفل و نوجوان  </label>
           </div>
          </div>
        </div>
        <div className='w-[50%] items-center flex justify-center'>
          <button  onClick={()=>{navigate('/conditions',{state:{Value}})}} className='w-[50%] border-2 border-[#105251] font p-5 text-center rounded-xl'>
            ادامه
          </button>
          {/* {open && <Conditions Value={Value}/>} */}
        </div>
        {/* <div className='w-full p-5 text-center flex flex-col items-center justify-center'>
          <div  className='border-2 p-5 w-[40%] items-center justify-center flex '>شناسایی عام </div>
          </div>
          <div className='flex items-center justify-center'>
          <div><BsArrowDownLeft  size={25}/></div>
          <div><BsArrowDownRight size={25}/></div> 
          </div>
          <div className='flex items-center justify-center'>
            <div className='border-2 p-5 '>شناسایی وظیفه همه دستگاه ها </div>
            <div className='border-2 p-5 '>شناسایی وظیفه همه شهروندان </div>
          </div>
        </div> */}
      </div>
      {/* mobile screen */}
      <div className="md:hidden  w-full  flex flex-col justify-between">
        <div className='w-full flex items-center justify-center'>
          <div className='w-20 h-20 border-4 rounded-full text-center   p-4 border-[#105251]'>ورودی ها</div>
        </div>
        <div className='w-full flex items-center justify-center mt-2'>
          <AiOutlineArrowDown size={25}/>
        </div>
        <div className='w-[100%] grid grid-cols-3 gap-4 p-4 '>
          <div className='w-full'>
          <div className='border-2 p-5 rounded-xl w-full  text-center text-xl text-white  bg-[#105251]'>ارجاع</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full '>
           
              <div className='border-2 p-5 mb-5 ml-2 w-full text-center border-[#105251]  rounded-xl'>ارجاع از مقام بالاتر </div>
            </div>
          </div>
          <div className='w-full'>
          <div className='border-2 p-5 rounded-xl w-full  text-center  text-xl text-white  bg-[#105251]'>گزارش</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full  '>
              <div className='border-2 p-5  mb-2 text-center  border-[#105251] rounded-xl'>دفتر ریاست قوه </div>
              <div className='border-2 p-5  mb-2text-center border-[#105251] rounded-xl '>گزارش اورژانس اجتماعی </div>
              <div className='border-2 p-5  mt-2 text-center border-[#105251]  rounded-xl'>گزارش پلیس</div>
            </div>
          </div>
          
          <div className='w-full'>
          <div className='border-2 p-5 rounded-xl w-full text-center  text-xl text-white  bg-[#105251]'>اعلام</div>
            <div className='flex justify-center items-center w-full'><AiOutlineArrowDown size={25} /></div>
            <div className='w-full flex flex-col pb-5  '>
              <div className='border-2 p-5  mb-2 text-center  rounded-xl  border-[#105251]'>استفاده از سامانه برای اعلام مورد</div>
              <div className='border-2 p-5  mb-2 text-center  rounded-xl  border-[#105251]'>مراجعه حضوری</div>
              <div className='border-2 p-5  mb-2 text-center rounded-xl  border-[#105251] '>تماس تلفنی با شماره 123</div>
              {/* <div className='border-2 p-5 ml-2'>تماس تلفنی</div> */}
            </div>
          </div>
         
        </div>
        <div className='w-full justify-center items-center flex '>
        {/* <div className='w-[30%]    rtl'>
         <BsArrowDownRight size={25}/>
          
          </div> */}
          <div className='w-[40%]  rtl '>
         <BsArrowDownRight size={25}/>
          
          </div>
          <div className='w-[40%]  flex justify-center items-center '>
            <AiOutlineArrowDown size={25}/>
          </div>
          <div className='w-[40%]  '>
            <BsArrowDownLeft size={25}/>
          </div>
          
        </div>
        <div className='w-full  items-center justify-center flex flex-col p-5'>
          <div className='w-[100%] border-4 text-center p-5 rounded-xl'>شناسایی </div>
          <div className='flex w-[50%] items-center justify-center'>
            {/* <div className='w-[15%] items-centre justify-center flex'><BsArrowDownLeft size={25} /></div> */}
          <div className='w-[15%] items-centre justify-center flex'><AiOutlineArrowDown size={25} /></div>
            {/* <div className='w-[15%] items-centre justify-center flex'><BsArrowDownRight size={25} /></div> */}
          </div>

        </div>
        <div className='flex w-full items-center justify-center flex-col '>
          <div className='w-[80%] mr-5  border-2 p-5 text-center justify-center flex items-center'>احراز هویت طفل و نوجوان </div>
          <div className='w-[30%] flex items-center justify-center'><AiOutlineArrowDown size={25} /></div>
          <div className='w-[80%] flex items-center justify-center'>
            
            <div className='w-full border-2 p-4 mb-5 text-center'>احراز هویت کامل طفل و نوجوان شامل سن کودک ، جنسیت ،شرایط  به صورت کلی بیوگرافی کامل از طفل </div>
            <div className=''>
              <AiOutlineArrowLeft/>
            </div>
            <div className='w-full bg-[#105251] border-2 p-5 rounded-xl text-center text-white'>سازمان بهزیستی</div>
</div>
          <div><AiOutlineArrowDown size={25} /></div>
          <div className='w-[80%] items-center justify-between flex'>
            <div className='border-2 p-5 w-full m-4 text-center'>نیروی انتظامی
            
            </div>
         
            <div className='border-2 p-5 w-full m-4 text-center'>سازمان بهزیستی</div>
          </div>
          <div className='w-[80%] items-center justify-between flex'>
           <div className='w-full flex items-center justify-center'> <BsArrowDownRight  size={20}/>
            </div>
            <div className='w-full flex items-center justify-center'> <BsArrowDownLeft size={20}/></div>
          </div>
          <div className='w-[80%]  border-2 p-5 text-center justify-center flex items-center'>احراز  وضعیت مخاطره آمیز </div>
          <div className='w-[30%] flex items-center justify-center '><AiOutlineArrowDown size={25}/></div>
        </div>
        <div className=' w-[50%]  flex items-center justify-center flex-col'>
      
        </div>
        <div className='mr-20'>
          {/* <div className='w-full flex flex-col'>
          <div></div>

          </div> */}
          <div className='w-full flex items-center justify-center flex-col p'>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="بی توجهی و سهل انگاری والدین" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>بی توجهی و سهل انگاری والدین </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="بازمانده از تحصیل" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>بازمانده از تحصیل  </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="زندانی شدن والدین"  onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>زندانی شدن والدین </label>
            </div>
             <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="اعتیاد هر یک از والدین"  onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>اعتیاد هر یک از والدین </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio' name="conditions" value="طرد شدن طفل و نوجوان" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2'>طرد شدن طفل و نوجوان </label>
            </div>
            <div className='w-full rtl flex items-center mb-2'>
              <input type='radio'  name="conditions" value="سوء رفتار نسبت به طفل و نوجوان"  id="value6" onChange={(e)=>setValue(e.target.value)} class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className='mr-2' id="value6">سوء رفتار نسبت به طفل و نوجوان  </label>
           </div>
          </div>
        </div>
        <div className='w-[80%] items-center flex justify-center'>
          <button  onClick={()=>{navigate('/conditions',{state:{Value}})}} className='w-[50%] border-2 border-[#105251] font p-5 text-center rounded-xl'>
            ادامه
          </button>
        </div>
        </div>
    </>
  )
}

export default RecognitionStart
