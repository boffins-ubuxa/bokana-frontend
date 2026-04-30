'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src="/bokana-logo.svg" 
                alt="Bokana Electronics" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="whatsapp" href="https://wa.me/2347070708571">
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Tray */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={closeMenu}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-[280px] bg-[var(--background)] shadow-2xl transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button 
                onClick={closeMenu}
                className="text-[var(--foreground)] hover:text-[var(--bokana-amber)] focus:outline-none p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={closeMenu}
                  className="text-xl font-semibold text-[var(--foreground)] hover:text-[var(--bokana-amber)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-10">
              <Button 
                variant="whatsapp" 
                href="https://wa.me/2347070708571" 
                className="w-full justify-center py-4 text-lg"
                onClick={closeMenu}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
