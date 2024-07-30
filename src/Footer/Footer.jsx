import React from 'react'
import TopFooter from './TopFooter';
import BtmFooter from './BtmFooter';
import ReservedFooter from './ReservedFooter';


const Footer = () => {
  return (
    <>
     <footer className='w-full relative'>
      <div className='max-w-[1240px] mx-auto my-0 p-4'>
          <TopFooter/>
          <BtmFooter/>
      </div>
          <ReservedFooter/>
    </footer> 
    </>
  )
}


export default Footer