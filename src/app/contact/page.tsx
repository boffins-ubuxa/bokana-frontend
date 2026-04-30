'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productInterest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Bokana, I am ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested in: ${formData.productInterest}\nMessage: ${formData.message}`;
    const url = `https://wa.me/2347070708571?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-24 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-5xl font-extrabold text-[var(--foreground)] mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12">
              We're here to help you find the right power solution. Reach out to us for enquiries, bulk orders, or support.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-[var(--bokana-slate)]/10 text-[var(--bokana-slate)] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">Visit Us</h3>
                  <p className="mt-2 text-gray-600">B24 Banex Plaza<br />Wuse 2, Abuja<br />Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-[var(--bokana-slate)]/10 text-[var(--bokana-slate)] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">Email Us</h3>
                  <p className="mt-2 text-gray-600">bokanaofficial@yahoo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-[var(--bokana-amber)]/10 text-[var(--bokana-amber)] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">Call or WhatsApp</h3>
                  <p className="mt-2 text-gray-600">07070708571</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-[var(--bokana-slate)] focus:border-[var(--bokana-slate)] outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-[var(--bokana-slate)] focus:border-[var(--bokana-slate)] outline-none transition-all" placeholder="+234..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-[var(--bokana-slate)] focus:border-[var(--bokana-slate)] outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                <select id="productInterest" name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-[var(--bokana-slate)] focus:border-[var(--bokana-slate)] outline-none transition-all bg-white">
                  <option value="">Select a product...</option>
                  <option value="Bokana Power Mini">Bokana Power Mini</option>
                  <option value="Bokana Power Pro">Bokana Power Pro</option>
                  <option value="Bokana Power Ultra">Bokana Power Ultra</option>
                  <option value="Bokana Mini Fan">Bokana Mini Fan</option>
                  <option value="Bulk Order / General Enquiry">Bulk Order / General Enquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-[var(--bokana-slate)] focus:border-[var(--bokana-slate)] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                Send Message via WhatsApp
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
