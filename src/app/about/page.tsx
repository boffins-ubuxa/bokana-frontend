import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Bokana Electronics | Dependable Power Always",
  description:
    "Learn about Bokana Electronics, our dependable portable power promise, safety-first product standards, customer support, and future vision for distributed energy.",
};

const delayClasses = ["", "motion-delay-1", "motion-delay-2", "motion-delay-3", "motion-delay-4"];

const trustStats = [
  {
    value: "6-Month",
    label: "Replacement Promise",
  },
  {
    value: "USB-C PD",
    label: "Fast-Charge Ready",
  },
  {
    value: "QC 3.0",
    label: "Performance Support",
  },
  {
    value: "Multi-Layer",
    label: "Device Protection",
  },
];

const uniqueSellingPoints = [
  {
    title: "Safety First",
    description:
      "Multi-layer protection is designed into every device, including safeguards against overcharge, overcurrent, overheating, and unstable daily power conditions.",
  },
  {
    title: "Performance Driven",
    description:
      "USB-C Power Delivery, QC 3.0 support, and high-efficiency battery cells help customers charge faster while wasting less energy.",
  },
  {
    title: "Built to Last",
    description:
      "Premium materials, certified components, and rigorous quality control keep each Bokana product ready for everyday work, travel, outages, and movement.",
  },
  {
    title: "Customer Obsessed",
    description:
      "Our products are designed around real use: capacity that lasts, ports that matter, sizes that fit, and support that stays available after the sale.",
  },
  {
    title: "Responsibly Made",
    description:
      "Efficient power delivery, longer product lifespans, and recyclable packaging reduce waste while making portable energy more dependable.",
  },
];

const missionPillars = [
  {
    title: "Transparency",
    description:
      "We publish honest performance expectations and avoid exaggerated claims, so customers know what their device can truly deliver.",
  },
  {
    title: "Quality",
    description:
      "Certified high-grade components, safer cells, and careful assembly standards support longer product life and better device protection.",
  },
  {
    title: "Post-Sales Support",
    description:
      "A six-month replacement promise and responsive WhatsApp support help customers buy with confidence and resolve issues quickly.",
  },
];

const roadmap = [
  {
    title: "Bokana Retail",
    kicker: "Smarter personal power",
    description:
      "Power banks evolve into data-driven personal energy storage units that track usage, charging behavior, and grid performance.",
  },
  {
    title: "Bokana Microgrids",
    kicker: "Cluster energy access",
    description:
      "Small solar-powered grids support markets and business clusters that need dependable power for trade, lighting, phones, and tools.",
  },
  {
    title: "Bokana Solar Finance",
    kicker: "Flexible ownership",
    description:
      "Pay-as-you-go and lease-to-own models make home solar energy more reachable for households that need affordable reliability.",
  },
];

