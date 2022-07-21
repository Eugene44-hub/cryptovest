import React from 'react'
import Header from '../header/Header'
import binance from "../../assets/images/our-partners/Binance.png"
import coinbase from "../../assets/images/our-partners/coinbase.png"
import luno from "../../assets/images/our-partners/luno.png"
import bundle from "../../assets/images/our-partners/bundle.png"
const partners: string[] = [binance, coinbase, luno, bundle]
const OurPartners = () => {
  return (
    <section className='md:mt-[67px] mt-[72px] '>
      <article className=''>
        <Header>Our Partners</Header>
        <div className=' bg-[#092058]  py-[30px] md:mt-[65px] mt-[24px]'>
          <div className='container md:pl-[61px] sm:flex md:pr-[57px] flex-wrap justify-between items-center   px-[23px]'>

          {partners.map((image: string, index: number) => ( 
            <div className={` md:w-[20%] xl:h-[122px] md:h-[80px] md:mb-0 mb-5 lg:mx-0 sm:mx-2  m-auto`}>
            <img src={image} className="md:h-full sm:w-auto w-[50%] sm:m-0 m-auto"  alt="partners" />
            </div>
          ))}
        </div>
        </div>

      </article>
    </section>
  )
}

export default OurPartners