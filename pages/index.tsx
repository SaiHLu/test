import HeroSection from 'components/frontend/HeroSection'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
    </div>
  )
}

Home.homeLayout = true

export default Home
