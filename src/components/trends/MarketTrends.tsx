import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useRef } from 'react'
import Header from '../header/Header'
import styles from "./MarketTrends.module.scss"
import bitcoin from "../../assets/images/trends/bitcoin.png"
import graph from "../../assets/images/trends/graph.svg"
import {BsArrowRightShort} from "react-icons/bs";

const MarketTrends = () => {
//   const percentRef=useRef<HTMLTableCellElement>(null)
//   useEffect(()=>{
// // percentRef?.current?.color="blue"

//   },[])
  return (
    <section className='md:pt-[110px] pt-[77px]'>
      <article>
<div className='container md:pl-[61px] md:pr-[57px] px-[23px]'>
  <div className='relative items-center justify-between mb-[48px]'>
    <div></div>
  <Header>Market Trends</Header>
  <button className={`absolute bottom-0 right-0 ${styles.marketsBtn}`}>See All Markets</button>
  </div>
<table className={`w-full text-white  rounded-[25px] ${styles.table}`}>
  {Array(6).fill(null).map((item,index)=>(
    <tr className={` ${styles.tr}`}>
    <td className={styles.td}>Bitcoin</td>
    <td className={`${styles.td} ${styles.coin} items-center `}><img className='inline' src={bitcoin} alt="bitcoin" /> <span className='ml-3'>BTC</span></td>
    <td className={styles.td}>$19,702</td>
    <td className={`${styles.percent} ${styles.td} ${index===3&&"text-[#FF8282]"}`}>+0.68%</td>
    <td className={` ${styles.td}`}><img src={graph} className="m-auto md:w-[208px] md:h-[36px]" alt="graph" /></td>
    <td className={`pr-[14px]  ${styles.td} ${styles.buyBtn} `}><button className={``}><span>Buy Now</span> <BsArrowRightShort className='inline'/></button> </td>
  </tr>
  ))}
  
</table>
</div>
      </article>
    </section>
  )
}

export default MarketTrends