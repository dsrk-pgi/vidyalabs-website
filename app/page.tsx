'use client'

import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyVidyaLabs from '@/components/home/WhyVidyaLabs'
import LiveDemos from '@/components/home/LiveDemos'
import Testimonials from '@/components/home/Testimonials'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <FeaturedProducts />
      <WhyVidyaLabs />
      <LiveDemos />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
