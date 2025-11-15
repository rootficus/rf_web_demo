'use client';
import React from 'react';
import StatItem from './stats/StatItem';

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Android Experts' },
];

export default function StatsSection() {
  return (
    <section className="flex flex-col items-center gap-12">
      <h2 className="text-[64px] font-bold text-[#1D1D21] text-center">
        Our Impact in Numbers
      </h2>
      <div className="flex flex-wrap justify-center gap-24">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}