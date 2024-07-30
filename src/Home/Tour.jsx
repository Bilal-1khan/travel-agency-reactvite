import React from "react";

const Tour = () => {
  return (
    <>
      <div className="mt-4 p-5 flex justify-around items-center gap-1 max-[420px]:flex-col">
        <div className="bg-purple-100 rounded-xl p-4 w-[100%] max-[390px]:w-full">
          <p>
            <span className="text-gray-500">Destination</span>
          </p>
          <input
            type="text"
            className="bg-purple-100 my-1 border-none outline-none text-[1.0625rem]"
            placeholder="Where are you going?"
          />
          <p className="text-[0.8125rem]">Where are you going?</p>
        </div>

        <div className="bg-purple-100 rounded-xl p-4 flex items-center justify-between w-1/2 max-[390px]:w-full">
          <div>
            <p className="text-gray-500">Journey Date</p>
            <input
              type="date"
              className="bg-purple-100 border-none outline-none font-semibold my-1"
            />
            <p className="text-[0.8125rem]">Monday</p>
          </div>

          <div>
            <p className="text-gray-500">Return Date</p>
            <input
              type="date"
              className="bg-purple-100 border-none outline-none font-semibold my-1"
            />
            <p className="text-[0.8125rem]">Monday</p>
          </div>
         
        </div>
         {/* dropdown */}
         <div className="bg-purple-100 rounded-xl p-4 max-[420px]:w-full">
          <p>Passenger,</p>
          <p>className</p>
          <p className="text-xl font-medium cursor-pointer">0 Passenger</p>
          <p className="text-[0.8125rem]">Business</p>
        </div>
      </div>
        <div className="mt-4 text-center">
          <button
            type="submit"
            className="px-5 py-2 bg-purple-500 text-white rounded-xl"
          >
            Submit
          </button>
        </div>
    </>
  );
};

export default Tour;
