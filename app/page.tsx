'use client'

import Header from '@/components/common/Header'
import Breadcrumb from '@/components/common/Breadcrumb'
import Box from '@/components/common/Box'
import HeroSection from '@/components/common/HeroSection'
import AndroidSkillSection from '@/components/common/AndroidSkillSection'
import PortfolioShowcase from '@/components/common/portfolio/PortfolioShowCase'
// import StatsSection from '@/components/common/stats/StatsSection'
import FAQSection from '@/components/common/faq/FAQSection'
// import CTASection from '@/components/common/cta/CTASection'
import Eclipse from '@/components/common/visuals/Eclipse'
import Eclipse2 from '@/components/common/visuals/Eclipse2'
import Eclipse3 from '@/components/common/visuals/Eclipse3'
import EllipseGroup from '@/components/common/visuals/EllipseGroup'
import TrustedBySection from '@/components/common/trusted/TrustedBySection'
import LogoCarousel from '@/components/common/trusted/LogoCarousel'
import TrustStats from '@/components/common/trusted/TrustStats'
import ExpertiseSection from '@/components/common/expertise/ExpertiseSection'
import CallToActionBanner from '@/components/sections/CallToActionBanner'
import FooterCTA from '@/components/common/footer/FooterCTA'
import Footer from '@/components/common/footer/Footer'

export default function Page() {
  return (
    <>
      <Header />

      <div className="relative w-full bg-[#FAFAFA] overflow-hidden">
        <Eclipse />
        <Eclipse2 />
        <Eclipse3 />
        <EllipseGroup />

        <main className="relative z-[2] flex flex-col items-center w-full px-4 md:px-12 lg:px-24 py-8 space-y-24">
          <div className="w-full">
            <Breadcrumb />
          </div>

          <HeroSection
            title="Leading Android App Development Firm"
            subtitle="Enterprise-grade, user-friendly, and impactful Android apps using state-of-the-art technologies."
            ctaText="Consult Our Android Team"
          />

          <Box />

          <section className="flex flex-col items-center gap-6 text-center w-full max-w-[1359px]">
            <h2 className="text-[40px] md:text-[64px] leading-[77px] font-bold text-[#1D1D21] font-poppins">
              Deploy Android Team with Specific Skill Set
            </h2>
            <p className="text-[18px] md:text-[24px] leading-[48px] font-medium text-[rgba(113,128,150,0.9)] font-poppins">
              At RFBiTE, we connect you with top-tier software developers tailored to your needs. Our
              experts excel in specific technologies, ensuring customized solutions for your company.
            </p>
            <AndroidSkillSection />
          </section>

          <PortfolioShowcase />
          {/* <StatsSection /> */}

          <TrustedBySection />

          <div className="w-full flex justify-center mt-12">
            <LogoCarousel />
          </div>

          <div className="w-full flex justify-center mt-12">
            <TrustStats />
          </div>

          <FAQSection />

          {/* Expertise + CTA + FooterCTA stacked seamlessly */}
          <div className="w-full flex flex-col gap-0">
            <ExpertiseSection />
            <CallToActionBanner />
            <FooterCTA />
          </div>

          <Footer />
        </main>
      </div>
    </>
  )
}
