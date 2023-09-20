import React,{useState} from 'react'


import list from '../db.js'
import { useParams } from 'react-router-dom';

const OrganizationsResponsible = () => {
  const [isopen, setIsopen] = useState(false);
  const [desc, setDesc] = useState();
  const [organId, setOrganId] = useState("");
  let { id } = useParams();
  const Organizations= list.find((i) => i.id === id)
  console.log(Organizations.name)
  const handelClick = (itemId) => {
    const organ = Organizations.OrganizationsResponsible.find((i) => i.id == itemId)
    console.log(organ)
    setIsopen(!isopen);
    setOrganId(organ.id)
}




  return (
    <>
          <div className="md:flex hidden flex-col  w-full rtl  items-center justify-between">
        <section className='font-bold text-2xl mt-10 '>دستگاه های مسئول  در وضعیت مخاطره آمیز {Organizations.name}</section>
    <div className=' w-full mt-10 items-center flex flex-wrap justify-center'>
    {
          Organizations.OrganizationsResponsible.map((i,index) => {
          return <>
            <div className=' border-2 border-[#105251] p-5 m-10 w-[50%] h-auto rounded-xl 
           cursor-pointer flex justify-between items-center flex-col' onClick={()=>handelClick(i.id)} key={index}>
              <div className='flex w-full items-center'>
                <img src={i.img} alt="" className='w-16 h-16' />
                <div className='font-Vazirmatn mr-10 text-2xl'>{i.Nameorgan}</div>
              </div>
              {
                  organId == i.id && isopen ?
                   
                    
                    <div className=''>
                    {
                        i.duties.map((i,index) => {
                        return  i.description !== "" ? <>
                        <li className='text-justify p-2  text-xl ' key={index}>
                          {i.description}
                        </li>
                          </>
                            :<></>
                      })
                    }
          
          </div> :""
        }
            </div>
           
          
          
          
          
          
          </>
        })}
</div>
        



      </div>
      <div className="md:hidden mt-40 w-full h-screen flex flex-col items-center justify-center rtl  ">
        <section className='font-bold text-lg'>دستگاه های مسئول در وضعیت{Organizations.name}</section>
        {Organizations.OrganizationsResponsible.map((i) => {
              return <>
               <div className='w-[90%] flex flex-col p-2  m-5 border-2 border-[#105251] rounded-2xl'>
          <div className='flex items-center p-2 w-full m-5' onClick={()=>handelClick(i.id)}>
          
            <img src={i.img} alt="" className='w-12 h-12'/>
                    <p className='font-bold text-lg '>{i.Nameorgan}</p>
          </div>
          <hr/>
          {
                    organId == i.id && isopen ?
                     
                      
                      <div className=''>
                      {
                          i.duties.map((i) => {
                          return  i.description !== "" ? <>
                          <li className='text-justify p-2 text-sm '>
                            {i.description}
                          </li>
                            </>
                              :<></>
                        })
                      }
            
            </div> :""
          }
        </div>
              
              
              
              </>
          })}

</div>
    
    
    
    
    </>
  )
}

export default OrganizationsResponsible