import React from 'react'
import styles from "./Nav.module.scss"
const navItems=["Buy Crypto","Trade","Coins","Portfolio"]


const Nav = () => {
  return (
    <nav>
      <div className='container  justify-between md:pl-[61px] md:pr-[57px] text-white'>

<div className='flex'>

        <span className={`font-[700] ${styles.banner}`}>
        CrytoVest
        </span>
      
      <ul className='flex hidden font-[500] w-[30%] justify-between'>
       {navItems.map((item,index)=>(<li key={index}>{item}</li>))}
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
      

      </div>
    </nav>
  )
}

export default Nav