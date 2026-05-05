import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "../blog-post";


type BlogDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found | Bokana Electronics",
        };
    }

    return {
        title: `${post.title} | Bokana Electronics`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter((item) => item.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="motion-fade min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <section className="relative overflow-hidden bg-[var(--foreground)] pt-32 pb-16 text-white md:pt-28 md:pb-20">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--bokana-amber)]/20 blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center text-sm font-bold text-[var(--bokana-amber)] transition hover:text-white"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="motion-rise">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
                            {post.category}
                        </p>

                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>

                        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-gray-300">
                            <span>{post.author}</span>
                            <span className="h-1 w-1 rounded-full bg-[var(--bokana-amber)]" />
                            <span>{post.date}</span>
                            <span className="h-1 w-1 rounded-full bg-[var(--bokana-amber)]" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="motion-scale relative -mt-10 overflow-hidden rounded-[2rem] bg-[var(--legacy-gray)] shadow-2xl shadow-black/10">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 1024px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <article className="motion-rise mx-auto mt-12 max-w-3xl">
                        <p className="text-2xl font-semibold leading-10 text-[var(--foreground)]">
                            {post.excerpt}
                        </p>

                        <div className="mt-10 space-y-7 text-lg leading-9 text-gray-600">
                            {post.content.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 rounded-[2rem] border border-[var(--bokana-amber)]/20 bg-[var(--bokana-blush)] p-6 md:p-8">
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
                                Bokana Promise
                            </p>
                            <h2 className="mt-3 text-2xl font-extrabold text-[var(--foreground)]">
                                More than a power bank. It’s a promise.
                            </h2>
                            <p className="mt-4 leading-8 text-gray-600">
                                Choose Bokana for reliable portable energy, honest support, and
                                electronics designed around how people actually use power.
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/products"
                                    className="rounded-full bg-[var(--bokana-amber)] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                                >
                                    Explore Products
                                </Link>

                                <Link
                                    href="https://wa.me/2347070708571"
                                    className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                                >
                                    Chat on WhatsApp
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-20 bg-[var(--legacy-gray)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="motion-rise mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--bokana-amber)]">
                                Keep Reading
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Related articles
                            </h2>
                        </div>

                        <Link
                            href="/blog"
                            className="text-sm font-bold text-[var(--bokana-amber)] transition hover:text-[var(--bokana-slate)]"
                        >
                            View all articles →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {relatedPosts.map((relatedPost, index) => (
                            <article
                                key={relatedPost.slug}
                                className={`motion-rise motion-delay-${index + 1} motion-card overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
                            >
                                <div className="relative h-52 bg-[var(--legacy-gray)]">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--bokana-amber)]">
                                        {relatedPost.category}
                                    </p>

                                    <h3 className="mt-3 text-xl font-extrabold leading-7">
                                        {relatedPost.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                        {relatedPost.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${relatedPost.slug}`}
                                        className="mt-5 inline-flex text-sm font-bold text-[var(--bokana-amber)] hover:text-[var(--bokana-slate)]"
                                    >
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}