"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 mb-[env(safe-area-inset-bottom)] glass shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white/90 backdrop-blur-lg border border-white/50 rounded-full">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/products" className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${isActive('/products') ? 'text-[var(--bokana-amber)]' : 'text-gray-500 hover:text-[var(--bokana-slate)]'}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="text-[10px] font-medium">Shop</span>
        </Link>
        
        <Link href="/about" className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${isActive('/about') ? 'text-[var(--bokana-amber)]' : 'text-gray-500 hover:text-[var(--bokana-slate)]'}`}>
           <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           <span className="text-[10px] font-medium">About</span>
        </Link>

        {/* Home Button Center (Floating above) */}
        <Link href="/" className="relative -top-5 flex flex-col items-center justify-center w-16 h-full" aria-label="Home">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--bokana-slate)] to-[var(--bokana-amber)] flex items-center justify-center shadow-lg text-white border-4 border-[var(--background)] transition-transform active:scale-95">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </Link>

        <Link href="/blog" className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${isActive('/blog') ? 'text-[var(--bokana-amber)]' : 'text-gray-500 hover:text-[var(--bokana-slate)]'}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="text-[10px] font-medium">Blog</span>
        </Link>

        <Link href="/contact" className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${isActive('/contact') ? 'text-[var(--bokana-amber)]' : 'text-gray-500 hover:text-[var(--bokana-slate)]'}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-medium">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
