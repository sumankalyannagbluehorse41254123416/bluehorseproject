
import BlogsSection from '@/component/service/BlogsSection'
import CaseStudySlider from '@/component/service/mobile-app-development/CaseStudySlider'
import ChallengesSection from '@/component/service/mobile-app-development/ChallengesSection'
import HeroSection from '@/component/service/mobile-app-development/HeroSection'
import Services from '@/component/service/mobile-app-development/Services'
import WhyChoose from '@/component/service/mobile-app-development/WhyChoose'
import ShopifyCaseStudy from '@/component/service/ShopifyCaseStudy'
import ShopifyDevelopmentServices from '@/component/service/ShopifyDevelopmentServices'
import ShopifyExpertiseSection from '@/component/service/ShopifyExpertiseSection'
import ShopifyFAQ from '@/component/service/ShopifyFAQ'
import WhyChooseBlueHorse from '@/component/service/WhyChooseBlueHorse'
import BrandLogos from '@/component/UI/brand_wrap'
import React from 'react'

const page = () => {
    return (
        <>
            <HeroSection />
            <ChallengesSection />
            <Services />
            <CaseStudySlider />
            <WhyChoose/>
            <ShopifyCaseStudy />
            <ShopifyFAQ />
            <BlogsSection />
            <BrandLogos />

        </>
    )
}

export default page