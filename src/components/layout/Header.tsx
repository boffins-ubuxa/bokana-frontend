"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`top-0 z-50 w-full transition-all duration-300 md:sticky md:glass 
      max-md:fixed ${isScrolled ? 'glass shadow-sm max-md:bg-white/90' : 'bg-transparent max-md:border-none'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={isScrolled ? "/bokana-logo.svg" : "/bokana-logo-white.svg"} 
                alt="Bokana Electronics" 
                className="h-12 w-auto md:hidden transition-opacity duration-300"
              />
              <img 
                src="/bokana-logo.svg" 
                alt="Bokana Electronics" 
                className="h-12 w-auto hidden md:block"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors">About</Link>
            <Link href="/products" className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors">Products</Link>
            <Link href="/blog" className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors">Blog</Link>
            <Link href="/contact" className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Button variant="whatsapp" href="https://wa.me/2347070708571">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
