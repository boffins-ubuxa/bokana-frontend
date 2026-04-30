export default function AboutPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-[var(--foreground)] mb-8">About Us</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="lead text-xl mb-6">
            Bokana Electronics is a legacy-driven electronics and portable power brand inspired by Bokana West Africa Ltd., a company founded in the 1980s.
          </p>
          <p className="mb-6">
            We are building a future where reliable power is accessible to everyone. From portable powerbanks and mini fans to our upcoming smarter personal energy storage and solar finance solutions, our promise remains the same: quality, reliability, and progress.
          </p>
          <p>
            More details about our rich history and future roadmap will be published here soon.
          </p>
        </div>
      </div>
    </div>
  );
}
