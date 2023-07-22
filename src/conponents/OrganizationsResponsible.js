import React,{useState} from 'react'


import list from '../db.js'
import { useParams } from 'react-router-dom';

const OrganizationsResponsible = () => {
  const [isopen, setIsopen] = useState(false);
  const [desc, setDesc] = useState();
  const [organId, setOrganId] = useState("");
  let { id } = useParams();
  const Organizations= list.find((i) => i.id === id)
  // console.log(Organizations)
  const handelClick = (itemId) => {
    const organ = Organizations.OrganizationsResponsible.find((i) => i.id == itemId)
    console.log(organ)
    setIsopen(!isopen);
    setOrganId(organ.id)
}




  return (
    <>
      <div className='w-full  flex-col items-center justify-center grid grid-row-1 gap-4 mb-52'>
        <section className='font-bold text-lg'>دستگاه های مسئول</section>
        {Organizations.OrganizationsResponsible.map((i) => {
              return <>
               <div className='w-full flex  flex-col p-2 border-2 border-[#B6EAFA] rounded-2xl'>
          <div className='flex items-center p-2 ' onClick={()=>handelClick(i.id)}>
          
            <img src={i.img} alt="" className='w-12 h-12'/>
                    <p className='font-bold text-lg'>{i.Nameorgan}</p>
          </div>
          <hr/>
          {
                  organId==i.id&& isopen ? <div className=''>
                      {
                        i.duties.map((i) => {
                          return <li className='text-justify p-2 text-sm'>
                            {i.description}
                          </li>
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