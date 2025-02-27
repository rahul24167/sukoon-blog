import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt:
      "Exploring how artificial intelligence is shaping our daily routines and what to expect in the coming years.",
    author: "John Smith",
    date: "May 20, 2023",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt:
      "Discover simple ways to reduce your carbon footprint and contribute to a more sustainable future.",
    author: "Emily Green",
    date: "May 18, 2023",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "The Art of Productive Procrastination",
    excerpt:
      "Learn how to turn procrastination into a tool for creativity and problem-solving.",
    author: "Alex Johnson",
    date: "May 16, 2023",
    readTime: "7 min read",
  },
];

const topics = [
  "Technology",
  "Entrepreneurship",
  "Health",
  "Travel",
  "Food",
  "Lifestyle",
];
export default function Home() {
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
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="/logo.svg"
                alt="Featured post"
                width={100}
                height={100}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-greenMainColor font-semibold">
                Featured
              </div>
              <Link
                href="/blogs/post/1"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding Success in the Digital Age: Strategies for Online
                Entrepreneurs
              </Link>
              <p className="mt-2 text-gray-500">
                Learn how to navigate the ever-changing landscape of online
                business and discover key strategies for success in the digital
                age.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/placeholder.svg"
                    alt="Author"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Rahul</p>
                  <p className="text-sm text-gray-500">May 15, 2023 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="mb-8 pb-8 border-b border-lightGray"
              >
                <Link
                  href={`/blog/post/${post.id}`}
                  className="block mt-4 text-2xl font-semibold text-black hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-gray-500">{post.excerpt}</p>
                <div className="mt-4 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/placeholder.svg"
                    alt={post.author}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-greenMainColor mb-4">
                Discover more of what matters to you
              </h2>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <Link
                    key={topic}
                    href={`/blog/topic/${topic.toLowerCase()}`}
                    className="px-3 py-1 bg-goldLight text-goldFont rounded-full text-sm hover:bg-goldDark transition-colors"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-greenMainColor mb-4">
                Reading list
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/blog/post/4"
                    className="text-darkGray hover:text-primaryYellow transition-colors"
                  >
                    10 Tips for Better Time Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post/5"
                    className="text-darkGray hover:text-primaryYellow transition-colors"
                  >
                    The Rise of Remote Work: Challenges and Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post/6"
                    className="text-darkGray hover:text-primaryYellow transition-colors"
                  >
                    Mindfulness Meditation: A Beginner's Guide
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
