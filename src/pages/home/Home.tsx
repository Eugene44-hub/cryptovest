import React from 'react'
import BuildPortfolio from '../../components/build-portfolio/BuildPortfolio'
import Hero from '../../components/hero/Hero'
import HowItWorks from '../../components/how-it-works/HowItWorks'
import Investment from '../../components/investment/Investment'
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
      <Investment/>
      <BuildPortfolio/>
      <HowItWorks/>
    </div>
  )
}

export default Home