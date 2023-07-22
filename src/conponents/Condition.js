import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom'
import list from '../db.js';
import { GiProcessor } from 'react-icons/gi';
import { GoLaw ,GoOrganization} from 'react-icons/go';
import {GrOrganization} from 'react-icons/gr'
const Condition = () => {
  let { id } = useParams();
  const conditionName = list.find((i) => { return i.id == id });

  return (
    <>
    
      <div className="hidden md:flex w-full h-screen  flex-col ">
      <div className=" p-4 mt-0">
<p className='border-2 text-[#0C134F] bg-[#8696FE] rounded-3xl p-2 text-xs w-52' >وضعیت مخاطره آمیر انتخاب شده</p>
        </div>
        <p className='text-justify p-2'>{conditionName.name}</p>
        <div className='items-center w-full flex flex-col'>
      
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/conditions/processes/${conditionName.id}`} className='h-16 w-[60%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
              فرآیند ها 
            </Link>
          <GiProcessor size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
        </div>
          <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/conditions/legal/${conditionName.id}`} className='w-[80%] h-16 rounded-3xl m-4 text-white font-bold items-center flex justify-center'>
مستندات قانونی 
            </Link>
          <GoLaw size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>

</div>
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/conditions/organs/${conditionName.id}`}>
            <button className='w-[80%] h-16 rounded-3xl  m-4 text-white font-bold'>دستگاه های مسئول و همکار </button>

      </Link>
          <GoOrganization size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}} />
</div>
       
        </div>  


        
      </div>
      
{/* mobile screen */}


      <div className="md:hidden  w-full h-screen flex flex-col   ">
      <div className=" p-4 mt-0">
<p className='border-2 text-[#0C134F] bg-[#8696FE] rounded-3xl p-2 text-xs w-52' >وضعیت مخاطره آمیر انتخاب شده</p>
        </div>
        <p className='text-justify p-2 font-bold'>{conditionName.name}
     
        </p>
        <p className='text-justify p-2 font-base'>{conditionName.Tooltip}</p>
        <div className='items-center w-full flex flex-col'>
      
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/manipage/conditions/processes/${conditionName.id}`} className='h-16 w-[60%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
              فرآیند ها 
            </Link>
          <GiProcessor size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
        </div>
          <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/manipage/conditions/legal/${conditionName.id}`} className='w-[80%] h-16 rounded-3xl m-4 text-white font-bold items-center flex justify-center'>
مستندات قانونی 
            </Link>
          <GoLaw size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>

</div>
        <div className='flex justify-between items-center w-[80%] bg-[#1F6E8C] rounded-3xl border-2 m-5'>
            <Link to={`/manipage/conditions/organs/${conditionName.id}`}>
            <button className='w-[80%] h-16 rounded-3xl  m-4 text-white font-bold'>دستگاه های مسئول و همکار </button>

      </Link>
          <GoOrganization size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}} />
</div>
       
        </div>
     
        </div>
       
    </>
  )
}

export default Condition