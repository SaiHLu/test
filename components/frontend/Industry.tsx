import React from 'react'
import BrandButton from './base/BrandButton'
import styles from './Industry.module.css'

const Industry = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="/default.png"
          alt="Industry Images"
          className={styles.industry_image}
        />
        <div className={styles.industry_description}>
          <h3>Why We Stand Out in the Industry</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
          </p>
          <BrandButton>Learn More</BrandButton>
        </div>
      </div>
    </div>
  )
}

export default Industry
