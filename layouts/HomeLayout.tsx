import FNavbar from 'components/frontend/FNavbar'
import { NextPageWithLayout } from 'pages/page'
import React from 'react'

import styles from 'layouts/Home.module.css'
import FNavbarInfo from 'components/frontend/FNavbarInfo'
import Footer from 'components/frontend/Footer'

const HomeLayout: NextPageWithLayout<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <>
      <FNavbarInfo />
      <FNavbar />
      {children}
      <Footer />
    </>
  )
}


export default HomeLayout