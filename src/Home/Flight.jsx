import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
const Flight = () => {
    const handleFormFlight =(e)=>{
        e.preventDefault()
    }
  return (
    <>
     <div className=' p-5 mt-4'>
        <form action="" onSubmit={handleFormFlight}>
            <div className='flex justify-around items-center gap-3 max-[460px]:flex-col'>
            <div className='bg-purple-100 rounded-xl p-4 max-[460px]:w-full'>
                <p className='flex justify-between'><span>From</span><span><FlightTakeoffIcon/></span></p>
                <input type="text" className='bg-purple-100 border-none outline-none'/>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='bg-purple-100 rounded-xl p-4 max-[460px]:w-full'>
                <p className='flex justify-between'><span>To</span><span><FlightLandIcon/></span></p>
                <input type="text" className='bg-purple-100 border-none outline-none'/>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='bg-purple-100 rounded-xl p-4 max-[460px]:w-full'>
                <p className=''>Journey Date</p>
                <input type="date" className='bg-purple-100 border-none outline-none'/>
                <p className='text-[0.8125rem] mt-2'>Monday</p>
            </div>
            {/* dropdown */}
            <div className='bg-purple-100 rounded-xl p-4 max-[460px]:w-full'>
                <p>Passenger,</p>
                <p>className</p>
                <p className='text-xl font-medium cursor-pointer'>0 Passenger</p>
                <p className='text-[0.8125rem]'>Business</p>
            </div>
            </div>
            
            <div className='mt-4 text-center'>
            <button type='submit' className='px-5 py-2 bg-purple-500 text-white rounded-xl'>Submit</button>
            </div>
        </form>
    </div> 
    </>
  )
}

export default Flight
