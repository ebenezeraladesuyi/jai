// import React from 'react'

import Cars from "./Cars"
import CountUpSection from "./CountUp"
import Hero from "./Hero"
import Offer from "./Offer"
import Testimonies from "./Testimonies"

const HomeComp = () => {
  return (
    <div>
        <Hero />
        <CountUpSection />
        <Offer />
        <Cars />
        <Testimonies />
    </div>
  )
}

export default HomeComp