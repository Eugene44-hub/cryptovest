import React from 'react'
import etherum from "../../assets/images/hero/EtheriumCoin.png"
import bitcoin from "../../assets/images/hero/Bitcoin.png"
import monero from "../../assets/images/hero/Monero.png"
import liteCoin from "../../assets/images/hero/LiteCoin.png"
import styles from "./Hero.module.scss"
const Hero = () => {
  return (
    <section>
      <article className={`${styles.container} container`}>

      <img src={etherum} className="m-auto w-[20%] mt-[10px]" alt="etherum" />

        <div>
          <header className=''>
          Invest and Build Your Crypto Portfolio
          </header>
        </div>

      </article>
    </section>
  )
}

export default Hero