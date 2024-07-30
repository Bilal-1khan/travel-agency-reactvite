import React from 'react'
import { Link } from 'react-router-dom'

function Banners({page,mainPage}) {
  return (
    <>
      <div className="landing-banners">
          <div className="overlay relative">
            <div className="relative flex justify-center items-center h-screen flex-col">
              <h1 className="text-white text-7xl">
                {page}
              </h1>
              <span className="text-xl mt-4 flex gap-3">
                <Link to='/' className='text-gray-50 hover:text-purple-500'>{mainPage}</Link>
                <span className='text-white cursor-default'>/</span>
                <span className='text-white cursor-default'>{page}</span>
              </span>
            </div>
          </div>
        </div> 
    </>
  )
}

export default Banners