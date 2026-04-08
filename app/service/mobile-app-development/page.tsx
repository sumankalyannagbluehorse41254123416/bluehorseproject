
import BlogsSection from '@/component/service/BlogsSection'
import HeroSection from '@/component/service/mobile-app-development/HeroSection'
import ShopifyBanner from '@/component/service/ShopifyBanner'
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
            {/* <ShopifyBanner /> */}
            <ShopifyDevelopmentServices />
            <ShopifyExpertiseSection />
            <WhyChooseBlueHorse />
            <ShopifyCaseStudy />
            <ShopifyFAQ />
            <BlogsSection />
            <BrandLogos />

        </>
    )
}

export default page