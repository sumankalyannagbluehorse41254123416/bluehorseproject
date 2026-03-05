
import BlogsSection from '@/component/service/BlogsSection'
import ShopifyBanner from '@/component/service/ShopifyBanner'
import ShopifyCaseStudy from '@/component/service/ShopifyCaseStudy'
import ShopifyDevelopmentServices from '@/component/service/ShopifyDevelopmentServices'
import ShopifyExpertiseSection from '@/component/service/ShopifyExpertiseSection'
import ShopifyFAQ from '@/component/service/ShopifyFAQ'
import WhyChooseBlueHorse from '@/component/service/WhyChooseBlueHorse'
import React from 'react'

const page = () => {
  return (
    <>
      <ShopifyBanner />
      <ShopifyDevelopmentServices />
      <ShopifyExpertiseSection />
      <WhyChooseBlueHorse />
      <ShopifyCaseStudy />
      <ShopifyFAQ />
      <BlogsSection />

    </>
  )
}

export default page