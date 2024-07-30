import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function CustomAccordion({ques,ans}) {
    const [open,setOpen] = useState(false)
  return (
    <>
      <div onClick={()=>setOpen(!open)} className='bg-slate-600 cursor-pointer text-white transition-all ease-in-out flex justify-between my-4 p-4 rounded-xl'>
        <h1 className='capitalize text-xl'>{ques}</h1>
        <span>{open?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</span>
      </div>
      {
        open && <div className='bg-slate-300 p-3 rounded-xl transition-all ease-in-out'>{ans}</div>
      }
    </>
  )
}

export default CustomAccordion
