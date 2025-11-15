'use client'
import React from 'react'

type HeroSectionProps = {
  title: string
  subtitle: string
  ctaText: string
}

export default function HeroSection({ title, subtitle, ctaText }: HeroSectionProps) {
  return (
    <section className="bg-background text-secondary text-center py-16 font-body">
      <h1 className="text-4xl font-heading font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      <button className="uppercase font-bold tracking-wide px-6 py-3 rounded text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition">
        {ctaText}
      </button>
    </section>
  )
}