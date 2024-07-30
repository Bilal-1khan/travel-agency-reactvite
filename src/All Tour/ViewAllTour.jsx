import React, { useEffect } from 'react'
import Banners from '../Banner/Banners'
import TravelCard from '../Home/TravelCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Buttons from './Buttons';

const ViewAllTour = () => {
  useEffect(()=>{
    document.title='TravelPK | Tour'
  })
  const arrowBtnsStyle = {
    color:"#8b3eea"
  }
  return (
    <>
      <div className='relative w-full'>
        {/* banner */}
        <Banners/>
        <div className='max-w-[1240px] mx-auto my-5 w-full px-6 py-7'>
          <TravelCard/>
          <TravelCard/>
          {/* navigation buttons */}
          <div className='flex justify-center items-center mt-7 px-2 py-4'>
            <button><ArrowBackIosIcon style={arrowBtnsStyle}/></button>
            <Buttons/>
            <button><ArrowForwardIosIcon style={arrowBtnsStyle}/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewAllTour
