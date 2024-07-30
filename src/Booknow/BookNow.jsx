import React, { useEffect } from 'react'
import Banners from '../Banner/Banners'
import BookingTop from './BookingTop'
import BookingForm from './BookingForm'


const BookNow = () => {
  useEffect(()=>{
    document.title='TravelPK | Booking'
  })
  
  return (
    <>
    <div>
      {/* banner */}
     <Banners page="Booking" mainPage='Home'/>

     <div className='max-w-[1240px] mx-auto my-5 w-full px-6 py-7'>
      {/* booking form */}
      <div className='bookingForm rounded-xl'>
        <BookingTop/>
        <div className="bookingForm rounded-e-xl">
          <BookingForm/>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default BookNow
