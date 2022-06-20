import React from 'react'
import BrandButton from './base/BrandButton'

import styles from './Question.module.css'

const Question = () => {
  return (
    <div className={styles.container}>
      <h3>Have Questions or Need to Book a Consultation?</h3>

      <BrandButton backgroundColor='red' btnSize='150px'>Call Us Now</BrandButton>
    </div>
  )
}

export default Question