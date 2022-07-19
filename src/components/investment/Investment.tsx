import React from 'react'
import styles from "./Investment.module.scss"
const Investment = () => {
  return (
    <section className={styles.section}>
      <article className='container md:pl-[61px] md:pr-[57px] pt-[44px] pb-[38px] px-[23px]'>
        <div className={styles.textContainer}>
          <header className={styles.header}>
            A crypto investment platform that invests in you
          </header>
          <p className={styles.text}>We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it.
          </p>
        </div>
        <button className={styles.btn}>
          Get Started
        </button>
      </article>
    </section>
  )
}

export default Investment