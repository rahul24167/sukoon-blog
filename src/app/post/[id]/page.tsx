import Link from "next/link"
import { notFound } from "next/navigation"

// This is a mock function. In a real application, you would fetch the post data from an API or database.
function getPost(id: string) {
  const posts = [
    {
      id: "1",
      title: "The Future of AI in Everyday Life",
      content: "Lorem ipsum dolor sit amet...",
      author: "John Smith",
      date: "May 20, 2023",
      readTime: "6 min read",
    },
    {
      id: "2",
      title: "Sustainable Living: Small Changes, Big Impact",
      content: "Consectetur adipiscing elit...",
      author: "Emily Green",
      date: "May 18, 2023",
      readTime: "5 min read",
    },
    {
      id: "3",
      title: "The Art of Productive Procrastination",
      content: "Sed do eiusmod tempor incididunt...",
      author: "Alex Johnson",
      date: "May 16, 2023",
      readTime: "7 min read",
    },
  ]
  return posts.find((post) => post.id === id)
}

export default function Post({ params }: { params: { id: string } }) {
  const post = getPost(params.id)

  if (!post) {
    notFound()
  }

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
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold text-greenMainColor mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <img className="h-10 w-10 rounded-full mr-3" src="/placeholder.svg" alt={post.author} />
            <div>
              <p className="text-sm font-medium text-darkGray">{post.author}</p>
              <p className="text-sm text-gray-500">
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>
          <div className="text-darkGray">{post.content}</div>
        </article>
      </main>
    </div>
  )
}

