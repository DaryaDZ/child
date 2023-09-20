import React from 'react'
import { Link } from 'react-router-dom'

const Recognition = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center'>
        
      <h3 className='w-full items-center flex justify-center mt-10 font-Vazirmatn text-2xl'>مدلسازی فاز شناسایی 14 حالت مخاطره آمیز </h3>
        <Link to='/recognition/start' className='w-[20%] border-2 p-5  mt-10 rounded-lg font-Vazirmatn text-center text-2xl bg-[#105251] text-white hover:bg-white
       hover:border-[#105251] hover:text-black cursor-pointer hover:shadow-2xl shadow-inner'> شروع</Link>
      </div>
    </>
  )
}

export default Recognition
