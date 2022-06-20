import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './FNavbar.module.css'

const FNavbar = () => {
  const [openSearchInput, setOpenSearchInput] = React.useState(false)

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <p className={styles.navbar_logo}>Logo</p>
        <ul className={styles.navbar_menu}>
          <li className={`${styles.navbar_menu_item} ${styles.active}`}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={`${styles.navbar_menu_item}`}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <div className={styles.navbar_search_container}>
          <div className={styles.navbar_search}>
            {openSearchInput && (<input type='text' className={styles.navbar_search_input} />)}
            <FaSearch size={20} className={styles.navbar_search_icon} onClick={() => setOpenSearchInput(!openSearchInput)} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default FNavbar