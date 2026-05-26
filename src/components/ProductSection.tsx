'use client';
import React, { useState } from 'react';
import { Product, productsCatalog, ProductVariant } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface ProductSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  category?: string;
  excludeCategory?: string;
}

export default function ProductSection({ 
  title = "Everyday Power Solutions", 
  subtitle = "Built to keep you connected when it matters most.",
  limit,
  category,
  excludeCategory
}: ProductSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product, variant?: ProductVariant) => {
    setSelectedProduct(product);
    setSelectedVariant(variant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setSelectedVariant(undefined);
    }, 300); // Wait for transition before clearing data
  };

  let displayProducts = productsCatalog;
  if (category) {
    displayProducts = displayProducts.filter(p => p.category === category);
  }
  if (excludeCategory) {
    displayProducts = displayProducts.filter(p => p.category !== excludeCategory);
  }
  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  return (
    <section className="motion-fade py-20 bg-[var(--bokana-blush)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="motion-rise text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Responsive Grid: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          initialVariant={selectedVariant}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
