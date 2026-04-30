import React from 'react';
import ProductSection from '@/components/ProductSection';

export default function ProductsPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <ProductSection 
        title="Our Complete Collection" 
        subtitle="Discover our range of reliable everyday electronics and powerbanks built to keep you connected."
      />
    </div>
  );
}
