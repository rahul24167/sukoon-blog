import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-5 border-b border-greenMainColor">
        <div className="flex justify-between items-center">
          <Link
            href="/blogs/write"
            className="bg-primaryYellow text-white px-4 py-2 rounded-full hover:bg-green transition-colors"
          >
            Write a Blog
          </Link>
        </div>
      </header>
      <main className="mt-10">
        <h1 className="text-4xl font-bold text-greenMainColor mb-6">About Our Blog</h1>
        <p className="text-lg text-darkGray mb-4">
          Welcome to our Medium-style blog, where we share insights, ideas, and stories about technology,
          entrepreneurship, and personal growth.
        </p>
        <p className="text-lg text-darkGray mb-4">
          Our mission is to provide valuable content that inspires and empowers our readers to pursue their passions and
          achieve their goals.
        </p>
        <p className="text-lg text-darkGray">
          Join our community of thinkers, creators, and innovators as we explore the cutting edge of various fields and
          discuss the ideas that shape our world.
        </p>
      </main>
    </div>
  )
}

