import React, { useEffect, useState } from 'react'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import FlightData from '../Js & JsonFile/Flight.json';
import { Link } from 'react-router-dom';

function TravelCard() {
  const [tours,setTour] = useState([])

  useEffect(()=>{
    setTour(FlightData)
  })
  return (
    <>
    <div className='gap-3 flex flex-wrap justify-center'>
     {tours.map((tour,ids)=>(
       <div key={ids} className='card rounded-xl w-[21.875rem] relative m-3 max-[358px]:w-full'>
       <div className="image max-[358px]:w-full">
         <img className='card-image w-full max-[358px]:h-full' src={tour.destination} alt="image" />
       </div>
       <div>
         <div className='bg-purple-500 px-[0.5625rem] py-1 rounded-xl absolute bottom-[39%] left-2 text-white max-[358px]:bottom-[60px]'>
           <p><span><AccessTimeOutlinedIcon/></span> <span> {tour.duration}</span></p>
         </div>
       </div>
       <div className="para pt-6 px-4 py-2">
         <p className=' font-semibold text-[1rem]'>{tour.description}</p>
       </div>
       <div className="card-btn flex justify-between items-center px-5 py-4">
         <button className='border border-purple-500 px-3 py-[0.375rem] flex justify-center items-center rounded-xl text-purple-500'>
           <span className='uppercase'><Link to='/booknow'>book now</Link></span>  
           <span><NavigateNextRoundedIcon/></span>
           </button>
           <div>
             <div className=''>
               <p className='font-semibold'>From</p>
               <span className='font-bold text-purple-600 text-[1.1875rem]'>{tour.price}</span> <span className='text-[0.8125rem]'>Per Person</span>
             </div>
           </div>
       </div>
     </div> 
    ))}
    </div>
    </>
  )
}

export default TravelCard
