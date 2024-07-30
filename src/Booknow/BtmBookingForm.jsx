import React from "react";
import SelectOptions from "./SelectOptions";

const BtmBookingForm = () => {
  const btns = [
    { type: "adventure" },
    { type: "trip" },
    { type: "historical" },
    { type: "road trps" },
    { type: "tourist" },
  ];
  return (
    <>
      <div className="btmBookingForm">
        <div className="flex justify-center my-5 gap-4">
          <div className="w-[40%]">
            <SelectOptions
              opt="Adult"
              opt1="Adult 1"
              opt2="Adult 2"
              opt3="Adult 3"
              val="selectAdult"
              val1="selectAdult"
              val2="selectAdult"
              val3="selectAdult"
              names="select-adult"
              ids="selectAdult"
            />
          </div>
          <div className="w-[40%]">
            <SelectOptions
              opt="Child"
              opt1="Child 1"
              opt2="Child 2"
              opt3="Child 3"
              val="selectChild"
              val1="selectChild"
              val2="selectChild"
              val3="selectChild"
              names="select-child"
              ids="selectChild"
            />
          </div>
        </div>
        <div className="bookingBtns flex justify-center gap-3">
          {btns.map((bokBtns, ids) => (
            <button
              key={ids}
              className="border border-slate-400 px-4 py-3 rounded-md capitalize cursor-pointer hover:bg-purple-500 hover:text-white"
            >
              {bokBtns.type}
            </button>
          ))}
        </div>
        <textarea
          name="bookingText"
          id="bookingTextarea"
          cols="30"
          rows="10"
          placeholder="Message"
          className="w-full border-none rounded-xl p-4 mt-8 resize-none outline-none"
        ></textarea>
        <div className="my-3">
          <button className="text-white bg-purple-500 px-5 py-3 rounded-xl capitalize font-bold cursor-pointer hover:bg-purple-600 transition-all ease-in-out">
            confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default BtmBookingForm;
