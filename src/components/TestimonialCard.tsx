import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
      <svg className="absolute top-8 right-8 w-12 h-12 text-gray-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <div className="relative z-10">
        <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">"{content}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-[var(--legacy-gray-dark)] rounded-full mr-4 flex items-center justify-center text-gray-500 font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-[var(--foreground)]">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
