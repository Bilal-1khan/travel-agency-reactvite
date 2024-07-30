import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import BookNow from './Booknow/BookNow.jsx'
import Flight from './Home/Flight.jsx'
import Tour from './Home/Tour.jsx'
import Hotel from './Home/Hotel.jsx'
import ViewAllTour from './All Tour/ViewAllTour.jsx'
import FAQ from './Pages/FAQ.jsx'
import Error from './Pages/Error.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='' element={<Home/>}>
        <Route path='home/flight' element={<Flight/>}/>
        <Route path='home/tour' element={<Tour/>}/>
        <Route path='home/hotel' element={<Hotel/>}/>
      </Route>
      <Route path='about' element={<About/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/booknow' element={<BookNow/>}/>
      <Route path='/viewalltour' element={<ViewAllTour/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
