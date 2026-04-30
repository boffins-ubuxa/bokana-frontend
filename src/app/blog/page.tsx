import React from 'react';

export default function BlogPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[var(--foreground)] mb-6">Blog & News</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, product launches, and tips from Bokana Electronics.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
          <svg className="w-16 h-16 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H12" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-400 mb-2">No Articles Yet</h2>
          <p className="text-gray-500">Check back soon for our first blog post!</p>
        </div>
      </div>
    </div>
  );
}
