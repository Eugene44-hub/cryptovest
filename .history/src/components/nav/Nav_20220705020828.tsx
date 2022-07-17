import React from 'react'
import styles from "./Nav.module.scss"
const navItems=["Buy Crypto","Trade","Coins","Portfolio"]


const Nav = () => {
  return (
    <nav>
      <div className='container flex justify-between md:pl-[61px] md:pr-[57px] text-white'>

        <span className={`font-[700] ${styles.banner}`}>
        CrytoVest
        </span>
      
      <ul className='flex font-[500] w-[30%] justify-between'>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
      </ul>

<div className='font-[500]'>
<button>
        Log in
      </button>

      <button>
        Register
      </button>

</div>
      

      </div>
    </nav>
  )
}

export default Nav