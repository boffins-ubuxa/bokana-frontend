import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 block">
              <img 
                src="/bokana-logo-white.svg" 
                alt="Bokana Electronics" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              More Than a Powerbank. It's a Promise. Reliable power solutions for everyday life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>B24 Banex Plaza, Wuse 2</li>
              <li>bokanaofficial@yahoo.com</li>
              <li>07070708571</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Bokana Electronics. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>Designed by</span>
            <a 
              href="https://www.boffinstechnology.com.ng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--bokana-amber)] transition-colors font-medium underline underline-offset-4"
            >
              Boffins Technology
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
