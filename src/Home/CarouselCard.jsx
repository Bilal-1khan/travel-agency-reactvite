import React, { useEffect, useState } from 'react'
import CarouselCards from '../Js & JsonFile/Carousel.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCard = () => {
  const [carouselData,setCarouselData] = useState([])
  
  useEffect(()=>{
    setCarouselData(CarouselCards)
  })
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className=''>
      <Slider {...settings}>
          {
            carouselData.map((carouselCardEle,indexNo)=>(
              <div key={indexNo} className='compCarousel rounded-xl relative cursor-pointer'>
                <div className='mx-1'>
                  <img src={carouselCardEle.image} alt="image" className='carouselImg rounded-xl w-full h-[12.5rem]' />
                </div>
                <div className='carouselPara absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-xl'>
                  <p className='text-white font-bold text-[0.84375rem] '>{carouselCardEle.city}</p>
                  <p className='text-white font-bold text-[0.84375rem] '>{carouselCardEle.place}</p>
                </div>
              </div>
            ))
          }
          </Slider>
      </div>
    </>
  )
}
export default CarouselCard