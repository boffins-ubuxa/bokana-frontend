import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./blog-post";


export const metadata: Metadata = {
  title: "Blog & News | Bokana Electronics",
  description:
    "Read power tips, product guides, lifestyle articles, and updates from Bokana Electronics.",
};

export default function BlogPage() {
  return (
    <div className="motion-fade bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      <section className="relative overflow-hidden bg-[var(--foreground)] pt-32 pb-20 text-white md:pt-28 md:pb-24">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--bokana-amber)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--bokana-slate)]/30 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--bokana-amber)]">
              Blog & News
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Power tips, product guides, and Bokana updates.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
              Stay updated with practical power tips, product education, lifestyle guides,
              and stories from Bokana Electronics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
              Latest Articles
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Learn how to get more from your devices.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Helpful articles for customers who want safer, smarter, and more dependable
              portable power solutions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`motion-rise motion-delay-${index + 1} motion-card group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
              >
                <div className="relative h-56 overflow-hidden bg-[var(--legacy-gray)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--bokana-slate)] shadow-sm backdrop-blur">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--bokana-amber)]" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold leading-7 text-[var(--foreground)]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-[var(--bokana-amber)] transition hover:text-[var(--bokana-slate)]"
                    >
                      Read Article
                      <span className="ml-2 transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--legacy-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="motion-rise overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[var(--foreground)] p-8 text-white md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
                  Featured Story
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  More than a powerbank. It’s a promise.
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Bokana Electronics carries forward a legacy of reliability, integrity,
                  and dependable service. Our story is built around one standard:
                  do it right, or don’t do it at all.
                </p>

                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex rounded-full bg-[var(--bokana-amber)] px-7 py-4 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Read Our Story
                  </Link>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    "Power You Can Trust",
                    "Safety First",
                    "Built to Last",
                    "Customer First, Always",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`motion-scale motion-delay-${index + 1} rounded-2xl border border-gray-100 bg-[var(--bokana-blush)] p-6`}
                    >
                      <div className="mb-4 h-2 w-12 rounded-full bg-[var(--bokana-amber)]" />
                      <h3 className="text-lg font-bold text-[var(--foreground)]">
                        {item}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        Practical electronics designed around real customers, everyday
                        movement, and dependable power needs.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--bokana-slate)] to-[var(--bokana-amber)] py-20 text-center text-white">
        <div className="motion-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">
            Need dependable power?
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Choose Bokana for power you can trust.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Explore our power banks, mini fans, earbuds, speakers, and practical electronics
            built for everyday life.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-8 py-4 text-base font-bold text-[var(--foreground)] transition hover:bg-[var(--legacy-gray)]"
            >
              Shop Products
            </Link>

            <Link
              href="https://wa.me/2347070708571"
              className="rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white transition hover:opacity-90"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}