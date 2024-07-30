import React, { useEffect, useState } from 'react'
import GalleryImg from "../Js & JsonFile/GalleryImg.json"
const Gallery = () => {
  const [images,setImages] = useState([])

  useEffect(()=>{
    setImages(GalleryImg)
  },[])
  return (
    <>
      <div className='grid grid-cols-3 gap-4 max-md:flex max-md:flex-col'>
          {
            images.map((galImg,ids)=>(
              <div className='lg:w-full rounded-xl hover:-translate-y-1 cursor-pointer transition-all hover:ease-out' key={ids}>
                  <img className='w-full h-[230px] rounded-xl max-md:h-full' src={galImg.image} alt="image" />
              </div>
            ))
          }
      </div>
    </>
  )
}

export default Gallery
