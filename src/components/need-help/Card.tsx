import React from 'react'
import Header from '../header/Header'
import styles from "./NeedHelp.module.scss"
interface Props{
  image:string,
  text: string,
  header:string,
  index:number
}
const Card = ({image,text,header,index}:Props) => {
  return (
        <div className='lg:flex justify-between items-center'>
          <img src={image} className={` md:w-[45%] lg:m-0 m-auto ${(index+1)%2===0?"order-2":''}`} alt="chat support" />
          <div className={`${styles.card} max-w-[524px] md:w-[45%] m-auto lg:text-start text-center`}>
            <header className={`${styles.header}`}>{header}</header>
            <p className={`${styles.text} md:w-auto w-[75%] mt-[24px] m-auto`}>Get 24/7 chat support with our friendly customer service agents at your service.
            </p>
          </div>
        </div>
      )
}

export default Card