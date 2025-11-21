import './globals.css'
import { Poppins } from 'next/font/google'

// Global components
import Header from '@/components/common/Header'
import Footer from '@/components/common/footer/Footer'

// Page‑level components
import Breadcrumb from '@/components/common/Breadcrumb'
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'RFBiTE Android Services',
  description:
    'Deploy top-tier Android developers with specialized skills tailored to your business needs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-poppins font-sans bg-[#FAFAFA] text-[#1D1D21]`}
      >
        <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
          {/* Global Header */}
          <Header />

          {/* Full Website Content */}
          <main className="flex-1 w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-32 xl:px-48 py-12 space-y-32">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Hero Section with eclipse visuals */}
            <div className="relative w-full">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Eclipse />
                <Eclipse2 />
                <Eclipse3 />
                <EllipseGroup />
              </div>
              <div className="relative z-10 w-full">
                <HeroSection />
              </div>
            </div>

            {/* Android Skill Section */}
            <section className="flex flex-col items-center gap-6 text-center w-full">
              <h2 className="text-[40px] md:text-[64px] leading-tight font-bold text-[#1D1D21] font-poppins max-w-[1400px]">
                Deploy <span className="bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">Android Team</span> with Specific Skill Set
              </h2>
              <p className="text-[18px] md:text-[24px] leading-relaxed font-medium text-[rgba(113,128,150,0.9)] font-poppins max-w-[1000px]">
                At RFBiTE, we connect you with top-tier software developers tailored to your needs.
                Our experts excel in specific technologies, ensuring customized solutions for your company.
              </p>
              <AndroidSkillSection />
            </section>

            {/* Showcase & Trusted Sections */}
            <PortfolioShowcase />
            <TrustedBySection />

            <div className="w-full flex justify-center">
              <LogoCarousel />
            </div>

            <div className="w-full flex justify-center">
              <TrustStats />
            </div>

            <FAQSection />

            {/* Expertise + CTA + FooterCTA */}
            <div className="w-full flex flex-col gap-0">
              <ExpertiseSection />
              <CallToActionBanner />
              <FooterCTA />
            </div>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
