import BlogCard from 'components/frontend/base/BlogCard'
import FSidebar from 'components/frontend/FSidebar'

import styles from 'styles/blog.module.css'
import BrandButton from 'components/frontend/base/BrandButton'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IBlog } from 'pages/d'
import { NextPageWithLayout } from 'pages/page'
import Question from 'components/frontend/Question'
import { ICategory } from 'pages/d/category'
import Breadcrumb from 'components/frontend/Breadcrumb'

const BlogIndex: NextPageWithLayout = ({
  blogs,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Breadcrumb />
      <div className={styles.wrapper}>
        <h1>Latest News</h1>
        <div className={styles.container}>
          <section className={styles.blog_section}>
            <div className={styles.blog_list}>
              {blogs.map((blog: IBlog) => (
                <div className={styles.blog} key={blog._id}>
                  <BlogCard
                    id={blog._id}
                    title={blog.title}
                    description={blog.description!}
                    imageUrl={blog.image}
                  />
                </div>
              ))}
            </div>

            <BrandButton backgroundColor="#00008b">Learn More</BrandButton>
          </section>

          <div className={styles.sidebar_list}>
            <FSidebar categories={categories} />
          </div>
        </div>
        <Question />
      </div>
    </>
  )
}

BlogIndex.blogLayout = true

export const getServerSideProps: GetServerSideProps = async () => {
  const blogResponse = await fetch(`${process.env.API_URL}/api/blog`, {
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

  const blogs: IBlog[] = await blogResponse.json()
  const categories: ICategory[] = await categoryResponse.json()

  return {
    props: {
      blogs,
      categories: categories.slice(0, 3),
    },
  }
}

export default BlogIndex
