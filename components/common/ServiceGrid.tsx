// components/common/ServiceGrid.tsx
import React from "react";

interface Skill {
  name: string;
  category: string;
}

export const ServiceGrid: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <section className="py-12">
    <h2 className="text-2xl font-semibold mb-6">Deploy Android Team with Specific Skill Set</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map((skill, idx) => (
        <div key={idx} className="p-4 border rounded shadow-sm bg-white">
          <h3 className="text-lg font-medium">{skill.name}</h3>
          <p className="text-sm text-gray-500">{skill.category}</p>
        </div>
      ))}
    </div>
  </section>
);