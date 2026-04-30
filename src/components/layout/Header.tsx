import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/bokana-logo.svg" 
                alt="Bokana Electronics" 
                className="h-12 w-auto"
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
          <div className="flex items-center md:hidden">
            <button className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
