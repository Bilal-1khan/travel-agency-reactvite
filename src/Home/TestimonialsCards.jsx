import React, { useEffect, useState } from "react";
import TravellersInfo from "../Js & JsonFile/TestimonialsCardData.json";
import Stars from "./Stars";

function TestimonialsCards() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    setTestimonials(TravellersInfo);
  });

  return (
    <>
      <div className="flex justify-around gap-2 py-7 max-[490px]:flex-col">
        {testimonials.map((travelInfo,ids) => (
          <div key={ids} className="mainCard p-4 flex flex-col rounded-xl cursor-pointer hover:bg-slate-600 hover:text-white hover:-translate-y-1 transition-all ease-in-out">
            <div className="topCard flex justify-between flex-1">
              <img src={travelInfo.image} className="w-[4.375rem] h-[4.375rem] rounded-full" alt="image" />
              <div className="topRight flex flex-col items-center">
                <p className="Date font-semibold">{travelInfo.date}</p>
                <p className="name font-semibold hover:text-purple-500">{travelInfo.name}</p>
                <p className=" capitalize">{travelInfo.status}</p>
                <div className="reviewStars">
                  <Stars/>
                </div>
              </div>
            </div>
            <div className="mt-7 flex-1">
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti enim ipsam aut magnam sint quaerat quisquam impedit assumenda eius.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialsCards;
