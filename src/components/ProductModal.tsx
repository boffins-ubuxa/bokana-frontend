'use client';
import React, { useEffect } from 'react';
import { Product, ProductVariant } from '@/data/products';
import ProductMediaView from './ProductMediaView';
import Button from './ui/Button';

interface ProductModalProps {
  product: Product;
  initialVariant?: ProductVariant;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, initialVariant, isOpen, onClose }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = React.useState<ProductVariant | undefined>(initialVariant);
  const [activeMediaIndex, setActiveMediaIndex] = React.useState(0);

  // Reset state when product changes
  useEffect(() => {
    setSelectedVariant(initialVariant || (product.variants ? product.variants[0] : undefined));
    setActiveMediaIndex(0);
  }, [product, initialVariant]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentMediaList = selectedVariant ? selectedVariant.media : product.media;
  const currentMedia = currentMediaList[activeMediaIndex] || currentMediaList[0];

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in ordering the ${product.name}${selectedVariant ? ` (${selectedVariant.color})` : ''}.`);
  const whatsappUrl = `https://wa.me/2347070708571?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--foreground)] hover:bg-gray-100 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media Gallery */}
        <div className="md:w-1/2 bg-[var(--bokana-blush)] relative min-h-[300px] md:min-h-[500px]">
          <div className="absolute inset-0">
            <ProductMediaView 
              media={currentMedia} 
              alt={`${product.name} - View ${activeMediaIndex + 1}`} 
            />
          </div>
          
          {/* Media Thumbnails */}
          {currentMediaList.length > 1 && (
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 px-4 z-10">
              {currentMediaList.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all shadow-md bg-white ${
                    activeMediaIndex === idx ? 'border-[var(--bokana-amber)] scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <ProductMediaView media={media} alt={`Thumbnail ${idx + 1}`} className="w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto flex flex-col">
          <div className="text-sm font-semibold text-[var(--bokana-amber)] tracking-widest uppercase mb-2">
            {product.category}
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">
            {product.name}
          </h2>
          
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            {product.description}
          </p>

          {/* Variants Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
                Select Color: <span className="text-gray-500 font-normal">{selectedVariant?.color}</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {product.variants.map((variant, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setActiveMediaIndex(0); // Reset gallery to first media of new variant
                    }}
                    className={`group relative w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedVariant?.color === variant.color 
                        ? 'border-[var(--bokana-amber)] shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span 
                      className="w-8 h-8 rounded-full block shadow-inner"
                      style={{ backgroundColor: variant.colorCode }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Features List */}
          {product.features && product.features.length > 0 && (
            <div className="mb-10">
              <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-[var(--bokana-amber)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-6">
            <Button variant="whatsapp" href={whatsappUrl} className="w-full py-4 text-lg shadow-xl shadow-[var(--bokana-amber)]/20">
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
