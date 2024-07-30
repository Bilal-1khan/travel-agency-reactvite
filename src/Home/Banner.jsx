import React from 'react'

const Banner = ({heading,para}) => {
  return (
    <>
     <div className="landing-banner">
          <div className="overlay relative">
            <div className="relative flex justify-center items-center h-screen flex-col">
              <h1 className="text-white px-2 py-1 text-6xl text-center">
                {heading}
              </h1>
              <p className="text-white px-2 py-1 text-2xl text-center mt-4">
                {para}
              </p>
            </div>
          </div>
        </div> 
    </>
  )
}

export default Banner
