'use client'

import React from 'react'

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '2B+', label: 'Engaged Customers' },
  { value: '7x', label: 'Avg ROAS Increase' },
  { value: '-42%', label: 'Avg CAC Reduction' },
]

const StatsSection = () => (
  <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
    {stats.map((stat, index) => (
      <div key={index} className="text-center space-y-1">
        <div className="text-3xl font-bold text-primary">{stat.value}</div>
        <div className="text-sm text-muted">{stat.label}</div>
      </div>
    ))}
  </section>
)

export default StatsSection
