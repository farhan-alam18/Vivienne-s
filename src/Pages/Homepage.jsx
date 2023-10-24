import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Landing from '../Components/Landing Page/Landing'
import Icon from '../Components/Icon Section/Icon'
import Featured from '../Components/Featured Products/Featured'
import Collections from '../Components/Collections/Collections'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'

function Homepage() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Icon/>
    <Featured/>
    <Collections/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Homepage