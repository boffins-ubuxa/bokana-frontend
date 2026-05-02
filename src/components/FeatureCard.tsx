import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="motion-rise motion-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--bokana-amber)]/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-[var(--bokana-slate)]/10 text-[var(--bokana-slate)] flex items-center justify-center mb-6">
        {icon || (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
