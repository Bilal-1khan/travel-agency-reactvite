import React from 'react'
import BookingSelect from './BookingSelect'
import BtmBookingForm from './BtmBookingForm'
import BookingInput from './BookingInput'

const BookingForm = () => {
    const bookingForm =(e)=>{
        e.preventDefault()
      }
  return (
    <>
     <form action="" onSubmit={bookingForm}>
            <div className="topInput p-5">
              <div className='my-3'>
              <BookingInput/>
              </div>
              <div className='my-3'>
              <BookingSelect/>
              </div>
              <BtmBookingForm/>
            </div>
          </form> 
    </>
  )
}

export default BookingForm
