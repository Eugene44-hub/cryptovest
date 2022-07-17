import React from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import Offer from '../../components/offer/Offer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Offer/>
    </div>
  )
}

export default Home