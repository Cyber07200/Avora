import Header from '../../components/Header/Header.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import WhatWeBuild from '../../components/WhatWeBuild/WhatWeBuild.jsx'
import ExpressWork from '../../components/ExpressWork/ExpressWork.jsx'
import Reviews from '../../components/Reviews/Reviews.jsx'
import WhyUs from '../../components/WhyUs/WhyUs.jsx'
import PriceCalculator from '../../components/PriceCalculator/PriceCalculator.jsx'
import Process from '../../components/Process/Process.jsx'
import Reliability from '../../components/Reliability/Reliability.jsx'
import FinalCta from '../../components/FinalCta/FinalCta.jsx'
import Footer from '../../components/Footer/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <ExpressWork />
        <Reviews />
        <WhyUs />
        <PriceCalculator />
        <Process />
        <Reliability />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
