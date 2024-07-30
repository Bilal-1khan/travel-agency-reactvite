import React from 'react'
import InputLabel from './InputLabel'

const CntForm = ({title}) => {
    function formSubmit (e) {
        e.preventDefault()
    }
  return (
    <>
     <form onSubmit={formSubmit} action="" className='contactForm rounded-xl p-5'>
            <h1 className='capitalize text-3xl cursor-default text-purple-500 font-bold'>{title}</h1>
            <InputLabel id="name" label="Name" input="Your Name" type='text'/>
            <InputLabel id="email" label="Email" input="Your Email" type='email'/>
            <textarea className=' p-3 w-full h-full rounded-xl outline-none resize-none' cols='30' rows='8' name="" id="textArea" placeholder='Message'></textarea>
            <button className='capitalize px-3 py-2 cursor-pointer mt-7 bg-purple-500 text-white text-[1.125rem] rounded-xl'>send message</button>
          </form> 
    </>
  )
}

export default CntForm
