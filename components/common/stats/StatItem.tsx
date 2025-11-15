'use client'

import React from 'react'

interface StatItemProps {
  value: string
  label: string
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center space-y-1">
    <div className="text-3xl font-bold text-primary">{value}</div>
    <div className="text-sm text-muted">{label}</div>
  </div>
)

export default StatItem
