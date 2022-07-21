import React from 'react'
import learn from "../../assets/images/learn/learn.png"
import styles from "./Learn.module.scss"
const Card = () => {
  return (
    <div className={`bg-[#FFFFFF0D] m-auto lg:w-[22%] md:w-[40%] sm:w-[50%] pb-[36px] w-[70%] lg:mt-0 lg:mx-0 mb-5 rounded-[18px]`}>
      <img className=' md:m-0 w-full m-auto' src={learn} alt="news" />
      <div className='px-[20px] mt-[20px]'>
        <label className={`${styles.label} bg-[#FFFFFF12] text-[#B6B6B6]`}>CRYPTO BASIC</label>
        <p className={`${styles.header} pt-[13px] text-white`}>What is cryptocurrency? all you need to know</p>
        <p className={`${styles.text} pt-[13px] text-[#B6B6B6]`}>Cryptocurrencies are basically digital assets. It is secured by cryptography.. </p>
      </div>

    </div>)
}

export default Card