import React from 'react'
import styles from "./Offer.module.scss";
import {BsArrowRightShort} from "react-icons/bs";
interface Props{
  index:number,
  image:string;
  header:string;
  text:string;
  buttonText:string;
}
const OfferCard = ({index,image,header,text,buttonText}:Props) => {
  return (
<div className={` ${styles.offerCard} relative rounded-[25px] py-[32px] px-[24px] lg:w-[30%] lg:m-0 m-auto ${"mb-5"} sm:w-[60%] text-center text-white`}>
  <div className={`${styles.hoverBg} absolute h-full w-full top-0 left-0 rounded-[inherit]`}>
    
  </div>
  <img src={image} className="m-auto mb-[16px]" alt="" />
  <header className={`${styles.cardHeader}`}>
  {header}
  </header>
  <p className='mt-[16px] mb-[36px]'>
{text}  </p>
<button className={`${styles.button} flex items-center m-auto`}>
  {buttonText}
  <BsArrowRightShort  size={30}/>
</button>
</div>
  )
}

export default OfferCard