import React from 'react'
import styles from "./Offer.module.scss"
import OfferCard from './OfferCard'
import tradeDeskImg from "../../assets/images/offer/tradeDeskImg.svg";
import coinFlip from "../../assets/images/offer/coinFlip.svg";
import cryptoWallet from "../../assets/images/offer/cryptoWallet.svg";
import Header from '../header/Header';

const offers: { image: string, text: string, header: string, buttonText: string }[] = [{
  image: tradeDeskImg, text: "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform", header: "Trade Desk", buttonText: "Get started"
}, {
  image: coinFlip, text: "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto", header: "CoinFlip ATMs", buttonText: "Find an ATM"
}, {
  image: cryptoWallet, text: "Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place", header: "Cryptovest Wallet", buttonText: "Download the App"
}]


const Offer = () => {
  return (
    <section className='pt-[81px] '>
      <article className='container md:pl-[61px]  md:pr-[57px]  px-[23px]'>
        <Header>
          What we offer
        </Header>
        <div className='lg:flex md:mt-[64px] mt-[83px] justify-between'>
          {offers.map((item, index) => (
            <OfferCard key={index} {...item} index={index} />

          ))}
        </div>
      </article>
    </section>
  )
}

export default Offer