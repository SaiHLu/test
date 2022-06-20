import { IBlog } from 'pages/d'
import { ICategory } from 'pages/d/category'
import React from 'react'
import styles from './FSidebar.module.css'

interface CategoryWithBlog extends ICategory {
  blogs: IBlog[]
}

export interface IFSidebarProps {
  categories: CategoryWithBlog[]
  blogs?: IBlog[]
  blog?: IBlog
}

const FSidebar: React.FC<IFSidebarProps> = ({ categories, blogs, blog }) => {
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
          {blogs?.map((blog) => (
            <li key={blog._id}>
              <img
                src={blog.image}
                className={styles.recent_post_image}
                alt="Blog Image"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = '/default.png'
                }}
              />
              <span className={styles.recent_post_list_item_info}>
                <b>{blog.description?.substring(0, 50)}</b>
                <small>8 hours ago</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {blogs && (
        <section className={styles.tags}>
          <h3>Tag</h3>
          <div className={styles.tags_list}>
            {blogs.map((blog) =>
              blog?.tags
                ?.split(',')
                .map((tag, index) => (
                  <span key={`${blog._id} + ${index}`}>{tag}</span>
                )),
            )}
          </div>
        </section>
      )}

      {blog && (
        <section className={styles.tags}>
          <h3>Tag</h3>
          <div className={styles.tags_list}>
            {blog?.tags?.split(',').map((tag, index) => (
              <span key={`${blog._id} + ${index}`}>{tag}</span>
            ))}
          </div>
        </section>
      )}

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
