'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1D21] text-white px-6 md:px-12 lg:px-[110px] py-[80px]">
      <div className="max-w-[1990px] mx-auto flex flex-col gap-[60px]">
        {/* Top Section: Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Block: Logo + Address + Social */}
          <div className="flex flex-col gap-8 max-w-[843px]">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-[62px] h-[63px] border-[2.3px] border-white bg-white" />
              <div className="w-[38px] h-[63px] bg-[#4159F1] border-[2.3px] border-[#4159F1]" />
              <div className="w-[38px] h-[63px] bg-[#4159F1] border-[2.3px] border-[#4159F1] rotate-180" />
              <h2 className="text-[48px] md:text-[75px] leading-[91px] font-inria ml-4">Jionex</h2>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <p>Address: 2774 Oak Drive, Plattsburgh, New York</p>
              <p>Contact: 518-564-3200</p>
              <p>Email: <a href="mailto:contact@RFBite.com" className="underline">contact@RFBite.com</a></p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4 text-[20px]">
              <FaLinkedin />
              <FaTwitter />
              <FaGithub />
              <FaEnvelope />
            </div>
          </div>

          {/* Right Block: Link Columns */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-6 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <a href="#">About Us</a>
              <a href="#">Book a Demo</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-6 text-[18px] md:text-[19px] leading-[29px] font-manrope font-semibold">
              <a href="#">Analytics</a>
              <a href="#">Acquisition</a>
              <a href="#">Management</a>
              <a href="#">Sign In</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1.4px] bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[18px] md:text-[22px] leading-[33px] font-manrope">
          <p>© 2024 RFBiTE. All rights reserved</p>
          <div className="flex flex-wrap gap-6 text-[16px] md:text-[19px] underline">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
