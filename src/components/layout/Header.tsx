'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img 
                src="/bokana-logo.svg" 
                alt="Bokana Electronics" 
                className="h-10 md:h-12 w-auto transition-all"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-foreground hover:text-[var(--bokana-amber)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="whatsapp" href="https://wa.me/2347070708571" className="text-sm">
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 z-40 md:hidden bg-background transition-all duration-500 ease-in-out overflow-y-auto ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-start min-h-full pt-32 pb-12 px-6">
          <nav className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-light tracking-tight text-foreground hover:text-[var(--bokana-amber)] transition-all duration-500 transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div 
            className={`mt-16 w-full max-w-xs transition-all duration-700 delay-500 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Button 
              variant="whatsapp" 
              href="https://wa.me/2347070708571" 
              className="w-full justify-center py-5 text-lg rounded-full shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Chat on WhatsApp
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-center text-[var(--bokana-slate)] opacity-60">
            <p className="text-sm">Premium Electronics Delivery</p>
            <p className="text-xs mt-1">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </header>
  );
}
