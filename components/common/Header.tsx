'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-background text-foreground border-b border-gray-200 dark:border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Union.png"
            alt="ROOTFICUS Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-bold tracking-tight gradient-text">RFBiTE</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/services/android" className="hover:underline">Services</Link>
          <Link href="/portfolio" className="hover:underline">Staff Augmentation</Link>
          <Link href="/contact" className="hover:underline">Case Studies</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/How" className="hover:underline">How it Works</Link>
          <Link href="/hire" className="hover:underline">Hire</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="text-white text-sm font-semibold transition rounded-xl flex items-center justify-center"
          style={{
            width: '176px',
            height: '54px',
            padding: '20px 36px',
            background: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
            gap: '13.82px',
          }}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  )
}