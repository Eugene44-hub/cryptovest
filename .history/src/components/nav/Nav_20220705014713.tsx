import React from 'react'

const navItems=["Buy Crypto","Trade","Coins","Portfolio"]


const Nav = () => {
  return (
    <nav>
      <div className='container justify-between md:pl-[61px] md:pr-[57px] text-white'>

        <span>
        CrytoVest
        </span>
      
      <ul>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
      </ul>

      <button>
        Log in
      </button>

      <button>
        Register
      </button>


      </div>
    </nav>
  )
}

export default Nav