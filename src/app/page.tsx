import Image from "next/image";
import Button from "@/components/ui/Button";
import ProductSection from "@/components/ProductSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import MobileHeroImage from "@/components/MobileHeroImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Hero Section (Hidden on Desktop) */}
      <section className="md:hidden relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[var(--foreground)] via-slate-900 to-black">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl z-0" />
        <div className="relative z-10 text-center px-4 mt-[-5dvh]">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
            Power You Can <span className="text-[var(--bokana-amber)]">Trust.</span><br />
            Legacy in Every <span className="text-[var(--bokana-amber)] drop-shadow-md">Charge.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 w-[120%] h-[55%] z-0 translate-y-4">
          <MobileHeroImage />
        </div>
      </section>

      {/* Mobile CTA Buttons (Immediately below the 100dvh viewport) */}
      <section className="md:hidden w-full bg-[var(--background)] px-4 py-6 flex justify-center gap-3 border-b border-gray-100">
        <Button href="/products" variant="primary" className="flex-1 py-4 text-base font-semibold shadow-md">
          Shop Products
        </Button>
        <Button variant="whatsapp" href="https://wa.me/2347070708571" className="flex-1 py-4 text-base font-semibold shadow-md">
          WhatsApp
        </Button>
      </section>

      {/* Desktop Hero Section (Hidden on Mobile) */}
      <section className="hidden md:block relative bg-[var(--background)] pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--legacy-gray)] to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-6">
                Power You Can <span className="text-[var(--bokana-slate)]">Trust.</span><br />
                Legacy in Every <span className="text-[var(--bokana-amber)]">Charge.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Bokana Electronics provides reliable powerbanks, mini fans, and everyday electronics built for modern life, Nigerian power realities, and people who need dependable energy on the go.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/products" variant="primary" className="px-8 py-4 text-lg">
                  Shop Products
                </Button>
                <Button variant="whatsapp" href="https://wa.me/2347070708571" className="px-8 py-4 text-lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/products/powerbank-50k-black.jpeg"
                alt="Bokana Super Fast Charge Power Bank"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-4 py-2 md:py-0">
              <div className="text-[var(--bokana-slate)] font-bold text-lg mb-1">6-Month</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Replacement Promise</div>
            </div>
            <div className="px-4 py-2 md:py-0">
              <div className="text-[var(--bokana-slate)] font-bold text-lg mb-1">Fast</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Charging Support</div>
            </div>
            <div className="px-4 py-2 md:py-0">
              <div className="text-[var(--bokana-amber)] font-bold text-lg mb-1">Safety</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Protected Devices</div>
            </div>
            <div className="px-4 py-2 md:py-0">
              <div className="text-[var(--bokana-slate)] font-bold text-lg mb-1">Built For</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Daily Use</div>
            </div>
            <div className="px-4 py-2 md:py-0">
              <div className="text-[var(--bokana-amber)] font-bold text-lg mb-1">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">WhatsApp Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductSection
        title="Everyday Power Solutions"
        subtitle="Built to keep you connected when it matters most."
        limit={6}
      />

      {/* Why Choose Bokana */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">Why Choose Bokana</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Engineering excellence meets practical design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Safety First"
              description="Multi-layer protection against overcharge, overcurrent, and overheating."
            />
            <FeatureCard
              title="Performance Driven"
              description="USB-C PD, QC 3.0, and efficient charging technology to save you time."
            />
            <FeatureCard
              title="Built to Last"
              description="Premium materials and rigorous quality control for exceptional durability."
            />
            <FeatureCard
              title="Customer Obsessed"
              description="Designed around how people actually use power in their daily lives."
            />
            <FeatureCard
              title="Responsibly Made"
              description="Efficient power delivery and longer product lifespan for a greener tomorrow."
            />
          </div>
        </div>
      </section>

      {/* Legacy Story Section */}
      <section className="py-24 bg-[var(--foreground)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[var(--bokana-slate)] rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">A Legacy of Power, Rebuilt for Today</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Bokana Electronics was created to continue the vision of Bokana West Africa Ltd., a business founded in the 1980s with a commitment to service, reliability, and progress. Today, Bokana carries that legacy into a new generation of everyday power solutions.
          </p>
          <Button variant="outline" href="/about" className="border-white text-white hover:bg-white hover:text-[var(--foreground)]">
            Read Our Story
          </Button>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-[var(--legacy-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">From Portable Power to Distributed Energy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our roadmap to powering the future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Bokana Retail"
              description="Smarter powerbanks, mini fans, and everyday electronics that keep you connected."
            />
            <FeatureCard
              title="Bokana Microgrids"
              description="Future implementation of small solar-powered grids for markets and business clusters."
            />
            <FeatureCard
              title="Bokana Solar Finance"
              description="Upcoming pay-as-you-go and lease-to-own models for household energy independence."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real experiences from real users.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Chinedu O."
              role="Business Owner"
              content="The Bokana Power Pro has been a lifesaver for my shop. When the power goes out, I can still charge my PoS machine and phone without any worries."
            />
            <TestimonialCard
              name="Amina Y."
              role="Student"
              content="I love my Bokana Mini Fan! It's so quiet and the battery lasts for hours. Perfect for studying during hot afternoons."
            />
            <TestimonialCard
              name="Tunde A."
              role="Freelancer"
              content="Quality you can actually feel. I've used many powerbanks, but the fast charging on this one is genuinely impressive. Worth every naira."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[var(--bokana-slate)] to-[var(--bokana-amber)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need reliable power for work, travel, or daily use?</h2>
          <p className="text-xl mb-10 opacity-90">Chat with Bokana today and get the right power solution for your lifestyle.</p>
          <Button variant="whatsapp" href="https://wa.me/2347070708571" className="px-10 py-5 text-xl font-bold">
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
