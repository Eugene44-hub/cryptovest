import React from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import Offer from '../../components/offer/Offer'
import MarketTrends from '../../components/trends/MarketTrends'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Offer/>
      <MarketTrends/>
    </div>
  )
}

export default Home