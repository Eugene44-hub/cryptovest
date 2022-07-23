import React from 'react'
import Header from '../header/Header'
import learn from "../../assets/images/learn/learn.png"
import Card from './Card';
import styles from "./Learn.module.scss"
const Learn = () => {
  return (
    <section className='md:pt-[136px] pt-[72px]'>
      <article className='container md:pl-[61px] md:pr-[57px] px-[23px]'>
        <Header>
          Learn About Cryptocurrency
        </Header>
        <p className='text-center text-white mt-[16px] mb-[43px] md:mb-[66px]'>Learn about crypto currency to start investing</p>
        <div className='lg:flex lg:flex-wrap justify-between mt-5'>
          <img className=' lg:mx-0 lg:mt-0 lg:w-[48%] mb-5 md:w-[40%] sm:w-[50%] w-[70%]  mx-auto' src={learn} alt="news" />
          {Array(6).fill(null).map((item, index) => (<Card />))}
        </div>
        <div className='lg:text-start text-center '>
        <button className={`${styles.marketsBtn}`}>See All Markets</button>
        </div>
      </article>
    </section>
  )
}

export default Learn