import React, { useEffect, useState } from 'react'
import Banners from '../Banner/Banners'
import FaqTopSec from './FaqTopSec'
import CntForm from '../Contact/CntForm'
import faqAccordionData from '../Js & JsonFile/AccordionData'
import CustomAccordion from './CustomAccordion'

const FAQ = () => {
  const [accordionData,setAccordionData] = useState([])
  useEffect(()=>{
    setAccordionData(faqAccordionData)
  })
  return (
    <>
     <div>
        {/* banner */}
        <Banners page={'FAQ'} mainPage={'Home'}/>
        <div className='max-w-[1240px] mx-auto my-5 w-full px-6 py-7'>
          <div className='accordionContainer'>
            <FaqTopSec/>
            <div className="accordionBox flex justify-around gap-2 p-2 max-[390px]:flex-col">
              <div className="p-4 flex-1">
                {
                  accordionData.map((accData,ids)=>(
                      <CustomAccordion key={ids} {...accData}/> 
                  ))
                }
              </div>
              <div className="accoridonForm">
                <CntForm title={"ask your question"}/>
              </div>
            </div>
          </div>
        </div>
    </div> 
    </>
  )
}

export default FAQ
