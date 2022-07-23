import React from 'react'
import styles from "./Footer.module.scss"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
const handles = [<BsInstagram size={20} color='white' />, <BsFacebook size={20} color='white' />, <BsTwitter size={20} color='white' />, <BsYoutube size={20} color='white' />]
const services = ["Apllicatons", "Buy Crypto", "Affilliate", "Institutional Services"]
const about = ["About", "Careers", "Blog", "Legal"]
const learn = ["What is Cryptocureency?", "Crypto Basic", "Tips and Tutorials", "Market Update"]


const Footer = () => {
  return (
    <footer className={`${styles.footerContainer} md:mt-[187px] mt-[72px] container md:pl-[61px] md:pr-[57px] px-[23px]`}>
      <div className='flex items-center text-white flex-wrap justify-between'>

        <div className='md:order-none order-4'>
          <header className={`${styles.footerHeader}`}>CryptoVest</header>
          <ul className='flex pr-[241px]'>
            {handles.map((item, index) => (
              <li key={index} className='mr-[14px] mt-[67px]'>
                <button>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <aside className={`${styles.copyright} mt-[24px]`}>2022 CoinMarketCap. All rights reserved</aside>
        </div>

        <ul className='pr-[20px]'>
          <li className={`${styles.footerHeader}`}>About Us</li>
          {about.map((item, index) => (
            <li key={index} className={`${styles.footerItems}`}>{item}</li>
          ))}
        </ul>
        <ul className='pr-5'>
          <li className={`${styles.footerHeader}`}>Services</li>
          {services.map((item, index) => (
            <li key={index} className={`${styles.footerItems}`}>{item}</li>
          ))}
        </ul>
        <ul>
          <li className={`${styles.footerHeader}`}>Learn</li>
          {learn.map((item, index) => (
            <li key={index} className={`${styles.footerItems}`}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer