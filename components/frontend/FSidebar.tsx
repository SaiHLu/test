import { IBlog } from 'pages/d'
import { ICategory } from 'pages/d/category'
import React from 'react'
import styles from './FSidebar.module.css'

interface CategoryWithBlog extends ICategory {
  blogs: IBlog[]
}

export interface IFSidebarProps {
  categories: CategoryWithBlog[]
}

const FSidebar: React.FC<IFSidebarProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search here"
        className={styles.search_input}
      />

      <section className={styles.categories}>
        <h3>Categories</h3>
        <ul className={styles.categories_list}>
          {categories.map((category) => (
            <li key={category._id}>
              <span>{category.name}</span>
              <span>{category.blogs.length}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.recent_post}>
        <h3>Recent Post</h3>
        <ul className={styles.recent_post_list}>
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>
              <img
                src="/default.png"
                className={styles.recent_post_image}
                alt="Blog Image"
              />
              <span className={styles.recent_post_list_item_info}>
                <b>Lorem ipsum dolor, sit amet consectetur.</b>
                <small>8 hours ago</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.tags}>
        <h3>Tag</h3>
        <div className={styles.tags_list}>
          <span>Tag1</span>
          <span>Tag2</span>
          <span>Tag3 is the most</span>
        </div>
      </section>

      <section className={styles.subscribe_container}>
        <h2>Subscribe to KBZ Money Alerts</h2>

        <input
          type="email"
          placeholder="Email Address"
          className={styles.subscribe_input}
        />

        <button className={styles.subscribe_btn}>Subscribe Now</button>
      </section>
    </div>
  )
}

export default FSidebar
