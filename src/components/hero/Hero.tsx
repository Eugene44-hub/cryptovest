import React from 'react'
import etherum from "../../assets/images/hero/EtheriumCoin.png"
import bitcoin from "../../assets/images/hero/Bitcoin.png"
import monero from "../../assets/images/hero/Monero.png"
import liteCoin from "../../assets/images/hero/LiteCoin.png"
import spotlight from "../../assets/images/hero/spotlight.svg"
import looper from "../../assets/images/hero/LooperBg.svg"
import styles from "./Hero.module.scss"
import {BsArrowRightShort} from "react-icons/bs";

const Hero = () => {
  return (
    <section className={`${styles.section}`}>
      <img src={spotlight} className="absolute xl:top-[-5%] lg:top-0 top-[5%] left-0 w-full " alt="" />
      <img src={looper} className="absolute md:top-[50%] top-[54%] right-0 xl:w-auto md:w-[30%] w-[40%]" alt="" />
      <article className={`${styles.container} md:pl-[61px]  md:pr-[57px]  container px-[24px]`}>

        <img src={etherum} className="m-auto w-[20%] md:w-auto mt-[10px]" alt="etherum" />

        <div className='mt-[17px] flex-wrap flex'>

          <div className=' w-full relative'>
            <header className={`${styles.header} text-white text-center`}>
              Invest and Build Your Crypto Portfolio
            </header>
            <figure className='flex w-full  justify-end md:absolute top-0'>
              <img src={liteCoin} className={"w-[20%] md:w-[auto] md:w-[10%]  "} alt="" />
            </figure>
          </div>

          <div className='w-full relative  m-auto sm:order-2 md:mt-0 mt-[3px] '>
            <div className='flex md:w-[344px] sm:w-[60%] m-auto rounded-[25px] mt-[3px] overflow-hidden'>
              <input type="text" className='p-[10px] w-[60%]' placeholder='Email/phone no' />
              <div className={`${styles.btnContainer} flex-1 p-[2px]  pl-0`}>
                <button className={` w-full h-full  ${styles.inputBtn}`}>
                  Learn more <BsArrowRightShort className='inline'/>
                </button>
              </div>
            </div>
            <figure className='w-[20%] left-0 top-[-200%] md:absolute'>
              <img src={bitcoin} className="mt-[8px]" alt="bitcoin" />
            </figure>
          </div>

          <div className='text-center w-[90%] lg:mt-[36px] md:mt-[70px] sm:mb-[67px] md:max-w-[626px] mt-[11px] mt-[] leading-[36px] m-auto'>
            <p className={`text-white ${styles.heroText}`}>
              Buy, sell and hold your various crypto currencies in your secured wallet. Get market trends and learn more about crypto best pratices.
            </p>
          </div>
        </div>
        <img src={monero} className="md:mt-[121px] mt-[17px] mb-[32px] md:w-auto w-[20%] m-auto" alt="monero" />
        <div className='sm:hidden'>
          <button className={`${styles.btn} w-full`}>
            Register
          </button>
        </div>
        <div className='flex justify-between pt-[85px]'>
          {Array(3).fill(null).map((item,index)=>(
            <div className='text-center text-white'>
            <h1 className={`${styles.h1}`}>100+</h1>
            <p className={`${styles.smallPara} md:mt-[24px] mt-[10px]`}>Crypto Currencies Listed</p>
          </div>
          ))}
          
        </div>
      </article>
    </section>
  )
}

export default Hero