import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import styles from './FNavbarInfo.module.css'

const FNavbarInfo = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar_info}>
        <p className={styles.navbar_info_phone}>
          <FiPhone /> <span>+95 123 456</span>
        </p>
        <p>UPDATES - Click Here To Update KBZ - UPDATE</p>
        <p className={styles.navbar_info_mail}>
          <span>admin@kbzmoney.com</span> <FiMail />
        </p>
      </nav>
    </div>
  )
}

export default FNavbarInfo
