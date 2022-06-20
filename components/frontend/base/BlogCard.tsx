import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import styles from './BlogCard.module.css'

export interface IBlogCard {
  id: string
  title?: string
  imageUrl?: string
  date?: string
  description: string
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  title,
  imageUrl,
  date,
  description,
  ...rest
}) => {
  return (
    <div className={styles.card} {...rest}>
      <img
        src={imageUrl ?? '/default.png'}
        alt="Avatar"
        className={styles.blog_image}
      />
      <div className={styles.container}>
        <h4>
          <b>
            {title?.substring(0, 20) ??
              'Lorem ipsum dolor sit amet consectetur'}
          </b>
        </h4>
        <p className={styles.blog_info}>
          <span>User</span>
          <span>
            {date
              ? new Date(date).toLocaleDateString()
              : new Date().toLocaleDateString()}
          </span>
        </p>
        <p>{description.substring(0, 100)}</p>

        <Link href={`/blog/${id}`}>
          <a className={styles.read_more}>
            <span>Read More</span>
            <FaArrowRight style={{ marginLeft: '0.4rem' }} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
