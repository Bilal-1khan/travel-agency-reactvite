import React from "react";

const BookingInput = () => {
  return (
    <>
    <div className="gap-2 flex justify-between">
    <div className="w-[90%]">
        <input
          type="text"
          className="bookingInput rounded-xl w-full px-3 py-2 border-none"
          placeholder="Your Name"
        />
      </div>
      <div className="w-[90%]">
        <input
          type="email"
          className="bookingInput rounded-xl w-full px-3 py-2 border-none"
          placeholder="Your Email"
        />
      </div>
    </div>
      
    </>
  );
};

export default BookingInput;
