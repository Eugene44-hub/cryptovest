import React from 'react'
import styles from "./HowItWorks.module.scss"
import fund from "../../assets/images/how-it-works/fund.svg";
import verify from "../../assets/images/how-it-works/verify.svg";
import sell from "../../assets/images/how-it-works/sell.svg";
import Card from './Card';
import Header from '../header/Header';
const offers: { image:string, text: string, header: string, buttonText: string }[] = [{
  image:fund,text: "Buy and sell popular digital currencies, keep track of them in the one place.", header: "Trade Desk", buttonText: "Get started"
  }, {
  image:verify,text: "Transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.", header: "CoinFlip ATMs", buttonText: "Find an ATM"
  }, {
 image:sell,text: "We'll tell you what cryptocurrencies are, how they work and why you should own one right now.", header: "Cryptovest Wallet", buttonText: "Download the App"
  }]
const HowItWorks = () => {
  return (
  
        <section className='md:pt-[159px] pt-[72px]'>
          <Header>How it works</Header>
          <article className='container md:pl-[61px] md:pr-[57px] px-[23px]'>
          <div className='lg:flex md:mt-[64px] mt-[83px] justify-between'>
              {offers.map((item, index) => (
                <Card key={index} {...item} index={index} />
              ))}
            </div>
          </article>
        </section>
        
      )
    }
    
export default HowItWorks