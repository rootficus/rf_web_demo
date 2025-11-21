'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1D21] text-white px-6 md:px-12 lg:px-[110px] py-[80px]">
      <div className="max-w-[1990px] mx-auto flex flex-col gap-[60px]">
        {/* Top Section */}
        <section className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Block */}
          <div className="flex flex-col gap-8 max-w-[843px]">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src="/unionfooter.png" alt="RFBite logo" className="w-[50px] h-[50px] object-contain" />
              <h2 className="text-[48px] md:text-[75px] leading-[91px] font-inria ml-2">RFBite</h2>
            </div>

            {/* Address */}
            <address className="not-italic flex flex-col gap-2 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <p>2774 Oak Drive, Plattsburgh, New York</p>
              <p>Contact: <a href="tel:5185643200" className="underline">518-564-3200</a></p>
              <p>Email: <a href="mailto:contact@RFBite.com" className="underline">contact@RFBite.com</a></p>
            </address>

            {/* Social Icons */}
            <nav className="flex gap-6 mt-4 text-[20px]">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:contact@RFBite.com" aria-label="Email"><FaEnvelope /></a>
            </nav>
          </div>

          {/* Right Block */}
          <div className="grid grid-cols-2 gap-12">
            <nav className="flex flex-col gap-6 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <a href="#">About Us</a>
              <a href="#">Book a Demo</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </nav>
            <nav className="flex flex-col gap-6 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <a href="#">Analytics</a>
              <a href="#">Acquisition</a>
              <a href="#">Management</a>
              <a href="#">Sign In</a>
              <a href="#">Sign Up</a>
            </nav>
          </div>
        </section>

        {/* Divider */}
        <hr className="w-full h-[1.4px] bg-white/10" />

        {/* Bottom Section */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 text-[18px] md:text-[22px] leading-[33px] font-manrope">
          <p>© 2024 RFBiTE. All rights reserved</p>
          <nav className="flex flex-wrap gap-6 text-[16px] md:text-[19px] underline">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </nav>
        </section>
      </div>
    </footer>
  )
}
