import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './Breadcrumb.module.css'

export interface IBreadcrumbProps {
  title?: string;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>{title ?? 'Blog'}</h2>
        <ul className={styles.breadcrumbs}>
          <li>Home</li>
          <FaArrowRight fontSize={12} style={{ fontWeight: 'lighter' }} />
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb