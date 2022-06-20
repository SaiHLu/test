import React from 'react'
import styles from './Challenge.module.css'

const Challenge = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="/default.png"
          alt="Challenge Images"
          className={styles.challenge_image}
        />
        <div className={styles.challenge_description}>
          <h3>The Current Challenges</h3>

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

export default Challenge
