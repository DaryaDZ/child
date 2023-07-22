import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import list from '../db.js'
import { useParams } from 'react-router-dom';
import { VscOrganization } from 'react-icons/vsc';
import { GiOrganigram } from 'react-icons/gi';
const Organizations = () => {
  let { id } = useParams();
  const Organizations= list.find((i) => i.id === id)


  return (
    <>
      <div className='flex flex-col items-center justify-center p-4 w-[100%] '>
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
          <Link to={`/manipage/conditions/Response/${Organizations.id}`}
            className='h-16 w-[90%] items-center flex justify-center m-4 text-white font-bold text-xl focus:outline-none'>
        دستگاه های مسئول
          </Link>
          <GiOrganigram size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
      </div>
       <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 '>

  <Link to={`/manipage/conditions/Colleague/${Organizations.id}`}  className='h-16 w-[90%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
        دستگاه های همکار
        </Link>
        <VscOrganization size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
        </div>
       </div>
    </>
  )
}

export default Organizations