import React from 'react'
import etherum from "../../assets/images/hero/EtheriumCoin.png"
import bitcoin from "../../assets/images/hero/Bitcoin.png"
import monero from "../../assets/images/hero/Monero.png"
import liteCoin from "../../assets/images/hero/LiteCoin.png"
import styles from "./Hero.module.scss"
const Hero = () => {
  return (
    <section>
      <article className={`${styles.container} container px-[24px]`}>

      <img src={etherum} className="m-auto w-[20%] mt-[10px]" alt="etherum" />

        <div className='mt-[17px]'>
          <header className={`${styles.header} text-white text-center`}>
          Invest and Build Your Crypto Portfolio
          </header>
          <div className=' flex rounded-[25px] overflow-hidden'>
          <input  type="text" className='p-[10px] w-[60%]' placeholder='Email/phone no' />
          <div className={`${styles.btnContainer} flex-1 p-[2px]  pl-0`}>
          <button className={` w-full h-full ${styles.inputBtn}`}>
  Learn more
</button>
          </div>

          </div>
        </div>

      </article>
    </section>
  )
}

export default Hero