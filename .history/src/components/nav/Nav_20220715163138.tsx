import React from 'react'
import styles from "./Nav.module.scss"
const navItems = ["Buy Crypto", "Trade", "Coins", "Portfolio"]
import { AiOutlineMenu } from "react-icons/ai"

const Nav = () => {
  return (
    <nav className='pt-[37px]'>
      <div className='container  px-[24px] md:pl-[61px] md:pr-[57px] text-white'>

        <div className='flex justify-between items-center'>

          <span className={`font-[700] ${styles.banner}`}>
            CrytoVest
          </span>

          <div className='hidden lg:flex justify-between items-center flex-1'>
            <ul className='flex font-[500] m-auto w-[30%] justify-between'>
              {navItems.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

            <div className='font-[500]'>
              <button className='mr-[34px]'>
                Log in
              </button>

              <button className={`${styles.btn} w-[143px]`}>
                Register
              </button>
            </div>

          </div>
          <AiOutlineMenu color="white" size={24} className="font-bold lg:hidden"/>


        </div>


      </div>
    </nav>
  )
}

export default Nav