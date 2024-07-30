import React from "react";

const BookingTop = () => {
  return (
    <>
      <div className="top flex justify-between p-2 bg-purple-500 text-white rounded-lg">
        <p className="capitalize text-xl font-bold">book this tour</p>
        <p>
          <span className="font-bold text-xl">$75</span>{" "}
          <span className="capitalize text-[15px]">per person</span>
        </p>
      </div>
    </>
  );
};

export default BookingTop;
