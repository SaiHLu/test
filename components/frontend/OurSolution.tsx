import React from 'react'
import styles from './OurSolution.module.css'

const OurSolution = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="/default.png"
          alt="Challenge Images"
          className={styles.our_solution_image}
        />
        <div className={styles.our_solution_description}>
          <h3>Our Solutions</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurSolution
