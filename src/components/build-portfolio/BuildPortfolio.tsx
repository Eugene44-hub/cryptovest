import React from 'react'
import styles from "./BuildPortfolio.module.scss"
import Card from './Card'
import learn from "../../assets/images/build-portfolio/learn.svg";
import manage from "../../assets/images/build-portfolio/manage.svg";
import wallet from "../../assets/images/build-portfolio/wallet.svg";
import Header from '../header/Header';

const offers: { image: string, text: string, header: string, buttonText: string }[] = [{
  image: manage, text: "Buy and sell popular digital currencies, keep track of them in the one place.", header: "Trade Desk", buttonText: "Get started"
}, {
  image: wallet, text: "Transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.", header: "CoinFlip ATMs", buttonText: "Find an ATM"
}, {
  image: learn, text: "We'll tell you what cryptocurrencies are, how they work and why you should own one right now.", header: "Cryptovest Wallet", buttonText: "Download the App"
}]

const BuildPortfolio = () => {
  return (
    <section className='md:pt-[187px] pt-[68px]'>
      <article className='container md:pl-[61px] md:pr-[57px] px-[23px]'>
        <Header>Build your crypto Portfolio Here</Header>
      <div className='lg:flex md:mt-[64px] mt-[83px] justify-between'>
          {offers.map((item, index) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>
      </article>
    </section>
    
  )
}

export default BuildPortfolio