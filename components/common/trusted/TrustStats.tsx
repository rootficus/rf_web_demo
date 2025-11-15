'use client'

import StatsGrid from '@/components/atoms/StatsGrid'

const stats = [
  { value: '1B+', label: 'Engaged Customers' },
  { value: '7x', label: 'Avg ROAS increase' },
  { value: '35', label: 'Awards' },
  { value: '-42%', label: 'Avg CAC reduction' },
]

const TrustStats = () => <StatsGrid stats={stats} />

export default TrustStats
