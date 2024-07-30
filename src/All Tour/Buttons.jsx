import React, { useState } from 'react'
import pageButtons from './PageButtons'

const Buttons = () => {

  return (
    <>
      {
        pageButtons.map((btns,ids)=>(
            <button key={ids} className='rounded-xl px-3 hover:bg-purple-500 hover:text-white transition-all py-2 border-2 mx-2 border-purple-500 text-black font-semibold cursor-pointer'>
                    {btns.value}
            </button>
        ))
      }
    </>
  )
}

export default Buttons
