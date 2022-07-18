import React from 'react'
import styles from "./Header.module.scss"

interface Props{
  children:string
}


const Header = ({children}:Props) => {
  return (
    <header className={`${styles.header} text-center `}>
   {children}
  </header>  )
}

export default Header