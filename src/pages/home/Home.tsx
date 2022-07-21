import React from 'react'
import BuildPortfolio from '../../components/build-portfolio/BuildPortfolio'
import Hero from '../../components/hero/Hero'
import HowItWorks from '../../components/how-it-works/HowItWorks'
import Investment from '../../components/investment/Investment'
import Learn from '../../components/learn/Learn'
import Nav from '../../components/nav/Nav'
import NeedHelp from '../../components/need-help/NeedHelp'
import Offer from '../../components/offer/Offer'
import OurPartners from '../../components/our-partners/OurPartners'
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
      <NeedHelp/>
      <OurPartners/>
      <Learn/>
    </div>
  )
}

export default Home