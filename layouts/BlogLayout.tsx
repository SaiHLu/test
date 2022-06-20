import FNavbar from 'components/frontend/FNavbar'
import FNavbarInfo from 'components/frontend/FNavbarInfo'
import Footer from 'components/frontend/Footer'
import React from 'react'

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <FNavbarInfo />
      <FNavbar />
      {children}
      <Footer />
    </>
  )
}

export default BlogLayout