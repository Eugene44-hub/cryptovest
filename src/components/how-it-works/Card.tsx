import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import styles from "./HowItWorks.module.scss"
interface Props{
  index:number,
  image:string;
  header:string;
  text:string;
  buttonText:string;
}
const Card = ({index,image,header,text,buttonText}:Props) => {
  return (
<div className={` ${styles.Card} relative rounded-[25px] py-[32px] px-[24px] lg:w-[30%] lg:m-0 m-auto ${"mb-5"} sm:w-[60%] text-center text-white`}>
  <p className={`${styles.numbering} text-start text-white opacity-[.2]`}>0{index+1}</p>
  <div className={`${styles.hoverBg} absolute h-full w-full top-0 left-0 rounded-[inherit]`}>
    
  </div>
  <img src={image} className="m-auto mb-[16px]" alt="" />
  <header className={`${styles.cardHeader}`}>
  {header}
  </header>
  <p className={`${styles.cardText} xl:w-[80%] m-auto  mt-[12px]`}>
{text}  </p>

</div>  )
}

export default Card