import React, { useState } from 'react'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
const TopFooter = () => {

  // const [userEmail,setUserEmail] = useState("")

  // const userEmailData = () =>{
  //   if (!userEmail==='') {
  //     alert('Thanks for the Subscription')
  //   }else{
  //     setUserEmail(alert('Please fill the input')) 
  //   }
  //value={userEmail} onChange={userEmailData}
  // }

  const userEmailSubmit =(e)=>{
    e.preventDefault()
   
  }
  return (
    <>
     <div className='bg-slate-100 p-4 rounded-xl'>
            <div className='flex items-center justify-around max-md:flex-col'>
              
              <div className='flex items-center gap-6'>
              <span><DraftsOutlinedIcon style={{fontSize:"6rem", color:"#8b3eea"}}/></span>
                <div>
                <p className='text-xl font-semibold'>Get the latest news and offers</p>
                <p className='text-4xl font-semibold'>Subscribe to our newsletter</p>
                </div>
              </div>
              <form action="" className='flex gap-3' onSubmit={userEmailSubmit}>
                <input type="text" placeholder='Enter your email address' className='px-3 py-3 rounded-xl outline-none' />
                <button type='submit' className='bg-purple-500 px-4 py-3 font-semibold hover:bg-purple-600 text-white rounded-xl'>Subscribes</button>
              </form>
            </div>
          </div> 
    </>
  )
}

export default TopFooter
