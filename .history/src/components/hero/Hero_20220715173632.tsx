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

        <div className='mt-[17px]'>
          <header className={`${styles.header} text-white text-center`}>
          Invest and Build Your Crypto Portfolio
          </header>
          <div className=' flex rounded-[25px]'>
          <input  type="text" className='p-[10px] rounded-[25px] w-[60%]' placeholder='Email/phone no' />
<button className={`flex-1  ${styles.inputBtn}`}>
  Learn more
</button>
          </div>
        </div>

      </article>
    </section>
  )
}

export default Hero