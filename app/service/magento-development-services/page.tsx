
import BlogsSection from '@/component/service/BlogsSection'
import Expertise from '@/component/service/magento-development-services/Expertise'
import MagentoFAQ from '@/component/service/magento-development-services/Faq'
import MagentoBlog from '@/component/service/magento-development-services/MagentoBlog'
import MagentoServices from '@/component/service/magento-development-services/MagentoServices'
import SolutionBanner from '@/component/service/magento-development-services/SolutionBanner'
import WhyChooseBlueHorse from '@/component/service/magento-development-services/WhyChooseBlueHorse'
import WhyChoose from '@/component/service/mobile-app-development/WhyChoose'


import ShopifyBanner from '@/component/service/ShopifyBanner'
import ShopifyCaseStudy from '@/component/service/ShopifyCaseStudy'
import ShopifyDevelopmentServices from '@/component/service/ShopifyDevelopmentServices'
import ShopifyExpertiseSection from '@/component/service/ShopifyExpertiseSection'
import ShopifyFAQ from '@/component/service/ShopifyFAQ'

import BrandLogos from '@/component/UI/brand_wrap'
import React from 'react'

const page = () => {
  return (
    <>
      <SolutionBanner />
      <MagentoServices />
      <Expertise />
      <WhyChooseBlueHorse />
      <MagentoFAQ/>
      <MagentoBlog/>
      
      <BrandLogos />

    </>
  )
}

export default page