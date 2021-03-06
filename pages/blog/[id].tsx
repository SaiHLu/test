import BlogCard from 'components/frontend/base/BlogCard'
import Breadcrumb from 'components/frontend/Breadcrumb'
import FSidebar from 'components/frontend/FSidebar'
import Subscription from 'components/frontend/Subscription'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IBlog } from 'pages/d'
import { ICategory } from 'pages/d/category'
import { NextPageWithLayout } from 'pages/page'
import React from 'react'
import { FaCalendar, FaClock, FaEye } from 'react-icons/fa'
import styles from 'styles/blogDetail.module.css'

const BlogDetail: NextPageWithLayout = ({
  blog,
  blogs,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Breadcrumb title={blog.title} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.blog_section}>
            <h3>{blog.title}</h3>

            <div className={styles.blog_info}>
              <div className={styles.profile}>
                <img
                  src="/profile.jpeg"
                  className={styles.profile_image}
                  alt="Profile Image"
                />
                <span>User</span>
              </div>
              <div className={styles.blog_overview}>
                {/* <span> */}
                <FaCalendar />
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : new Date().toLocaleDateString()}
                {/* </span>
              <span> */}
                <FaEye /> 2.5k views
                {/* </span>
              <span> */}
                <FaClock /> 4 min read
                {/* </span> */}
              </div>
            </div>

            <div className={styles.blog_image_section}>
              <img
                src={blog.image}
                className={styles.blog_image}
                alt="Blog Image"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = '/default.png'
                }}
              />
            </div>

            <p className={styles.blog_description}>{blog.description}</p>
          </div>

          <div className={styles.sidebar_list}>
            <FSidebar categories={categories} blog={blog} blogs={blogs} />
          </div>
        </div>

        <div className={styles.related_posts}>
          <h3>Related Posts</h3>

          <div className={styles.blog_list}>
            {blogs.map((item: IBlog) => (
              <div className={styles.blog} key={item._id}>
                <BlogCard
                  id={item._id}
                  title={item.title}
                  description={item.description!}
                  imageUrl={item.image}
                  date={blog.createdAt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Subscription />
    </>
  )
}

BlogDetail.blogLayout = true

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string
  const blogResponse = await fetch(`${process.env.API_URL}/api/blog/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const blogsResponse = await fetch(`${process.env.API_URL}/api/blog`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const categoryResponse = await fetch(
    `${process.env.API_URL}/api/category/all`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const blog: IBlog = await blogResponse.json()
  const blogs: IBlog[] = await blogsResponse.json()
  const categories: ICategory[] = await categoryResponse.json()

  return {
    props: {
      blog,
      blogs: blogs.slice(0, 4),
      categories: categories.slice(0, 3),
    },
  }
}

export default BlogDetail
