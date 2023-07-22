import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDangerous } from 'react-icons/md';
import { GiOpenBook } from 'react-icons/gi'
const MainPage = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center  h-screen p-4 w-[100%] '>
          <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
        <Link to='/manipage/conditions' className='h-16 w-[60%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
            وضعیت های مخاطره آمیز
      </Link>
            <MdOutlineDangerous size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
        </div>
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
        <Link to="/manipage/definitions"  className='h-16 w-[60%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
            تعاریف عمومی
        </Link>
            <GiOpenBook  size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
     </div>
        
      </div>
    
    
    </>
  )
}

export default MainPage