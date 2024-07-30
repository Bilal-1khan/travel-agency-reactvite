import React, { useEffect } from 'react'
import Banners from '../Banner/Banners'
import ContactForm from './ContactForm'
import ContactFormTop from './ContactFormTop'


const Contact = () => {
  useEffect(()=>{document.title="TravelPK | Contact"})
  return (
    <>
    <div className='relative w-full'>
      {/* banner */}
     <Banners mainPage='Home' page='Contact'/>

    <div className='max-w-[1240px] mx-auto my-5 w-full px-6 py-7'>

    <div className=''>
      {/* contact top section */}
      <ContactFormTop/>

      {/* contact form and info*/}
      <ContactForm/>
      {/* google map */}
      <div>
      <iframe className='w-full border-none rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.993103914522!2d67.06907737366784!3d24.829909446482585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d016ea0ffd9%3A0x19dce04c508d1a70!2sTravel%20Guide!5e0!3m2!1sen!2s!4v1721714104867!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Contact
