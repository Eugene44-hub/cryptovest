import React from 'react'
import styles from "./Nav.module.scss"
const navItems = ["Buy Crypto", "Trade", "Coins", "Portfolio"]
import { AiOutlineMenu } from "react-icons/ai"

const Nav = () => {
  return (
    <nav className='pt-[37px]'>
      <div className='container  px-[24px] md:pl-[61px] md:pr-[57px] text-white'>

        <div className='flex justify-between'>

          <span className={`font-[700] ${styles.banner}`}>
            CrytoVest
          </span>

          <div className='hidden md:block'>
            <ul className='flex font-[500] w-[30%] justify-between'>
              {navItems.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

            <div className='font-[500]'>
              <button>
                Log in
              </button>

              <button>
                Register
              </button>
            </div>

           <AiOutlineMenu color="white" size={10}/>
          </div>


        </div>


      </div>
    </nav>
  )
}

export default Nav