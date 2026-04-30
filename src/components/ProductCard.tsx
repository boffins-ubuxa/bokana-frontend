'use client';
import React, { useState } from 'react';
import Button from './ui/Button';
import ProductMediaView from './ProductMediaView';
import { Product, ProductVariant } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product, variant?: ProductVariant) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  
  // Determine if product has variants
  const hasVariants = product.variants && product.variants.length > 0;
  const currentVariant = hasVariants ? product.variants![selectedVariantIndex] : undefined;
  
  // Determine the media to show
  // If variant exists, show first media of variant. Otherwise show default product media.
  const displayMedia = currentVariant?.media[0] || product.media[0];
  
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in ordering the ${product.name}${currentVariant ? ` (${currentVariant.color})` : ''}.`);
  const whatsappUrl = `https://wa.me/2347070708571?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
      
      {/* Media Container */}
      <div 
        className="aspect-square rounded-3xl mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer"
        onClick={() => onViewDetails && onViewDetails(product, currentVariant)}
      >
        <ProductMediaView 
          media={displayMedia} 
          alt={product.name} 
          className="group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        
        {/* Play Icon Overlay if it's a video */}
        {displayMedia?.type === 'video' && (
          <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 
            className="text-xl font-bold text-[var(--foreground)] cursor-pointer hover:text-[var(--bokana-amber)] transition-colors"
            onClick={() => onViewDetails && onViewDetails(product, currentVariant)}
          >
            {product.name}
          </h3>
          
          {/* Variant Swatches */}
          {hasVariants && (
            <div className="flex -space-x-1 mt-1">
              {product.variants!.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 relative ${
                    selectedVariantIndex === idx 
                      ? 'border-[var(--bokana-amber)] z-10 scale-110 shadow-sm' 
                      : 'border-white hover:scale-110 z-0'
                  }`}
                  style={{ backgroundColor: variant.colorCode }}
                  title={variant.color}
                  aria-label={`Select ${variant.color}`}
                />
              ))}
            </div>
          )}
        </div>

        <p className="text-gray-500 mb-3 text-sm leading-relaxed flex-grow line-clamp-2">
          {product.description}
        </p>
        
        {/* Features (limit to 2 for the card) */}
        {product.features && product.features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {product.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs font-medium text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bokana-amber)] mr-2 opacity-80 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
            {product.features.length > 2 && (
              <li className="text-xs text-gray-400 italic pl-3.5">+ more features</li>
            )}
          </ul>
        )}
        
        {/* Actions */}
        <div className="mt-auto pt-3 border-t border-gray-50 flex flex-col gap-3">
          <Button variant="whatsapp" href={whatsappUrl} className="w-full">
            Order on WhatsApp
          </Button>
          {onViewDetails && (
            <button 
              onClick={() => onViewDetails(product, currentVariant)}
              className="text-center text-sm font-semibold text-[var(--bokana-slate)] hover:text-[var(--bokana-amber)] transition-colors py-2"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
