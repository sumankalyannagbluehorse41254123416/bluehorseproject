import CaseStudySlider from '@/component/service/mobile-app-development/CaseStudySlider'
import ChallengesSection from '@/component/service/mobile-app-development/ChallengesSection'
import FAQ from '@/component/service/mobile-app-development/faq'
import HeroSection from '@/component/service/mobile-app-development/HeroSection'
import Services from '@/component/service/mobile-app-development/Services'
import WhyChoose from '@/component/service/mobile-app-development/WhyChoose'
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
            <FAQ/>
            <BrandLogos />
        </>
    )
}

export default page