import React from "react";
import SelectOptions from "./SelectOptions";

const BookingSelect = () => {
  return (
    <>
    <div className="gap-2 flex justify-between">

      <div className="w-[90%]">
        <input
          type="number"
          className="bookingInput rounded-xl w-full px-3 py-2 border-none"
          placeholder="Phone"
        />
      </div>
      <div className="w-[90%]">
        <SelectOptions 
        opt='ticket type'
        opt1='ticket type 1'
        opt2='ticket type 2'
        opt3='ticket type 3'
        val="ticketType"
        val1="ticketType"
        val2="ticketType"
        val3="ticketType"
        names="ticket-type"
        ids="ticketType"
        />
      </div>
    </div>
    </>
  );
};

export default BookingSelect;
