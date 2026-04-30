import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

export default function TestimonialsPage() {
  return (
    <div className="py-24 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[var(--foreground)] mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what people are saying about their Bokana Electronics experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Chinedu O." 
            role="Business Owner"
            content="The Bokana Power Pro has been a lifesaver for my shop. When the power goes out, I can still charge my PoS machine and phone without any worries."
          />
          <TestimonialCard 
            name="Amina Y." 
            role="Student"
            content="I love my Bokana Mini Fan! It's so quiet and the battery lasts for hours. Perfect for studying during hot afternoons."
          />
          <TestimonialCard 
            name="Tunde A." 
            role="Freelancer"
            content="Quality you can actually feel. I've used many powerbanks, but the fast charging on this one is genuinely impressive. Worth every naira."
          />
          <TestimonialCard 
            name="Sarah J." 
            role="Content Creator"
            content="I never leave the house without my Bokana Power Mini. It fits perfectly in my small bag and gives my phone a full charge when I'm out shooting videos."
          />
          <TestimonialCard 
            name="Emmanuel K." 
            role="Tech Enthusiast"
            content="The build quality of the Power Ultra is insane. It's solid, the LED display is accurate, and it can literally power all my devices during a long trip."
          />
        </div>
      </div>
    </div>
  );
}
