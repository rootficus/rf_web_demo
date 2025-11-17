'use client'

import Header from '@/components/common/Header'
import Breadcrumb from '@/components/common/Breadcrumb'
// import Box from '@/components/common/Box' // Uncomment if Box is used inside HeroSection
import HeroSection from '@/components/common/HeroSection'
import AndroidSkillSection from '@/components/common/AndroidSkillSection'
import PortfolioShowcase from '@/components/common/portfolio/PortfolioShowCase'
import FAQSection from '@/components/common/faq/FAQSection'
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

      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#FAFAFA]">
        {/* Visual Layers */}
        <Eclipse />
        <Eclipse2 />
        <Eclipse3 />
        <EllipseGroup />

        <main className="relative z-[2] flex flex-col items-center w-full px-4 md:px-12 lg:px-24 py-8 space-y-24">
          {/* Breadcrumb */}
          <div className="w-full">
            <Breadcrumb />
          </div>

          {/* Hero Section */}
          <HeroSection
            title="Leading Android App Development Firm"
            subtitle="Enterprise-grade, user-friendly, and impactful Android apps using state-of-the-art technologies."
            ctaText="Consult Our Android Team"
          />

          {/* Android Skill Section pushed further down */}
          <section className="mt-[400px] flex flex-col items-center gap-6 text-center w-full max-w-[1359px]">
            <h2 className="text-[40px] md:text-[64px] leading-[77px] font-bold text-[#1D1D21] font-poppins">
              Deploy Android Team with Specific Skill Set
            </h2>
            <p className="text-[18px] md:text-[24px] leading-[48px] font-medium text-[rgba(113,128,150,0.9)] font-poppins">
              At RFBiTE, we connect you with top-tier software developers tailored to your needs. Our
              experts excel in specific technologies, ensuring customized solutions for your company.
            </p>
            <AndroidSkillSection />
          </section>

          {/* Portfolio Showcase */}
          <PortfolioShowcase />

          {/* Trusted By Section */}
          <TrustedBySection />

          {/* Logo Carousel */}
          <div className="w-full flex justify-center">
            <LogoCarousel />
          </div>

          {/* Trust Stats */}
          <div className="w-full flex justify-center">
            <TrustStats />
          </div>

          {/* FAQ Section */}
          <FAQSection />

          {/* Expertise + CTA + FooterCTA */}
          <div className="w-full flex flex-col gap-0">
            <ExpertiseSection />
            <CallToActionBanner />
            <FooterCTA />
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  )
}
