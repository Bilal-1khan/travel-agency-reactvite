import React from 'react'
import { NavLink } from 'react-router-dom'
const HomeFlightNav = () => {
  return (
    <>
      <nav>
            <ul className='flex items-center gap-2'>
              <li>
                <NavLink to='home/flight' className={({isActive})=>`border-purple-500 border rounded-xl px-5 py-2 text-[1.125rem] ${isActive?'bg-purple-500 text-white':'bg-white'}`}>Flight</NavLink>
              </li>
              <li>
                <NavLink to='home/tour' className={({isActive})=>`border-purple-500 border rounded-xl px-5 py-2 text-[1.125rem] ${isActive?'bg-purple-500 text-white':'bg-white'}`}>Tour</NavLink>
              </li>
              <li>
                <NavLink to='home/hotel' className={({isActive})=>`border-purple-500 border rounded-xl px-5 py-2 text-[1.125rem] ${isActive?'bg-purple-500 text-white':'bg-white'}`}>Hotel</NavLink>
              </li>
            </ul>  
          </nav> 
    </>
  )
}

export default HomeFlightNav
