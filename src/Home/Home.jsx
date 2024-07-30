import React, { useEffect } from "react";
import HomeFlightNav from "./HomeFlightNav";
import { Outlet} from "react-router-dom";
import TravelCard from "./TravelCard";
import CarouselCard from './CarouselCard'
import Banner from "./Banner";
import Gallery from "./Gallery";
import TestimonialsCards from "./TestimonialsCards";
import PageMainContent from './PageMainContent'
import SliderContent from "./SliderContent";
import GalleryClientContent from "./GalleryClientContent";

const Home = () => {
  useEffect(()=>{
    document.title = "TravelPK | Home"
  })
  return (
    <>
      <div className="relative w-full">
        {/* banner */}
        <Banner heading={"Explore the world together"} para={"Find awesome flights, hotel, tour, car and packages"}/>

        {/* flight details */}
        <div className="flex justify-center relative z-[999] bottom-[76px]">
          <div className="flight-container bg-white p-8 absolute rounded-xl w-[90%] max-w-[1240px]">
            <HomeFlightNav />
            <Outlet />
          </div>
        </div>

          {/*landing page content */}
        <div className="max-w-[1240px] mx-auto my-5 w-full pt-[320px]">
          <PageMainContent/>

          {/* travel card */}
          <div className="travelInfoCards py-10 px-2">
            <TravelCard />
          </div>

          {/*slider carousel */}
            <SliderContent/>
            <div className="carousel px-4">
              <CarouselCard/>
            </div>

            {/*travel gallery */}
            <div className="my-[30px] py-10">
              <GalleryClientContent contentHeading={'Travel Gallery'}/>
              <div className="px-4 py-5">
                <Gallery/>
              </div>
            </div>

            {/* testimonials */}
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

export default Home;