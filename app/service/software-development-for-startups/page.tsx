import CaseStudySlider from '@/component/service/software-development-for-startups/CaseStudySlider'
import ContactSection from '@/component/service/software-development-for-startups/ContactSection'
import FASection from '@/component/service/software-development-for-startups/FASection'
import StartupBanner from '@/component/service/software-development-for-startups/StartupBanner'
import StartupChallenges from '@/component/service/software-development-for-startups/StartupChallenges'
import TestimonialSlider from '@/component/service/software-development-for-startups/TestimonialSlider'
import WhyChoose from '@/component/service/software-development-for-startups/WhyChoose'
import BrandLogos from '@/component/UI/brand_wrap'
import React from 'react'

const page = () => {
  return (
    <>
    <StartupBanner />
    <StartupChallenges />
    <CaseStudySlider />
    <TestimonialSlider />
    <WhyChoose />
    <FASection />
    <ContactSection />
    <BrandLogos />
    </>
  )
}

export default page