const coreValues = [
  {
    title: "Power You Can Trust",
    description:
      "Safety and reliability are non-negotiable. Every Bokana power bank is built with certified protection because your devices and peace of mind matter.",
  },
  {
    title: "Innovation That Moves With You",
    description:
      "We stay ahead with fast-charging technology, USB-C PD, and smart power management that keeps you connected without slowing you down.",
  },
  {
    title: "Customer First, Always",
    description:
      "We design for travel, work, outages, study, camping, and daily movement. Real customer needs drive our capacity, port, size, and support decisions.",
  },
  {
    title: "Quality Without Compromise",
    description:
      "Premium battery cells, durable builds, and rigorous testing matter more to us than rushing out products that cut corners on performance.",
  },
  {
    title: "Sustainable Energy Access",
    description:
      "Portable power should be efficient and responsible, with longer product lifespans and recyclable packaging that help reduce waste.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden bg-[var(--foreground)] pt-32 pb-20 text-white md:pt-28 md:pb-24">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div className="motion-rise">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--bokana-amber)]">
                About Bokana Electronics
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Dependable power, always.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
                Bokana sells power banks, mini fans, and practical electronics built for modern life, everyday movement, and the reality of unreliable power. We combine safety-first engineering, honest performance, durable materials, and responsive support so customers can trust every charge.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/products" variant="secondary" className="px-7 py-4 text-base font-bold">
                  Explore Products
                </Button>
                <Button
                  href="https://wa.me/2347070708571"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--foreground)] px-7 py-4 text-base font-bold"
                >
                  Talk to Support
                </Button>
              </div>
            </div>

            <div className="motion-scale motion-delay-1">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black/20">
                  <Image
                    src="/products/powerbank-50k-white.jpeg"
                    alt="Bokana high-capacity power bank"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover motion-drift"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--bokana-amber)]">
                      Brand promise
                    </p>
                    <p className="mt-2 text-xl font-bold">More than a power bank. It is a promise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="motion-rise motion-delay-2 mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold text-[var(--bokana-amber)]">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="motion-rise">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">Who we are</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A portable power brand built around trust.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Bokana Electronics exists to make everyday energy more reliable. Our current focus is selling dependable power banks, mini fans, and electronics devices that help people stay connected at work, on the road, in school, at home, and during outages.
              </p>
            </div>

            <div className="motion-rise motion-delay-1 grid grid-cols-1 gap-4 md:grid-cols-3">
              {missionPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="motion-card rounded-2xl border border-gray-100 bg-[var(--bokana-blush)] p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[var(--foreground)]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bokana-blush)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="motion-scale">
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-black/5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--legacy-gray)]">
                  <Image
                    src="/products/powerbank-10k-skyblue.jpeg"
                    alt="Bokana Power legacy product"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover motion-drift"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/35 p-4 text-white backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--bokana-amber)]">
                      The Bokana Standard
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      Do it right, or don’t do it at all.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="motion-rise motion-delay-1">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
                Our Story
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
                The legacy continues.
              </h2>

              <p className="mt-4 text-xl font-semibold leading-8 text-[var(--bokana-slate)]">
                More than a power bank. It’s a promise.
              </p>

              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  Bokana Electronics was born from a legacy that began with{" "}
                  <span className="font-semibold text-[var(--foreground)]">
                    Bokana West Africa Ltd.
                  </span>
                  , a company founded by a father who believed in reliability, service,
                  and the power of building something that could serve people beyond one
                  generation.
                </p>

                <p>
                  When we lost him, we did not only inherit a name. We inherited a
                  standard — a standard of doing business with integrity, choosing quality
                  over shortcuts, and creating value that people can trust.
                </p>

                <p>
                  Today, Bokana Electronics carries that vision forward by providing
                  dependable power banks, mini fans, and everyday electronics designed for
                  real life — for work, travel, school, business, outages, and the daily
                  hustle.
                </p>

                <p>
                  <span className="font-semibold text-[var(--foreground)]">
                    Bokana Power
                  </span>{" "}
                  is our tribute to that legacy. Every product we offer is guided by the
                  same principle our founder believed in:{" "}
                  <span className="font-semibold text-[var(--foreground)]">
                    do it right, or don’t do it at all.
                  </span>
                </p>

                <p>
                  We are not just selling devices. We are putting dependable energy in
                  people’s hands — for their phones, their work, their movement, their
                  comfort, and their peace of mind.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--bokana-amber)]/20 bg-white p-6 shadow-sm">
                <p className="text-lg font-bold leading-8 text-[var(--foreground)]">
                  Because at Bokana, power is more than convenience.
                </p>
                <p className="mt-2 text-2xl font-extrabold leading-9 text-[var(--bokana-amber)]">
                  It is trust. It is continuity. It is a promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--legacy-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-slate)]">
              Unique selling proposition
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why customers choose Bokana.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Every Bokana product is shaped by five practical commitments: safer devices, stronger charging performance, longer-lasting builds, customer-led design, and responsible energy use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {uniqueSellingPoints.map((point, index) => (
              <article
                key={point.title}
                className={`motion-rise ${delayClasses[index]} motion-card rounded-2xl border border-white bg-white p-6 shadow-sm lg:min-h-[300px]`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bokana-amber)]/15 text-[var(--bokana-amber)]">
                  <span className="text-lg font-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[var(--foreground)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="motion-rise">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">Vision</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From portable power to a distributed power utility.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                In the next five years, Bokana aims to evolve beyond retail electronics into an interconnected energy network. Our power banks can become personal energy storage units, portable extensions of a larger Bokana power system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {roadmap.map((item, index) => (
                <article
                  key={item.title}
                  className={`motion-rise ${delayClasses[index]} motion-card rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--bokana-amber)]">
                        Pillar {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                    </div>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200">
                      {item.kicker}
                    </span>
                  </div>
                  <p className="mt-4 leading-7 text-gray-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">Mission</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our mission is dependable power through honest engineering.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              We promise dependable power by being transparent about performance, using certified high-grade components, designing for safety and longevity, and supporting customers after purchase.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className={`motion-rise ${delayClasses[index]} motion-card rounded-2xl border border-gray-100 bg-[var(--background)] p-6 shadow-sm`}
              >
                <h3 className="text-lg font-bold text-[var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bokana-blush)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise grid grid-cols-1 gap-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-black/5 md:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-slate)]">
                Built for real life
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Power solutions for work, travel, outages, and everyday comfort.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Whether you need a power bank for long commutes, a mini fan for hot afternoons, or an electronics accessory that simply works when you need it, Bokana focuses on practical reliability over empty specifications.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["No exaggerated claims", "Certified components", "Responsive WhatsApp support", "Recyclable packaging"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`motion-scale ${delayClasses[index]} rounded-2xl border border-gray-100 bg-[var(--legacy-gray)] p-5`}
                  >
                    <div className="mb-4 h-2 w-12 rounded-full bg-[var(--bokana-amber)]" />
                    <p className="font-bold text-[var(--foreground)]">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--bokana-slate)] to-[var(--bokana-amber)] py-20 text-center text-white">
        <div className="motion-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready for power you can trust?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Choose Bokana for reliable portable energy, honest support, and electronics designed around how people actually use power.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/products" variant="primary" className="bg-white px-8 py-4 text-base font-bold text-[var(--foreground)] hover:bg-[var(--legacy-gray)]">
              Shop Bokana Products
            </Button>
            <Button href="https://wa.me/2347070708571" variant="whatsapp" className="px-8 py-4 text-base font-bold">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
