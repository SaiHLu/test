import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.kbz_section}>
            <p>KBZ Logo</p>
            <ul className={styles.kbz_section_list}>
              <li className={styles.kbz_section_list_item}>
                <FaLocationArrow size={20} style={{ marginRight: '1rem' }} />
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </li>
              <li>
                <FaLocationArrow size={20} style={{ marginRight: '1rem' }} />
                <span>Support: admin@kbzmoney.com</span>
              </li>
              <li>
                <FaLocationArrow size={20} style={{ marginRight: '1rem' }} />
                <span>Hotline: +95 1234 12345</span>
              </li>
            </ul>
          </div>

          <div className={styles.quick_link_section}>
            <p>Quick Links</p>
            <div className={styles.quick_link_section_container}>
              <ul className={styles.quick_link_section_list}>
                <li>Home</li>
                <li>Service</li>
                <li>AML Technology</li>
                <li>Crypto Currencies</li>
                <li>Resources</li>
              </ul>
              <ul className={styles.quick_link_section_list}>
                <li>Contact</li>
                <li>About Us</li>
                <li>Client Support</li>
                <li>Alerts</li>
              </ul>
            </div>
          </div>

          <div className={styles.about_us_section}>
            <p>About Us</p>

            <ul className={styles.about_us_section_list}>
              <li>Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Carrier</li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.copy_right}>
          <p>Copy right 2022</p>
          <p className={styles.social_icons}>
            <FaFacebook size={20} style={{ marginRight: '1rem' }} />
            <FaLinkedin size={20} style={{ marginRight: '1rem' }} />
            <FaInstagram size={20} style={{ marginRight: '1rem' }} />
            <FaTwitter size={20} style={{ marginRight: '1rem' }} />
          </p>
        </div>

      </div>


    </div>
  )
}

export default Footer