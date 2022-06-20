import Challenge from 'components/frontend/Challenge'
import HeroSection from 'components/frontend/HeroSection'
import Industry from 'components/frontend/Industry'
import OurSolution from 'components/frontend/OurSolution'
import Subscription from 'components/frontend/Subscription'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />

      <Challenge />

      <OurSolution />

      <Industry />

      <Subscription />
    </div>
  )
}

Home.homeLayout = true

export default Home
