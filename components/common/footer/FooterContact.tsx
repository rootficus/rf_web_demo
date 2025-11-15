'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function FooterContact() {
  return (
    <footer className="w-full bg-[#1D1D21] text-white pt-16 pb-8">
      <div className="max-w-[1359px] mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Branding & Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-bold font-poppins">RFBiTE Technologies</h3>
          <p className="text-[16px] text-gray-400 font-poppins leading-relaxed">
            Gurgaon, Haryana, India<br />
            contact@rfbite.com<br />
            +91 98765 43210
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-bold font-poppins">Explore</h3>
          <ul className="text-[16px] text-gray-400 font-poppins space-y-2">
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Column 3: Social & Legal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-bold font-poppins">Connect</h3>
          <div className="flex gap-4 text-[20px] text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:contact@rfbite.com"><FaEnvelope /></a>
          </div>
          <p className="text-[14px] text-gray-500 font-poppins mt-4">
            © {new Date().getFullYear()} RFBiTE Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
