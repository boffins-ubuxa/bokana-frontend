import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="motion-fade py-24 bg-white min-h-screen">
      <div className="motion-rise max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-[var(--foreground)] mb-8">Privacy Policy & Terms of Service</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6 text-sm text-gray-500">Last updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            At Bokana Electronics, we collect information that you provide directly to us, such as when you fill out our contact form, communicate with us via WhatsApp, or make a purchase.
          </p>

          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about products, services, offers, and promotions.
          </p>

          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">3. Information Sharing</h2>
          <p className="mb-6">
            We do not share your personal information with third parties except as described in this privacy policy, such as with trusted service providers who need access to such information to carry out work on our behalf.
          </p>
          
          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">4. Warranty & Replacement Promise</h2>
          <p className="mb-6">
            Our 6-month replacement promise covers manufacturing defects under normal use. It does not cover damage caused by misuse, physical damage, or water exposure.
          </p>

          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy or our Terms of Service, please contact us at bokanaofficial@yahoo.com.
          </p>
        </div>
      </div>
    </div>
  );
}
