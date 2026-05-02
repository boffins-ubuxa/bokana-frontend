"use client";

import Image from 'next/image';

const MOBILE_IMAGES = [
  // '/products/bokana-hero.png',
  // '/products/fan.jpeg',
  '/products/transparent.png',
  // '/products/bokana50mah.png',
];

export default function MobileHeroImage() {
  const imgSrc = MOBILE_IMAGES[0];

  // Using a radial mask to softly blend the edges of the images into the dark background
  return (
    <div className="absolute inset-0" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}>
      <Image
        src={imgSrc}
        alt="Bokana Product"
        fill
        className="object-contain opacity-70 transition-opacity duration-1000 ease-in-out"
        priority
      />
    </div>
  );
}
