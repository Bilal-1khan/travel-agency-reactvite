import React from 'react'

const AboutMainContent = () => {
  return (
    <>
     <div className='aboutContent flex items-center justify-around gap-[7rem] max-lg:flex-col'>
          <div className='abt-lf'>
            <h1 className='font-bold text-4xl mb-5'>About Our Company And <span className='text-purple-500'>What We Are</span> Offer.</h1>
            <p className='mb-5 text-slate-500 text-[1rem]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <p className='mb-5 text-slate-500 text-[1rem]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <button className='capitalize mt-5 px-4 py-3 bg-purple-500 text-white rounded-xl cursor-pointer'>find tours</button>
          </div>

          <div>
          <div className='abt-contentImg rounded-lg '>
            <img className='w-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1676139860466-8b8f71c0a737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
          </div>
          </div>
        </div> 
    </>
  )
}

export default AboutMainContent
