import Link from "next/link"

export default function Write() {
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
        <h1 className="text-4xl font-bold text-greenMainColor mb-6">Write a New Post</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-darkGray">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-greenMainColor focus:ring focus:ring-greenMainColor focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-darkGray">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-greenMainColor focus:ring focus:ring-greenMainColor focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-greenMainColor hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenMainColor"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

