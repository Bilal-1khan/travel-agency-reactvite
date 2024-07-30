import React, { useEffect } from "react";
import Banners from "../Banner/Banners";
import AboutMainContent from "./AboutMainContent";
import AboutTourInfo from "./AboutTourInfo";
import AboutServices from "./AboutServices";
import TestimonialsCards from "../Home/TestimonialsCards";
import GalleryClientContent from "../Home/GalleryClientContent";

const About = () => {
  useEffect(()=>{
    document.title='TravelPK | About'
  })
  return (
    <>
      <div className="relative w-full">
        {/* banner */}
        <Banners page={"About"} mainPage={"Home"} />

        <div className="max-w-[1240px] mx-auto my-5 w-full px-6 py-7">
          {/* abt main content */}
          <AboutMainContent />
        {/* about services */}
          <AboutServices/>
          {/* gird content */}
          <AboutTourInfo/>
          {/* client testimonials */}
          <div className="py-7 px-4">
                <GalleryClientContent contentHeading={'What our client say about us'}/>
                {/* testimonials cards */}
                <TestimonialsCards/>
            </div>
        </div>
      </div>
    </>
  );
};
export default About;