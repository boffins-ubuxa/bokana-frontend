'use client';
import React, { useRef, useEffect } from 'react';
import { ProductMedia } from '@/data/products';

interface ProductMediaViewProps {
  media: ProductMedia;
  className?: string;
  alt: string;
}

export default function ProductMediaView({ media, className = '', alt }: ProductMediaViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video plays when it mounts, especially on mobile where autoplay policies can be strict
  useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented. Usually happens on mobile low-power mode.
          // Since it's muted, it should play, but just catch the error.
        });
      }
    }
  }, [media]);

  if (media.type === 'video') {
    return (
      <div className={`relative w-full h-full bg-[var(--bokana-blush)] overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          src={media.url}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  // Fallback to image
  return (
    <div className={`relative w-full h-full bg-[var(--bokana-blush)] overflow-hidden flex items-center justify-center ${className}`}>
      <img
        src={media.url}
        alt={alt}
        className="object-cover w-full h-full"
        onError={(e) => {
          // Fallback if image fails to load
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = '';
          target.className = 'hidden';
          const parent = target.parentElement;
          if (parent) {
            const fallbackText = document.createElement('span');
            fallbackText.className = 'text-gray-400 text-sm font-medium';
            fallbackText.textContent = alt || 'Product Image';
            parent.appendChild(fallbackText);
          }
        }}
      />
    </div>
  );
}
