import React from 'react'
import aboutTravelInfo from "../Js & JsonFile/AboutTravelInfo.json";
const AboutTourInfo = () => {
  return (
    <>
     <div className="flex gap-2 justify-around py-[40px] px-2 max-lg:flex-col-reverse">
            <div className="abtTrvLeft rounded-lg h-[70%] w-[40%] max-lg:h-full max-lg:w-full">
              <img
                className="w-full h-[500px] rounded-lg max-lg:h-full "
                src="https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </div>
            <div className="abtTrvRight">
              <div className="topAbtTrvRt">
                <h1 className="text-4xl font-bold max-lg:text-center">
                  Why Package Book With <span className="text-purple-500">TravelPK?</span>
                </h1>
                
              </div>
              {aboutTravelInfo.map((card, ids) => (
                  <div key={ids} className="abtInfoBox cursor-default border flex justify-between gap-5 rounded-xl p-5 border-purple-500 w-[530px] my-5 max-lg:w-full">
                    <div className="abtInfoLeft">
                      <p className="text-purple-500 font-bold text-3xl">{card.count}</p>
                      <p className="text-purple-500 font-semibold">{card.info}</p>
                    </div>
                    <p className="abtCardInfo text-justify">{card.detials}</p>
                  </div>
                ))}
            </div>
          </div> 
    </>
  )
}

export default AboutTourInfo
