import CaseStudySlider from '@/component/service/software-development-for-startups/CaseStudySlider'
import StartupBanner from '@/component/service/software-development-for-startups/StartupBanner'
import StartupChallenges from '@/component/service/software-development-for-startups/StartupChallenges'
import TestimonialSlider from '@/component/service/software-development-for-startups/TestimonialSlider'
import React from 'react'

const page = () => {
  return (
    <>
    <StartupBanner />
    <StartupChallenges />
    <CaseStudySlider />
    <TestimonialSlider />
    </>
  )
}

export default page