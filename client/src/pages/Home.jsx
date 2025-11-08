import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'
import Faq from '../components/home/Faq'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home