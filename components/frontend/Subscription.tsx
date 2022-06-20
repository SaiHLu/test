import React from 'react'
import styles from './Subscription.module.css'

const Subscription = () => {
  return (
    <section className={styles.subscribe_container}>
      <div className={styles.subscribe_content}>
        <h2>Subscribe to KBZ Money Alerts & get KBZ Money Alerts</h2>

        <div className={styles.subscribe_input_container}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.subscribe_input}
          />

          <button className={styles.subscribe_btn}>Subscribe Now</button>
        </div>
      </div>
    </section>
  )
}

export default Subscription
