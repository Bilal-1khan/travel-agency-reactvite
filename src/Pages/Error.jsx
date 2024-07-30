import React from 'react'
import Banners from '../Banner/Banners'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div>
      <Banners page={'Error 404'} mainPage={'Home'}/>
    </div>
    <div className='max-w-[1240px] mx-auto my-5 w-full px-6 py-7'>
      <div className='text-center'>
          <h1 className='text-9xl text-purple-500 font-bold'>404</h1>
          <p className='capitalize text-xl my-4'>that page are not found</p>
          <p className='text-xl capitalize'>go back to the <span><Link to='' className='capitalize bg-purple-500 text-white px-5 py-2 rounded-xl text-xl'>home page</Link></span></p>
      </div>
    </div>
     
    </>
  )
}

export default Error
