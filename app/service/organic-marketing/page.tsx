
import MarketBanner from '@/component/service/organic-marketing/MarketBanner'
import MarketChallenges from '@/component/service/organic-marketing/MarketChallenges'
import MarketSlider from '@/component/service/organic-marketing/MarketSlider'
import Servicesmarket from '@/component/service/organic-marketing/Servicesmarket'
import React from 'react'

const page = () => {
  return (
    <>
      <MarketBanner />
      <Servicesmarket />
      <MarketChallenges />
      <MarketSlider />
      
    </>
  )
}

export default page