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
    
    <div className="hidden md:flex w-full h-screen  items-center justify-center  ">
        <div className=" w-[80%] flex items-center justify-center ">
          <div className=" w-full flex flex-col">
          
          
              <>
              <p className="flex w-full items-center justify-center font-Vazirmatn text-2xl font-bold">  {conditionName.name} </p>
              <p className="flex w-full items-center justify-center font-Vazirmatn text-xl rtl ">{conditionName.Tooltip}</p>
              <div className=" flex justify-between items-center w-[80%]  rounded-3xl border-2 m-5 bg-[#105251]">
              <GiProcessor
                size={50}
                style={{
                  width: "50%",
                  color: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
              <Link to={`/conditions/processes/${conditionName.id}`} className="h-16 w-[70%]  items-center flex m-4 text-white font-bold text-xl justify-center  focus:outline-none">
                فرآیند ها
              </Link>
            </div>

            <div className=" flex justify-between items-center w-[80%]  rounded-3xl border-2 m-5 bg-[#105251]">
              <GoLaw
                size={50}
                style={{
                  width: "50%",
                  color: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
              <Link to={`/conditions/legal/${conditionName.id}`} className="h-16 w-full  items-center flex m-4 text-white font-bold text-xl justify-center  focus:outline-none">
                مستندات قانونی
              </Link>
            </div>

            <div className=" flex justify-between items-center w-[80%]  rounded-3xl border-2 m-5 bg-[#105251]">
              <GoOrganization
                size={50}
                style={{
                  width: "50%",
                  color: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
              <Link to={`/conditions/response/${conditionName.id}`} className="h-16 w-full  items-center flex m-4 text-white font-bold text-xl justify-center  focus:outline-none">
                دستگاه های مسئول 
              </Link>
                </div>
                <div className=" flex justify-between items-center w-[80%]  rounded-3xl border-2 m-5 bg-[#105251]">
              <GoOrganization
                size={50}
                style={{
                  width: "50%",
                  color: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
              <Link to={`/conditions/colleague/${conditionName.id}`} className="h-16 w-full  items-center flex m-4 text-white font-bold text-xl justify-center  focus:outline-none">
                دستگاه های همکار 
              </Link>
            </div>
              </>
   
              
               
              
          
           
       
          </div>
          <div className=" w-full">
            {/* <video
              class="w-full"
              src={require(`../Images/family.mp4`)}
              muted
              autoPlay
              loop
            ></video> */}
               <img src={conditionName.icon} alt='' className='w-[80%] '/>
          </div>
        </div>
      </div>
      
{/* mobile screen */}


      <div className="md:hidden  w-full h-screen flex flex-col  items-center  font-Vazirmatn text-xl text-center ">
      <div className="w-full  ">
        {/* <video
              class="w-full"
              src={require(`../Images/family.mp4`)}
              muted
              autoPlay
              loop
            /> */}
          <img src={conditionName.icon} alt='' className='w-full p-10 items-center justify-center flex'/>
        </div>
      <div className=" p-4 mt-0 w-full flex items-center justify-center text-center ">
{/* <p className='border-2 text-[#0C134F] bg-[#8696FE] rounded-3xl p-2 text-xs w-52 ' >وضعیت مخاطره آمیر انتخاب شده</p> */}
        <p className='text-justify p-2 font-bold flex items-center justify-center'>{conditionName.name}</p>
        </div>
        <p className='text-justify p-2 font-base items-center flex justify-center rtl'>{conditionName.Tooltip}</p>
        <div className='items-center w-full flex flex-col'>
      
        <div className='flex justify-between items-center w-[80%] bg-[#105251] rounded-3xl border-2 m-5 '>
          <GiProcessor size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
            <Link to={`/conditions/processes/${conditionName.id}`} className='h-16 w-[60%] items-center flex justify-center m-4 text-white font-bold text-xl  focus:outline-none'>
              فرآیند ها 
            </Link>
        </div>
          <div className='flex justify-between items-center w-[80%] bg-[#105251] rounded-3xl border-2 m-5'>
          <GoLaw size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}}/>
            <Link to={`/conditions/legal/${conditionName.id}`} className='w-[80%] h-16 rounded-3xl m-4 text-white font-bold items-center flex justify-center'>
مستندات قانونی 
            </Link>

</div>
        <div className='flex justify-between items-center w-[80%] bg-[#105251] rounded-3xl border-2 m-5'>
          <GoOrganization size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}} />
            <Link to={`/conditions/response/${conditionName.id}`}>
            <button className='w-[80%] h-16 rounded-3xl  m-4 text-white font-bold'>دستگاه های مسئول </button>

      </Link>
</div>
<div className='flex justify-between items-center w-[80%] bg-[#105251] rounded-3xl border-2 m-5'>
          <GoOrganization size={50} style={{width:"40%",color:"#FFF",direction:"ltr"}} />
            <Link to={`/conditions/colleague/${conditionName.id}`}>
            <button className='w-[80%] h-16 rounded-3xl  m-4 text-white font-bold'>دستگاه های همکار </button>

      </Link>
</div>
        </div>
     
        </div>
       
    </>
  )
}

export default Condition