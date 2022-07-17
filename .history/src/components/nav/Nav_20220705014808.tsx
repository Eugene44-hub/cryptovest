import React from 'react'

const navItems=["Buy Crypto","Trade","Coins","Portfolio"]


const Nav = () => {
  return (
    <nav>
      <div className='container flex justify-between md:pl-[61px] md:pr-[57px] text-white'>

        <span>
        CrytoVest
        </span>
      
      <ul className='flex justify-between'>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
        <li>Buy</li>
      </ul>

<div>
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