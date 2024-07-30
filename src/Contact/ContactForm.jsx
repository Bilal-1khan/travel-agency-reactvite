import React from 'react'
import ContactInfo from './ContactInfo'
import CntForm from './CntForm'

const ContactForm = () => {
    
  return (
    <>
     <div className='lg:flex justify-around items-center gap-8 my-6 px-2 py-5'> 
        <div className="leftCntInfo rounded-xl p-5 my-6">
          <h1 className='capitalize font-bold text-[18px]'>contact <span className='text-purple-500'> info</span></h1>
          <ContactInfo/>
        </div>
        <div className="RightCntForm flex-1">
          <CntForm title={'stay connect with us'}/>
        </div>
      </div> 
    </>
  )
}

export default ContactForm
