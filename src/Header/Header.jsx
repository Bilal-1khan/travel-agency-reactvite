import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    
     <header className='w-full absolute z-[9999]'>
        <div className=' w-full max-w-[1240px] mx-auto my-0 '>
        <nav className='flex items-center justify-around px-3 py-4  max-[400px]:justify-end'>
            <div className='flex-1 max-[400px]:hidden'>
                <Link to='/' className='text-white flex flex-col gap-[2px]'><span className='text-3xl'>TravelPK</span><span className='text-[0.5rem] uppercase'>Explore the world with us</span></Link>
            </div>
            <div className='ulBox max-[400px]:hidden'>
                <ul className='flex'>
                    <li>
                        <NavLink to='' className={({isActive})=>`mx-1 font-medium text-[1.03125rem] text-white p-2 ${isActive?"text-purple-500":'text-white'} hover:text-purple-500`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>`mx-1 font-medium text-[1.03125rem] text-white p-2 ${isActive?"text-purple-500":'text-white'} hover:text-purple-500`} to='/about'>About us</NavLink>
                    </li>
                    <li className=' relative cursor-pointer' onClick={()=>setOpen(!open)}>
                        <span className='mx-1 font-medium text-[1.03125rem] text-white p-2  hover:text-purple-500'>Pages</span>
                    
                        <ul className={`bg-white text-purple-500 px-3 py-4 rounded-xl w-[150px]  absolute top-8 ${open?"block":"hidden"}`}>
                                <li className='hover:bg-slate-600 hover:text-white transition-all ease-in-out rounded-xl px-5 py-2 my-1'><Link to='/faq'>FAQ</Link></li>
                                <li  className='hover:bg-slate-600 hover:text-white transition-all ease-in-out rounded-xl px-5 py-2 my-1'><Link to='*'>ERORR 404</Link></li>
                            </ul>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive})=>`mx-1 font-medium text-[1.03125rem] text-white p-2 ${isActive?"text-purple-500":'text-white'} hover:text-purple-500`}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 max-[400px]:hidden'>
                <button><Link to='/booknow' className='text-white bg-purple-500 px-8 rounded-2xl py-3'>Book Now</Link></button>
            </div>
            <div className="menu hidden max-[400px]:block text-white">
               <button onClick={()=>(setOpen(!open))}>
             <MenuIcon/>
            </button>
            </div>
        </nav>
        </div>
        
    </header> 
    </>
  )
}

export default Header
